"use client";
import React from "react";
import TabNav from "./TabNav";
import { designTabs } from "../lib/codeTabs";

export default function DesignContent({
  leftClick,
  handleLeftArrowClick,
  handleRightArrowClick,
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
          <TabNav
            handleLeftArrowClick={handleLeftArrowClick}
            handleRightArrowClick={handleRightArrowClick}
            selectedTab={selectedTab}
            handleSelectedTabClick={handleSelectedTabClick}
          />
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
      {/* {leftClick && activeTab && !clicked ? <HomeContent /> : null}
      {rightClick && activeTab && !clicked ? <CodeContent /> : null} */}
    </div>
  );
}
