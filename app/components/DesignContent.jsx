"use client";
import React from "react";
import TabNav from "./TabNav";
import { designTabs } from "../lib/codeTabs";

export default function DesignContent({
  activeTab,
  setActiveTab,
  handleTabClick,
  handleLeftArrowClick,
  handleRightArrowClick,
  clicked,
  leftClick,
  rightClick,
  labelName,
  selectedTab,
  setSelectedTab,
  handleSelectedTabClick,
  activeNav,
}) {
  return (
    <div className="h-full w-full">
      <TabNav
        clicked={clicked}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleTabClick={handleTabClick}
        handleLeftArrowClick={handleLeftArrowClick}
        handleRightArrowClick={handleRightArrowClick}
        selectedTab={selectedTab}
        handleSelectedTabClick={handleSelectedTabClick}
        labelName={labelName}
        activeNav={activeNav}
      />
      <main>
        {selectedTab && clicked ? (
          <div>
            {designTabs.find(({ label }) => label === "Tailwindcss")?.component}
          </div>
        ) : (
          <div>
            {designTabs.find(({ id }) => id === selectedTab)?.component}
          </div>
        )}
      </main>
    </div>
  );
}
