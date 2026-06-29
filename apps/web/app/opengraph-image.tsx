import { ImageResponse } from "next/og";

export const alt = "Recall — Active-recall exam prep";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social card. Generated at build/request time, so no binary asset
// needs to live in the repo. Auto-wired into OpenGraph + Twitter by Next.js.
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#000000",
          color: "#F5F5F7"
        }}
      >
        <div style={{ fontSize: 120, fontWeight: 800, color: "#10B981", letterSpacing: -4 }}>
          Recall
        </div>
        <div style={{ fontSize: 46, fontWeight: 700, marginTop: 8 }}>Drill. Read. Repeat.</div>
        <div style={{ fontSize: 30, color: "#9A9AA0", marginTop: 28, maxWidth: 900 }}>
          Active-recall prep with spaced repetition — UPSC · JEE · NEET · SSC CGL · GATE · CFA · FRM
        </div>
      </div>
    ),
    size
  );
}
