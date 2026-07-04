import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Các dự án tiêu biểu: NextJS, React, Laravel, admin dashboard, ecommerce và công cụ nội bộ.",
};

const projectsPage = () => {
  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Layers className="h-4 w-4" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>Dự án tiêu biểu</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            Các dự án còn truy cập được, ưu tiên web app thực tế, dashboard
            quản trị, hệ thống ecommerce, công cụ nội bộ và nền tảng full-stack
            phù hợp với ReactJS, NextJS, Laravel.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {portfolioConfig.projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
