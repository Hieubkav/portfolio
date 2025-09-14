import { type DefaultSeoProps } from "next-seo";
import { portfolioConfig } from "@/config/portfolio.config";

export const siteUrl = portfolioConfig.seo.url || "https://example.com";

export const defaultSeo: DefaultSeoProps = {
  titleTemplate: `%s - ${portfolioConfig.title}`,
  defaultTitle: portfolioConfig.name,
  description: portfolioConfig.description,
  canonical: siteUrl,
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName: portfolioConfig.name,
    title: portfolioConfig.name,
    description: portfolioConfig.description,
    images: [
      {
        url: `${siteUrl.replace(/\/$/, "")}/og-image.png`,
        width: 1200,
        height: 630,
        alt: portfolioConfig.name,
      },
    ],
  },
  twitter: {
    handle: portfolioConfig.seo.twitterHandle,
    site: portfolioConfig.seo.twitterHandle,
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    { name: "application-name", content: portfolioConfig.name },
    { name: "author", content: portfolioConfig.name },
    { name: "keywords", content: portfolioConfig.seo.keywords.join(", ") },
    { name: "robots", content: "index,follow" },
  ],
};

