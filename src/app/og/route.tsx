import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { portfolioConfig } from "@/config/portfolio.config";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const title = searchParams.get("title") || portfolioConfig.name;
  const subtitle = searchParams.get("subtitle") || portfolioConfig.title;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#0B0B0B",
          padding: "64px 96px",
          color: "#FFFFFF",
        }}
      >
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 36,
            color: "#c9c9c9",
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 96,
            fontSize: 28,
            color: "#9aa0a6",
          }}
        >
          {portfolioConfig.seo.url.replace(/https?:\/\//, "")}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

