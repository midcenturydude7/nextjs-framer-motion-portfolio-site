"use client";
import React from "react";
import HeroContents from "./Main/Hero/HeroContents";
import ProjectsContent from "./Main/Projects/ProjectsContent";
import { cn } from "../../lib/utils";

export default function HomeWrapper() {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div className="relative flex h-lvh flex-col items-center justify-start space-y-20">
      {/* ANIMATED SHAPES | TODO: CREATE COMPONENT FOR SCREEN READERS TO IGNORE */}
      <div className="absolute left-[63%] top-28 z-[-2] h-60 w-36 -rotate-45 rounded-xl bg-gradient-to-r from-slate-200/80 from-10% via-purple-900/90 via-50% to-fuchsia-700/70 to-90% opacity-30 blur-3xl" />
      {/* BACKGROUND ANIMATION */}
      <div
        className={cn(
          "absolute left-[35%] top-20 z-[-1] h-36 w-72 rounded-full bg-sky-200/80 opacity-30 blur-3xl transition duration-1000",
          hovered
            ? "opacity-50 transition delay-100 duration-1000 ease-in-out"
            : null,
        )}
      />
      <div className="absolute left-[28%] top-20 h-72 w-72 animate-blob rounded-full bg-indigo-500 mix-blend-multiply blur-2xl filter" />
      <div className="animation-delay-2000 absolute left-[38%] top-20 h-72 w-72 animate-blob rounded-full bg-fuchsia-500 mix-blend-multiply blur-2xl filter" />
      <div className="animation-delay-4000 absolute left-[33%] top-48 h-72 w-72 animate-blob rounded-full bg-pink-700 mix-blend-multiply blur-2xl filter" />

      {/* MAIN CONTENT: HERO SECTION */}
      <HeroContents setHovered={setHovered} />

      {/* MAIN CONTENT: PROJECTS SECTION */}
      <ProjectsContent />
    </div>
  );
}
