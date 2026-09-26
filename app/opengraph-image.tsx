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
          background:
            "radial-gradient(ellipse 70% 60% at 20% 15%, rgba(217,130,95,0.28), transparent 70%), radial-gradient(ellipse 60% 60% at 90% 100%, rgba(185,88,59,0.22), transparent 70%), #171210",
          color: "#f3ece4",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 20,
              background: "#d9825f",
              color: "#171210",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
            }}
          >
            ♥
          </div>
          <div style={{ display: "flex", fontSize: 36, fontWeight: 500 }}>
            {siteConfig.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#e08a63",
              fontFamily: "sans-serif",
            }}
          >
            {`${offers.length} dating platforms to explore`}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 76,
              fontWeight: 500,
              lineHeight: 1.02,
              maxWidth: 1000,
              letterSpacing: -1.5,
            }}
          >
            <span>Discover online dating platforms&nbsp;</span>
            <span style={{ fontStyle: "italic", color: "#e08a63" }}>worth your time</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#cdbfb4",
              maxWidth: 900,
              fontFamily: "sans-serif",
            }}
          >
            Compare the offers and visit the platform that fits you.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#8f8178",
            fontFamily: "sans-serif",
          }}
        >
          18+ only. Links open external dating websites.
        </div>
      </div>
    ),
    { ...size },
  );
}
