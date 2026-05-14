"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const noiseGLSL = /* glsl */ `
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
`;

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uDistortion;
  uniform float uSpeed;
  uniform vec2 uMouse;

  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  varying float vDisplacement;

  ${noiseGLSL}

  void main() {
    float t = uTime * uSpeed;

    float n  = snoise(position * 0.7 + vec3(t * 0.45, t * 0.30, t * 0.55));
    n       += snoise(position * 1.6 + vec3(t * 0.80))         * 0.45;
    n       += snoise(position * 3.0 + vec3(t * 1.20))         * 0.18;

    float mouseInfluence = dot(normalize(position.xyz), vec3(uMouse, 0.5)) * 0.18;
    n += mouseInfluence;

    vec3 displaced = position + normal * n * uDistortion;

    vDisplacement = n;
    vNormal = normalize(normalMatrix * normal);

    vec4 worldPos = modelMatrix * vec4(displaced, 1.0);
    vWorldPosition = worldPos.xyz;

    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`;

const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  uniform vec3 uColorD;
  uniform vec3 uColorE;

  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  varying float vDisplacement;

  void main() {
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    float ndv = max(0.0, dot(normalize(vNormal), viewDir));
    float fresnel = pow(1.0 - ndv, 2.2);

    float t = clamp(vDisplacement * 0.6 + 0.5, 0.0, 1.0);
    vec3 base = mix(uColorA, uColorB, t);

    float wave = sin(uTime * 0.45 + vWorldPosition.y * 1.4 + vWorldPosition.x * 0.7) * 0.5 + 0.5;
    base = mix(base, uColorC, wave * 0.65);

    float rimMix = smoothstep(0.0, 1.0, fresnel);
    vec3 rim = mix(uColorD, uColorE, rimMix);
    vec3 finalColor = mix(base, rim, fresnel * 0.85);

    finalColor += rim * pow(fresnel, 4.0) * 0.4;

    float alpha = 0.88;
    gl_FragColor = vec4(finalColor, alpha);
  }
`;

type OrbPalette = {
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
};

type PaletteId = "default" | "ocean" | "sunset" | "forest" | "royal";
type ModeId = "dark" | "light";

const ORB_PALETTES: Record<PaletteId, Record<ModeId, OrbPalette>> = {
  default: {
    dark:  { a: "#1e3a8a", b: "#7c3aed", c: "#ec4899", d: "#22d3ee", e: "#fbbf24" },
    light: { a: "#a5b4fc", b: "#c4b5fd", c: "#f9a8d4", d: "#67e8f9", e: "#fde68a" },
  },
  ocean: {
    dark:  { a: "#0c4a6e", b: "#0891b2", c: "#06b6d4", d: "#67e8f9", e: "#e0f2fe" },
    light: { a: "#7dd3fc", b: "#67e8f9", c: "#5eead4", d: "#bae6fd", e: "#ffffff" },
  },
  sunset: {
    dark:  { a: "#7f1d1d", b: "#f97316", c: "#ec4899", d: "#fde047", e: "#fb7185" },
    light: { a: "#fdba74", b: "#fda4af", c: "#f9a8d4", d: "#fde68a", e: "#fef3c7" },
  },
  forest: {
    dark:  { a: "#064e3b", b: "#10b981", c: "#14b8a6", d: "#a7f3d0", e: "#67e8f9" },
    light: { a: "#86efac", b: "#6ee7b7", c: "#5eead4", d: "#d1fae5", e: "#cffafe" },
  },
  royal: {
    dark:  { a: "#1e1b4b", b: "#4f46e5", c: "#7c3aed", d: "#60a5fa", e: "#e0e7ff" },
    light: { a: "#a5b4fc", b: "#818cf8", c: "#c4b5fd", d: "#bfdbfe", e: "#fef3c7" },
  },
};

function readOrbPalette(): OrbPalette {
  const root = document.documentElement;
  const id = (root.getAttribute("data-palette") as PaletteId | null) ?? "default";
  const mode: ModeId = root.classList.contains("dark") ? "dark" : "light";
  const set = ORB_PALETTES[id] ?? ORB_PALETTES.default;
  return set[mode];
}

export default function HeroOrb() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / Math.max(container.clientHeight, 1),
      0.1,
      100
    );
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(container.clientWidth, container.clientHeight, false);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1.5, 64);

    const initialPalette = readOrbPalette();
    const uniforms = {
      uTime: { value: 0 },
      uDistortion: { value: 0.55 },
      uSpeed: { value: 0.38 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uColorA: { value: new THREE.Color(initialPalette.a) },
      uColorB: { value: new THREE.Color(initialPalette.b) },
      uColorC: { value: new THREE.Color(initialPalette.c) },
      uColorD: { value: new THREE.Color(initialPalette.d) },
      uColorE: { value: new THREE.Color(initialPalette.e) },
    };

    const targetColors = {
      a: new THREE.Color(initialPalette.a),
      b: new THREE.Color(initialPalette.b),
      c: new THREE.Color(initialPalette.c),
      d: new THREE.Color(initialPalette.d),
      e: new THREE.Color(initialPalette.e),
    };

    const applyPalette = () => {
      const p = readOrbPalette();
      targetColors.a.set(p.a);
      targetColors.b.set(p.b);
      targetColors.c.set(p.c);
      targetColors.d.set(p.d);
      targetColors.e.set(p.e);
      if (reducedMotion) {
        uniforms.uColorA.value.copy(targetColors.a);
        uniforms.uColorB.value.copy(targetColors.b);
        uniforms.uColorC.value.copy(targetColors.c);
        uniforms.uColorD.value.copy(targetColors.d);
        uniforms.uColorE.value.copy(targetColors.e);
        renderer.render(scene, camera);
      }
    };

    const themeObserver = new MutationObserver(applyPalette);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-palette"],
    });

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
    });

    const orb = new THREE.Mesh(geometry, material);
    scene.add(orb);

    const mouseTarget = new THREE.Vector2(0, 0);

    const handlePointer = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouseTarget.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseTarget.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    window.addEventListener("pointermove", handlePointer, { passive: true });

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    let visible = true;
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    visibilityObserver.observe(container);

    let frame = 0;
    const timer = new THREE.Timer();
    timer.connect(document);
    const mouseEased = new THREE.Vector2(0, 0);

    const animate = (timestamp?: number) => {
      if (!visible) {
        frame = requestAnimationFrame(animate);
        return;
      }

      timer.update(timestamp);
      const elapsed = timer.getElapsed();
      uniforms.uTime.value = elapsed;

      mouseEased.x += (mouseTarget.x - mouseEased.x) * 0.05;
      mouseEased.y += (mouseTarget.y - mouseEased.y) * 0.05;
      uniforms.uMouse.value.copy(mouseEased);

      uniforms.uColorA.value.lerp(targetColors.a, 0.06);
      uniforms.uColorB.value.lerp(targetColors.b, 0.06);
      uniforms.uColorC.value.lerp(targetColors.c, 0.06);
      uniforms.uColorD.value.lerp(targetColors.d, 0.06);
      uniforms.uColorE.value.lerp(targetColors.e, 0.06);

      if (!reducedMotion) {
        orb.rotation.y = elapsed * 0.12 + mouseEased.x * 0.4;
        orb.rotation.x = -mouseEased.y * 0.3;
      }

      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };

    if (reducedMotion) {
      renderer.render(scene, camera);
    } else {
      frame = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointer);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      themeObserver.disconnect();
      timer.dispose();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
