"use client";
import React from "react";
import { heroTabs, heroContent } from "../lib/heroTabs";
import { cn } from "../lib/utils";

export default function HomeWrapper() {
  const [hovered, setHovered] = React.useState(false);
  const [selected, setSelected] = React.useState(null);
  const [clicked, setClicked] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(null);

  function handleTabClick(id) {
    setActiveTab(id);
    setClicked(true);
  }

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
            : "",
        )}
      />
      <div className="absolute left-[28%] top-20 h-72 w-72 animate-blob rounded-full bg-indigo-500 mix-blend-multiply blur-2xl filter" />
      <div className="animation-delay-2000 absolute left-[38%] top-20 h-72 w-72 animate-blob rounded-full bg-fuchsia-500 mix-blend-multiply blur-2xl filter" />
      <div className="animation-delay-4000 absolute left-[33%] top-48 h-72 w-72 animate-blob rounded-full bg-pink-700 mix-blend-multiply blur-2xl filter" />
      {/* MAIN CONTENT: HERO SECTION */}
      <div className="flex h-[33%] w-[45%] text-slate-100/50">
        <div className="flex w-[55%] flex-col gap-[1.2rem] text-[1.2rem]">
          {/* TABS: DESIGN, CODE, BUILD */}
          {heroTabs.map(({ id, svgIcon, svgArrow, label, tag }) => (
            <div
              key={id}
              onPointerEnter={() => setHovered(true)}
              onPointerLeave={() => setHovered(false)}
              onMouseEnter={() => {
                setSelected(id) && setClicked(false);
              }}
              onMouseLeave={() => {
                setSelected(null) && setClicked(false);
              }}
              onClick={() => handleTabClick(id)}
              className="group relative flex flex-1 items-center justify-between rounded-bl-lg rounded-tl-lg border-l-[1px] border-t-[1px] border-slate-50/5 bg-gradient-to-r from-slate-900/90 to-transparent pl-8 transition duration-1000 ease-in-out hover:cursor-pointer hover:bg-gradient-to-r hover:from-indigo-950/15 hover:to-transparent hover:transition hover:duration-1000 hover:ease-in-out"
            >
              <div
                className={cn(
                  "flex items-end justify-between",
                  label === "Design" ? "w-[6.9rem]" : "w-[6rem]",
                )}
              >
                <span>{svgIcon}</span>
                <h1 className="transition-colors duration-1000 ease-in-out group-hover:text-indigo-200/70 group-hover:transition-colors group-hover:duration-1000 group-hover:ease-in-out">
                  {label}
                </h1>
              </div>
              <div className="flex w-[fit-content] items-center justify-between">
                {hovered && selected === id ? (
                  <span className="mr-4 rounded-lg border border-transparent px-4 py-2 transition duration-1000 group-hover:bg-gradient-to-r group-hover:from-sky-500/80 group-hover:from-10% group-hover:to-indigo-600/70 group-hover:to-95% group-hover:transition group-hover:duration-1000 group-hover:ease-in-out">
                    {tag}
                  </span>
                ) : (
                  <span className="mr-4 rounded-lg border border-slate-200/20 px-4 py-2 opacity-20 transition duration-1000">
                    {tag}
                  </span>
                )}
                <div className="opacity-10 transition-all ease-in-out group-hover:text-indigo-200/70 group-hover:opacity-100 group-hover:transition-all group-hover:duration-1000 group-hover:ease-in-out">
                  {svgArrow}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[-4rem] flex w-[45%] flex-1 flex-col items-start justify-start bg-transparent pl-[4rem]">
          {/* HELLO SECTION */}
          {clicked && activeTab ? (
            heroContent.map(({ id, component }) => (
              <div key={id} className="h-full w-full">
                {activeTab === id && component}
              </div>
            ))
          ) : (
            <div>
              {heroContent.map(({ id, component, label }) => (
                <div key={id}>{label === "HomeContent" && component}</div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* MAIN CONTENT: PROJECTS SECTION */}
      <div className="mt-20 w-[45%]">
        <div className="flex justify-between gap-10 text-[1.2rem] text-slate-100/50">
          <div className="flex h-[300px] w-[30%] flex-1 items-start justify-start rounded-lg border-t-[1px] border-slate-50/15 bg-gradient-to-b from-slate-900/90 to-transparent pl-6 pt-6">
            <h1>Project 1</h1>
          </div>
          <div className="flex h-[300px] w-[30%] flex-1 items-start justify-start rounded-lg border-t-[1px] border-slate-50/15 bg-gradient-to-b from-slate-900/90 to-transparent pl-6 pt-6">
            <h1>Project 2</h1>
          </div>
          <div className="flex h-[300px] w-[30%] flex-1 items-start justify-start rounded-lg border-t-[1px] border-slate-50/15 bg-gradient-to-b from-slate-900/90 to-transparent pl-6 pt-6">
            <h1>Project 3</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
