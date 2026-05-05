import { ImageResponse } from "next/og";

export const alt = "Kamrul Hasan — Full Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(99, 102, 241, 0.45), transparent 55%), radial-gradient(circle at 80% 100%, rgba(236, 72, 153, 0.40), transparent 55%), radial-gradient(circle at 100% 20%, rgba(139, 92, 246, 0.35), transparent 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#22c55e",
              boxShadow: "0 0 0 6px rgba(34, 197, 94, 0.25)",
            }}
          />
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 4,
              color: "rgba(255, 255, 255, 0.7)",
              textTransform: "uppercase",
            }}
          >
            Available for new projects
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.05,
              backgroundImage:
                "linear-gradient(90deg, #818cf8, #a78bfa, #f472b6)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Kamrul Hasan
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 600,
              color: "rgba(255, 255, 255, 0.92)",
            }}
          >
            Full Stack Web Developer
          </div>
          <div
            style={{
              fontSize: 26,
              color: "rgba(255, 255, 255, 0.65)",
              lineHeight: 1.4,
              maxWidth: 920,
            }}
          >
            Laravel · Vue.js · React.js · Next.js · TypeScript · AWS — building
            modern, secure and scalable web products.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex", gap: 28 }}>
            <span>kh4035209@gmail.com</span>
            <span>·</span>
            <span>github.com/KamrulSarwar23</span>
          </div>
          <div style={{ fontWeight: 700, color: "rgba(255, 255, 255, 0.85)" }}>
            kamrul.dev
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
