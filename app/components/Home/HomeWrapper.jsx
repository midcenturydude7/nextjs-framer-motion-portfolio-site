"use client";
import React from "react";
import HeroContents from "./Main/Hero/HeroContents";
import { cn } from "../../lib/utils";

export default function HomeWrapper() {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div className="relative flex h-lvh flex-col items-center justify-start p-24">
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
      <div className="mt-16 w-[45%]">
        <div className="flex flex-wrap justify-between text-[1.2rem] gap-8 text-sky-100/50">
          <div className="flex h-[300px] w-[30%] min-w-72 flex-1 items-start justify-start rounded-lg border-t-[1px] border-slate-50/15 bg-gradient-to-b from-slate-900/90 to-transparent pl-6 pt-6">
            <h1>Project 1</h1>
          </div>
          <div className="flex h-[300px] w-[30%] min-w-72 flex-1 items-start justify-start rounded-lg border-t-[1px] border-slate-50/15 bg-gradient-to-b from-slate-900/90 to-transparent pl-6 pt-6">
            <h1>Project 2</h1>
          </div>
          <div className="flex h-[300px] w-[30%] min-w-72 flex-1 items-start justify-start rounded-lg border-t-[1px] border-slate-50/15 bg-gradient-to-b from-slate-900/90 to-transparent pl-6 pt-6">
            <h1>Project 3</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
