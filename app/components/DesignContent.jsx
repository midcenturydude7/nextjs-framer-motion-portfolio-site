import React from "react";
import HomeContent from "./HomeContent";
import CodeContent from "./CodeContent";

export default function DesignContent({
  clicked,
  leftClick,
  handleLeftArrowClick,
  rightClick,
  handleRightArrowClick,
  activeTab,
}) {
  return (
    <div>
      {leftClick === false ? (
        <div className="h-full w-full">
          <nav className="flex items-center justify-between pt-[6.2rem]">
            <div className="flex items-center">
              <button
                onClick={() => handleLeftArrowClick()}
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
              <li>
                <button className="rounded-tr-lg border-l-[1px] border-r-[1px] border-t-[1px] border-slate-200/20 bg-indigo-950/15 px-4 py-[0.5rem]">
                  Tailwindcss
                </button>
              </li>
              <li>
                <button>Animations</button>
              </li>
              <li>
                <button>Tools</button>
              </li>
            </ul>
            <div className="flex items-center">
              <button
                onClick={() => {
                  console.log("right arrow clicked");
                  handleRightArrowClick("CodeContent");
                }}
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
            <div className="flex flex-col gap-4 px-4 py-6">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                illum dolorem accusamus repellat, iure enim cum nesciunt
                ratione. Deleniti ratione dicta ullam eum pariatur, officiis id
                repellendus est expedita asperiores.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                illum dolorem accusamus repellat, iure enim cum nesciunt
                ratione. Deleniti ratione dicta ullam eum pariatur, officiis id
                repellendus est expedita asperiores.
              </p>
            </div>
          </main>
        </div>
      ) : null}
      {leftClick && rightClick === false ? <HomeContent /> : null}
      {rightClick && activeTab && !clicked ? <CodeContent /> : null}
    </div>
  );
}
