import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "8px",
          border: "1.5px solid #262a35",
          fontFamily: "monospace",
          fontSize: "15px",
          fontWeight: 800,
          letterSpacing: "-0.5px",
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
