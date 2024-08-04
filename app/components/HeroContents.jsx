"use client";
import React from "react";
import { heroTabs } from "../lib/heroTabs";
import { heroContents } from "../lib/heroContentData";
import { designTabs, codeItems } from "../lib/codeTabs";
import { cn } from "../lib/utils";

export default function HeroContents({ setHovered }) {
  const [selected, setSelected] = React.useState(null);
  const [clicked, setClicked] = React.useState(false);
  const [leftClick, setLeftClick] = React.useState(false);
  const [rightClick, setRightClick] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(null);
  const [selectedTab, setSelectedTab] = React.useState(null);
  const [labelName, setLabelName] = React.useState("");

  function handleTabClick(id, labelTitle) {
    const heroContent = heroContents({
      setLeftClick,
      setRightClick,
      setActiveTab,
      setLabelName,
      setClicked,
      setSelectedTab,
      selectedTab,
    });

    const currentLabel = heroTabs.find(
      ({ label }) => label === labelTitle,
    )?.label;

    setActiveTab(id);
    setLabelName(currentLabel);
    setClicked(true);
    setLeftClick(false);
    setRightClick(false);
    setSelectedTab(1);
  }

  function handleLeftArrowClick(tabName) {
    const heroContent = heroContents({
      setLeftClick,
      setActiveTab,
      setLabelName,
      setSelectedTab,
    });

    const newTab = heroContent.find(({ label }) => label === tabName)?.id;
    setActiveTab(newTab);

    const currentLabel = heroTabs.find(({ id }) => id === newTab)?.label;
    setLabelName(currentLabel);
    setLeftClick(false);
    setSelectedTab(1);

    console.log("Left arrow clicked:", tabName, newTab, labelName);
  }

  function handleRightArrowClick(tabName) {
    const heroContent = heroContents({
      setRightClick,
      setActiveTab,
      setLabelName,
      setSelectedTab,
    });

    const newTab = heroContent.find(({ label }) => label === tabName)?.id;
    setActiveTab(newTab);

    const currentLabel = heroTabs.find(({ id }) => id === newTab)?.label;
    setLabelName(currentLabel);
    setRightClick(false);
    setSelectedTab(1);

    console.log("Right arrow clicked:", tabName, newTab, labelName);
  }

  function handleSelectedTabClick(id) {
    setSelectedTab(designTabs.find((tab) => tab.id === id)?.id);
  }

  React.useEffect(() => {
    // console.log("Tab clicked:", labelName);
    // console.log("Selected tab:", selectedTab);
  }, [labelName, selectedTab, activeTab]);

  const heroContent = heroContents({
    clicked,
    leftClick,
    setLeftClick,
    handleLeftArrowClick,
    rightClick,
    setRightClick,
    handleRightArrowClick,
    activeTab,
    setActiveTab,
    setClicked,
    handleTabClick,
    labelName,
    setLabelName,
    selectedTab,
    setSelectedTab,
    handleSelectedTabClick,
  });

  return (
    <div className="flex h-[33%] w-[45%] text-sky-100/50">
      <div className="flex w-[45%] flex-col gap-[1.2rem] text-[1.2rem]">
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
            onClick={() => handleTabClick(id, label)}
            className={cn(
              "group relative flex flex-1 items-center justify-between rounded-bl-lg rounded-tl-lg border-l-[1px] border-t-[1px] border-slate-50/5 bg-gradient-to-r from-slate-900/90 to-transparent pl-8 transition duration-1000 hover:cursor-pointer hover:bg-gradient-to-r hover:from-indigo-950/15",
              activeTab === id &&
                clicked &&
                (leftClick === false || rightClick === false)
                ? "bg-gradient-to-r from-indigo-950/15 to-transparent hover:cursor-default"
                : null,
            )}
          >
            <div
              className={cn(
                "flex items-end justify-between",
                label === "Design" ? "w-[6.9rem]" : "w-[6rem]",
                activeTab === id
                  ? "text-sky-300/50"
                  : "group:hover:text-sky-300/50",
              )}
            >
              <span
                className={cn(
                  "transition duration-1000 group-hover:text-sky-300/50",
                )}
              >
                {svgIcon}
              </span>
              <h1
                className={cn(
                  "transition duration-1000 group-hover:text-sky-300/50",
                  activeTab === id ? "text-sky-300/50" : "",
                )}
              >
                {label}
              </h1>
            </div>
            <div className="flex w-[fit-content] items-center justify-between">
              {selected === id ? (
                <span className="mr-4 rounded-lg border border-slate-200/10 px-[0.7rem] py-[0.35rem] transition duration-1000 group-hover:bg-gradient-to-r group-hover:from-sky-200/10 group-hover:from-10% group-hover:to-indigo-800/15 group-hover:to-95% group-hover:text-sky-300/50">
                  {tag}
                </span>
              ) : (
                <span
                  className={cn(
                    "mr-4 rounded-lg border border-slate-200/10 px-[0.7rem] py-[0.35rem] opacity-20 transition duration-1000",
                    activeTab === id
                      ? "bg-gradient-to-r from-sky-200/10 from-10% to-indigo-800/15 to-95% text-sky-300/50 opacity-100 transition duration-1000"
                      : "",
                  )}
                >
                  {tag}
                </span>
              )}
              <div
                className={cn(
                  "opacity-10 transition delay-500 duration-1000 group-hover:text-sky-300/50 group-hover:opacity-100",
                  activeTab === id
                    ? "opacity-0 transition delay-500 group-hover:opacity-0"
                    : null,
                )}
              >
                {svgArrow}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[-4rem] flex w-[55%] flex-1 flex-col items-start justify-start bg-transparent pl-[4rem]">
        {/* HELLO SECTION */}
        {clicked && activeTab ? (
          <div>{heroContent.find(({ id }) => id === activeTab)?.component}</div>
        ) : (
          <div>
            {
              heroContent.find(({ label }) => label === "HomeContent")
                ?.component
            }
          </div>
        )}
      </div>
    </div>
  );
}
