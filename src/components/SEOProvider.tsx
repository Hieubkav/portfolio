"use client";

import { SocialProfileJsonLd, LogoJsonLd } from "next-seo";
import { siteUrl } from "@/config/seo.config";
import { portfolioConfig } from "@/config/portfolio.config";

export default function SEOProvider() {
  return (
    <>
      <LogoJsonLd logo={`${siteUrl.replace(/\/$/, "")}/portfolioLogo.png`} url={siteUrl} />
      <SocialProfileJsonLd
        type="Person"
        name={portfolioConfig.name}
        url={siteUrl}
        sameAs={Object.values(portfolioConfig.socialLinks)}
      />
    </>
  );
}
