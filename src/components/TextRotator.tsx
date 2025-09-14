import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";

function TextRotator() {
  return (
    <div className="py-4  rounded-md flex flex-col justify-center items-center overflow-hidden">
      <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">
        I am a {portfolioConfig.title}
        {portfolioConfig.skills.roles.length > 0 && (
          <>
          {" "}—{" "}
          <span className="inline-flex ml-2 flex-col h-[1.25em] sm:h-[1.25em] overflow-hidden">
            <ul className="block text-left font-rubik text-lg sm:text-3xl leading-[1.25em] [&_li]:block animate-text-slide-4 will-change-transform">
              {portfolioConfig.skills.roles.map((role, index) => (
                <li key={index} className="text-[#2f7df4]">
                  {role}
                </li>
              ))}
            </ul>
          </span>
          </>
        )}
      </div>
    </div>
  );
}

export default TextRotator;
