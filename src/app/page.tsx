import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";
import type { Metadata } from "next";
import { portfolioConfig } from "@/config/portfolio.config";

export const metadata: Metadata = {
  title: portfolioConfig.name,
  description: portfolioConfig.description,
};


export default function Home() {
  return (
    <>
      {/* LEFT SIDE  */}
      <FramerWrapper
        className=" h-full w-auto flex flex-col justify-start gap-4"
        y={0}
        x={-100}
      >
        {/* Mobile avatar (above content on small screens) */}
        <div className="w-full mb-3 lg:hidden flex items-center justify-center">
          <div className="relative w-full max-w-[520px] h-[58vw] max-h-[520px]">
            <HeroImage />
          </div>
        </div>
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-4">
          <SocialLinks />
        </div>
        {/* Download Resume button removed as requested */}
      </FramerWrapper>
      {/* RIGHT SIDE image  */}
      <FramerWrapper
        className="h-full w-[47%] relative block   max-lg:hidden"
        y={0}
        x={100}
      >
        {/* IMAGE  */}
        <HeroImage />
      </FramerWrapper>

      {/* GITHUB BUTTON  */}
      <GithubBtn />
    </>
  );
}
