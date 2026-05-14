"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 1200;
const FIELD_RADIUS = 60;

function makeCircleTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.35, "rgba(255,255,255,0.55)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export default function HeroParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / Math.max(container.clientHeight, 1),
      0.1,
      1000
    );
    camera.position.z = 70;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight, false);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);

    const paletteColors = [
      new THREE.Color("#60a5fa"), // blue-400
      new THREE.Color("#a78bfa"), // violet-400
      new THREE.Color("#f472b6"), // pink-400
      new THREE.Color("#22d3ee"), // cyan-400
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // sample inside a sphere using rejection-free method
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = FIELD_RADIUS * Math.cbrt(Math.random());

      const i3 = i * 3;
      positions[i3 + 0] = r * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = r * Math.cos(phi);

      const color =
        paletteColors[Math.floor(Math.random() * paletteColors.length)];
      colors[i3 + 0] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = 0.6 + Math.random() * 1.4;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const sprite = makeCircleTexture();

    const material = new THREE.PointsMaterial({
      size: 0.9,
      sizeAttenuation: true,
      map: sprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // mouse-based parallax target
    const target = { x: 0, y: 0 };
    const eased = { x: 0, y: 0 };

    const handleMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      target.x = nx;
      target.y = ny;
    };
    window.addEventListener("pointermove", handleMove, { passive: true });

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // pause when off-screen
    let visible = true;
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    visibilityObserver.observe(container);

    let frame = 0;
    const clock = new THREE.Clock();

    const render = () => {
      const elapsed = clock.getElapsedTime();

      if (!reducedMotion) {
        eased.x += (target.x - eased.x) * 0.04;
        eased.y += (target.y - eased.y) * 0.04;

        points.rotation.y = elapsed * 0.04 + eased.x * 0.35;
        points.rotation.x = elapsed * 0.02 + eased.y * 0.25;
      }

      renderer.render(scene, camera);
      frame = visible ? requestAnimationFrame(render) : 0;
    };

    const tick = () => {
      if (!visible) {
        frame = requestAnimationFrame(tick);
        return;
      }
      render();
    };

    if (reducedMotion) {
      // single static render
      renderer.render(scene, camera);
    } else {
      frame = requestAnimationFrame(tick);
    }

    // resume loop when visibility returns
    const resumeInterval = window.setInterval(() => {
      if (visible && !frame && !reducedMotion) {
        frame = requestAnimationFrame(tick);
      }
    }, 250);

    return () => {
      window.clearInterval(resumeInterval);
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handleMove);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      geometry.dispose();
      material.dispose();
      sprite.dispose();
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
