import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";

function TextRotator() {
  return (
    <div className="py-4 rounded-md flex flex-col justify-center items-start overflow-hidden">
      <p className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">
        I build web apps with
        {portfolioConfig.skills.roles.length > 0 && (
          <span className="mt-2 flex max-w-xl flex-wrap gap-2">
            {portfolioConfig.skills.roles.map((role, index) => (
              <span
                key={index}
                className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-rubik text-[#2f7df4] sm:text-base"
              >
                {role}
              </span>
            ))}
          </span>
        )}
      </p>
    </div>
  );
}

export default TextRotator;
