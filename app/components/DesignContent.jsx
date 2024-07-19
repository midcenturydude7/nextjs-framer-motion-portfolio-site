import React from "react";
import HomeContent from "./HomeContent";
import CodeContent from "./CodeContent";
import { codeTabs } from "../lib/codeTabs";
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
    codeTabs.find(({ label }) => label === "Tailwindcss")?.id,
  );

  function handleSelectedTabClick(id) {
    setSelectedTab(id);
  }

  return (
    <div>
      {leftClick === false ? (
        <div className="h-full w-full">
          <nav className="flex items-center justify-between pt-[6.2rem]">
            <div className="flex items-center">
              <button
                onClick={() => handleLeftArrowClick("HomeContent")}
                className="rounded-full border border-slate-200/20 p-2 opacity-70"
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
            <ul className="flex items-center justify-between gap-[3.75rem] border-b border-slate-200/20 text-[1.175rem]">
              {codeTabs.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => handleSelectedTabClick(id)}
                    className={`
                      ${
                        selectedTab === id
                          ? "rounded-tr-lg border-l-[1px] border-r-[1px] border-t-[1px] border-slate-200/20 bg-indigo-950/15 px-4 py-[0.5rem]"
                          : ""
                      }
                      `}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center">
              <button
                onClick={() => handleRightArrowClick("CodeContent")}
                className="rounded-full border border-slate-200/20 p-2"
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
                {codeTabs.find(({ id }) => id === selectedTab)?.component}
              </div>
            ) : (
              <div>
                {
                  codeTabs.find(({ label }) => label === "Tailwindcss")
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
