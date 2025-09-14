import { cn } from "@/lib/utils";
import { Facebook, ExternalLink, Github, MessageSquare } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const SocialLinks = () => {
  const links = [
    {
      name: "Facebook",
      link: portfolioConfig.socialLinks.facebook,
      icon: <Facebook />,
    },
    {
      name: "Zalo",
      link: portfolioConfig.socialLinks.zalo ?? "https://zalo.me/0948066514",
      icon: (
        <img
          src="/icons/zalo.svg"
          alt="Zalo"
          className="h-5 w-5 sm:h-6 sm:w-6"
        />
      ),
    },
    {
      name: "Viblo",
      link: portfolioConfig.socialLinks.viblo ?? "https://viblo.asia/u/Hieubkav",
      icon: (
        <img
          src="/icons/viblo.webp"
          alt="Viblo"
          className="h-5 w-5 sm:h-6 sm:w-6"
        />
      ),
    },
    {
      name: "External",
      link: portfolioConfig.socialLinks.external,
      icon: <ExternalLink />,
    },
    {
      name: "Github",
      link: portfolioConfig.socialLinks.github,
      icon: <Github />,
    },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Link
              target="blank"
              href={itm.link}
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" })
              )}
            >
              {itm.icon}
            </Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
