import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";
import { personalData } from "@/data/personal";

export const alt = `${siteConfig.name} - Software Engineering Portfolio`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#0a0b0f",
          color: "#ecedf1",
          fontFamily: "sans-serif",
          border: "2px solid #262a35",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: 22,
              fontFamily: "monospace",
              color: "#5eead4",
              border: "1px solid #262a35",
              borderRadius: "9999px",
              padding: "8px 20px",
              backgroundColor: "#12141a",
            }}
          >
            <span>{"// software engineering portfolio"}</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: 18,
              color: "#4ade80",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#4ade80",
              }}
            />
            <span>Year 3 Undergraduate • Seeking Internship</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            {personalData.name}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#5eead4",
              fontWeight: 600,
            }}
          >
            {personalData.title}
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#9097a6",
              maxWidth: "960px",
              lineHeight: 1.5,
            }}
          >
            {personalData.heroIntro}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "24px",
            borderTop: "1px solid #262a35",
            fontSize: 18,
            color: "#9097a6",
            fontFamily: "monospace",
          }}
        >
          <div>SLIIT • Sri Lanka</div>
          <div>MERN • Next.js • React • TypeScript • Java • Python</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
