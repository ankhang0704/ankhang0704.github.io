import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "An Khang — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isVi = lang === "vi";

  return new ImageResponse(
    (
      <div style={{ background: "#0a0a0a", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "80px", color: "#fafafa", fontFamily: "sans-serif", border: "2px solid #222222" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "20px", letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.6, fontWeight: 700 }}>
            PORTFOLIO 2026 · AN KHANG STUDIO
          </div>
          <div style={{ fontSize: "14px", letterSpacing: "0.2em", textTransform: "uppercase", padding: "8px 16px", border: "1px solid #333333" }}>
            {isVi ? "SOFTWARE DEVELOPER" : "SOFTWARE DEVELOPER"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "76px", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>An Khang</div>
          <div style={{ fontSize: "36px", color: "#a0a0a0", fontWeight: 300, maxWidth: "900px" }}>
            {isVi ? "Web · Mobile · Tự động hóa · Hỗ trợ CNTT" : "Web · Mobile · Automation · IT Support"}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #222222", paddingTop: "32px" }}>
          <div style={{ display: "flex", gap: "16px", fontSize: "16px", fontFamily: "monospace", color: "#888888" }}>
            <span>Django</span><span>·</span><span>Flutter</span><span>·</span><span>Python</span><span>·</span><span>WordPress</span>
          </div>
          <div style={{ fontSize: "16px", color: "#fafafa", fontWeight: 600, letterSpacing: "0.05em" }}>ankhang0704.vercel.app</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
