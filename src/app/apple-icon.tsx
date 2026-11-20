import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0b0f",
          borderRadius: "40px",
          border: "4px solid #262a35",
          fontFamily: "monospace",
          fontSize: "82px",
          fontWeight: 800,
          letterSpacing: "-2px",
          color: "#2dd4bf",
        }}
      >
        PK
      </div>
    ),
    {
      ...size,
    }
  );
}
