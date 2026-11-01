import { ImageResponse } from "next/og"

export const alt = "Cristi Miloiu - Tech Lead & Product Owner at Genezio"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
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
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, color: "#a3a3a3" }}>
          PORTFOLIO / CRISTIMILOIU.COM
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 300, lineHeight: 1 }}>Cristi Miloiu</div>
          <div style={{ display: "flex", fontSize: 40, color: "#d4d4d4", marginTop: 32 }}>
            Tech Lead & Product Owner @ Genezio
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#a3a3a3", marginTop: 16 }}>
            AI Agents, Cloud Architecture, Full Stack
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a3a3a3" }}>Bucharest, Romania</div>
      </div>
    ),
    { ...size },
  )
}
