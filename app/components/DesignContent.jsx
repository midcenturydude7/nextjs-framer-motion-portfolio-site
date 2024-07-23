"use client";
import React from "react";
import { motion } from "framer-motion";
import HomeContent from "./HomeContent";
import CodeContent from "./CodeContent";
import { designTabs } from "../lib/codeTabs";
import { cn } from "../lib/utils";

export default function DesignContent({
  clicked,
  leftClick,
  handleLeftArrowClick,
  rightClick,
  handleRightArrowClick,
  activeTab,
}) {
  const [selectedTab, setSelectedTab] = React.useState(
    designTabs.find(({ label }) => label === "Tailwindcss")?.id,
  );

  function handleSelectedTabClick(id) {
    setSelectedTab(id);
  }

  return (
    <div>
      {leftClick === false ? (
        <div className="h-full w-full">
          <nav className="flex items-center justify-between pt-[6.075rem]">
            <div className="flex items-center">
              <button
                onClick={handleLeftArrowClick}
                className="rounded-full border border-slate-200/20 p-2 opacity-70 transition duration-1000 hover:border-sky-300/50 hover:bg-indigo-200/20 hover:text-sky-300/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex items-center justify-between gap-[3.75rem] border-b border-slate-200/10 text-[1.175rem]">
              {designTabs.map(({ label, id }) => (
                <li key={id}>
                  <motion.button
                    onClick={() => handleSelectedTabClick(id)}
                    className={`relative
                      ${
                        selectedTab === id
                          ? "cursor-default rounded-tr-lg border-l-[1px] border-r-[1px] border-t-[1px] border-slate-200/10 bg-indigo-950/15 px-4 py-[0.5rem] text-sky-300/50 hover:border-slate-200/10"
                          : "transition-colors duration-1000 hover:text-sky-300/50"
                      }
                      `}
                  >
                    <span>{label}</span>
                    {selectedTab === id ? (
                      <motion.div
                        className="absolute left-0 top-10 h-[4.5px] w-[100%] bg-sky-300/20"
                        transition={{
                          layout: {
                            duration: 0.25,
                            ease: "easeOut",
                            type: "spring",
                            bounce: 0,
                            damping: 50,
                            stiffness: 500,
                          },
                        }}
                        layoutId="slider"
                      />
                    ) : null}
                  </motion.button>
                </li>
              ))}
            </ul>
            <div className="flex items-center">
              <button
                onClick={handleRightArrowClick}
                className="rounded-full border border-slate-200/20 p-2 opacity-70 transition duration-1000 hover:border-sky-300/50 hover:bg-indigo-200/20 hover:text-sky-300/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </nav>
          <main>
            {selectedTab ? (
              <div>
                {designTabs.find(({ id }) => id === selectedTab)?.component}
              </div>
            ) : (
              <div>
                {
                  designTabs.find(({ label }) => label === "Tailwindcss")
                    ?.component
                }
              </div>
            )}
          </main>
        </div>
      ) : null}
      {leftClick && activeTab && !clicked ? <HomeContent /> : null}
      {rightClick && activeTab && !clicked ? <CodeContent /> : null}
    </div>
  );
}
