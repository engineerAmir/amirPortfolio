import { getPersonalContent, personal } from "@/config/personal";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

/**
 * Always renders in English, regardless of the active locale. Satori (the
 * renderer behind next/og's ImageResponse) doesn't support Arabic glyph
 * shaping (contextual GSUB substitution) — rendering Arabic text here
 * throws at build time. English branding for both locales is the pragmatic
 * tradeoff until Satori supports it.
 */
export function OgImageMarkup() {
  const content = getPersonalContent("en");

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "80px",
        background: "#05060a",
        backgroundImage:
          "radial-gradient(circle at 15% 20%, rgba(59,130,246,0.35), transparent 45%), radial-gradient(circle at 85% 80%, rgba(168,85,247,0.35), transparent 45%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 88,
          height: 88,
          borderRadius: 24,
          background: "linear-gradient(135deg, #3b82f6, #a855f7)",
          color: "white",
          fontSize: 36,
          fontWeight: 700,
          marginBottom: 40,
        }}
      >
        {personal.initials}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 68,
          fontWeight: 700,
          color: "#f5f6f8",
          letterSpacing: "-0.02em",
        }}
      >
        {personal.name}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 34,
          fontWeight: 500,
          marginTop: 18,
          color: "#a855f7",
        }}
      >
        {content.title} &nbsp;&middot;&nbsp; {content.subtitle}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 26,
          marginTop: 32,
          color: "#97a0b5",
          maxWidth: 880,
        }}
      >
        {content.tagline}
      </div>
    </div>
  );
}
