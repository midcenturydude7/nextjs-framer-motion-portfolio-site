"use client";
import React from "react";
import TabNav from "./TabNav";
import { codeItems } from "../lib/codeTabs";

export default function CodeContent({
  activeTab,
  handleLeftArrowClick,
  handleRightArrowClick,
  clicked,
  labelName,
  selectedTab,
  handleSelectedTabClick,
  setSelectedTab,
}) {
  // const [selectedTab, setSelectedTab] = React.useState(
  //   codeItems.find(({ label }) => label === "Nextjs")?.id,
  // );

  return (
    <div className="h-full w-full">
      <TabNav
        clicked={clicked}
        activeTab={activeTab}
        handleLeftArrowClick={handleLeftArrowClick}
        handleRightArrowClick={handleRightArrowClick}
        selectedTab={selectedTab}
        handleSelectedTabClick={handleSelectedTabClick}
        labelName={labelName}
      />
      <main>
        {selectedTab ? (
          <div>{codeItems.find(({ id }) => id === selectedTab)?.component}</div>
        ) : (
          <div>
            {codeItems.find(({ label }) => label === "Nextjs")?.component}
          </div>
        )}
      </main>
    </div>
  );
}
