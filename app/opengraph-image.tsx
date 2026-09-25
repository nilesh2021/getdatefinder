import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";
import { offers } from "@/lib/offers";

export const alt = `${siteConfig.name} - ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #ec4899 0%, #7c3aed 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 20,
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
            }}
          >
            ♥
          </div>
          <div style={{ display: "flex", fontSize: 36, fontWeight: 700 }}>
            {siteConfig.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            Discover online dating platforms worth your time
          </div>
          <div style={{ display: "flex", fontSize: 30, opacity: 0.9, maxWidth: 900 }}>
            {`Compare ${offers.length} dating offers and visit the platform that fits you.`}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, opacity: 0.85 }}>
          18+ only. Links open external dating websites.
        </div>
      </div>
    ),
    { ...size },
  );
}
