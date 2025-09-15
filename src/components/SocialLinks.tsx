import { cn } from "@/lib/utils";
import { Facebook, ExternalLink, Github } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
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
        <Image
          src="/icons/zalo.svg"
          alt="Zalo"
          width={24}
          height={24}
          className="h-5 w-5 sm:h-6 sm:w-6"
          priority={false}
        />
      ),
    },
    {
      name: "Viblo",
      link: portfolioConfig.socialLinks.viblo ?? "https://viblo.asia/u/Hieubkav",
      icon: (
        <Image
          src="/icons/viblo.webp"
          alt="Viblo"
          width={24}
          height={24}
          className="h-5 w-5 sm:h-6 sm:w-6"
          priority={false}
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
              target="_blank"
              rel="noopener noreferrer"
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
