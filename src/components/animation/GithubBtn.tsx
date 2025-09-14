import { Github } from "lucide-react";
import Link from "next/link";
import { portfolioConfig } from "@/config/portfolio.config";

const GithubBtn = () => {
  return (
    <Link
      href={portfolioConfig.socialLinks.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open GitHub profile"
      className="animate-pulse fixed right-4 bottom-4 sm:absolute sm:left-0 sm:right-auto sm:bottom-5 flex items-center gap-2 z-40 w-fit h-fit px-3 py-2 shadow-md border border-black rounded-full sm:rounded-r-full sm:rounded-l-none bg-white/80 dark:bg-neutral-900/80 backdrop-blur hover:bg-primary hover:text-white hover:animate-none"
    >
      <Github className="h-5 w-5" />
      <span className="font-rubik text-xl hidden sm:inline">Github</span>
    </Link>
  );
};

export default GithubBtn;
