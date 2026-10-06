import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt =
  "Funngro revamp — earn online with India's biggest brands";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          background: "#0b0f0d",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "24px",
              borderRadius: "999px",
              background: "#22c55e",
            }}
          />
          <div
            style={{
              fontSize: 28,
              letterSpacing: "4px",
              color: "#9fb0a7",
              fontFamily: "sans-serif",
            }}
          >
            FOR YOUNG INDIA · 14 TO 25
          </div>
        </div>
        <div
          style={{
            fontSize: 92,
            lineHeight: 1.02,
            fontWeight: 800,
            color: "#f4f7f5",
            fontFamily: "sans-serif",
          }}
        >
          Your skills deserve more than likes.
        </div>
        <div
          style={{
            marginTop: "36px",
            fontSize: 32,
            color: "#a3e635",
            fontFamily: "sans-serif",
          }}
        >
          70 lakh earners · 5,000+ brands · UPI payouts
        </div>
      </div>
    ),
    { ...size },
  );
}
