"use client";
import React from "react";
import TabNav from "./TabNav";
import { codeTabs } from "../lib/codeTabs";

export default function CodeContent({
  activeTab,
  leftClick,
  handleLeftArrowClick,
  handleRightArrowClick,
  clicked,
}) {
  const [selectedTab, setSelectedTab] = React.useState(
    codeTabs.find(({ label }) => label === "Nextjs/React")?.id,
  );

  function handleSelectedTabClick(id) {
    setSelectedTab(id);
  }

  return (
    <div>
      <div className="h-full w-full">
        <TabNav
          clicked={clicked}
          activeTab={activeTab}
          handleLeftArrowClick={handleLeftArrowClick}
          handleRightArrowClick={handleRightArrowClick}
          selectedTab={selectedTab}
          handleSelectedTabClick={handleSelectedTabClick}
        />
        <main>
          {selectedTab ? (
            <div>
              {codeTabs.find(({ id }) => id === selectedTab)?.component}
            </div>
          ) : (
            <div>
              {
                codeTabs.find(({ label }) => label === "Nextjs/React")
                  ?.component
              }
            </div>
          )}
        </main>
      </div>

      {/* {leftClick && activeTab && !clicked ? <HomeContent /> : null}
      {rightClick && activeTab && !clicked ? <CodeContent /> : null} */}
    </div>
  );
}
