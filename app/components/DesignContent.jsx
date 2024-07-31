"use client";
import React from "react";
import TabNav from "./TabNav";
import { designTabs } from "../lib/codeTabs";

export default function DesignContent({
  activeTab,
  handleTabClick,
  handleLeftArrowClick,
  handleRightArrowClick,
  clicked,
  labelName,
  selectedTab,
  setSelectedTab,
  handleSelectedTabClick,
}) {
  const initialTab = designTabs.find(
    ({ label }) => label === "Tailwindcss",
  )?.id;

  return (
    <div className="h-full w-full">
      <TabNav
        clicked={clicked}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        handleLeftArrowClick={handleLeftArrowClick}
        handleRightArrowClick={handleRightArrowClick}
        selectedTab={selectedTab}
        handleSelectedTabClick={handleSelectedTabClick}
        labelName={labelName}
      />
      <main>
        {activeTab && clicked ? (
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

{
  /* {selectedTab ? (
    <div>
      {designTabs.find(({ id }) => id === selectedTab)?.component}
    </div>
  ) : (
    <div>
      {designTabs.find(({ label }) => label === "Tailwindcss")?.component}
    </div>
  )} */
}
