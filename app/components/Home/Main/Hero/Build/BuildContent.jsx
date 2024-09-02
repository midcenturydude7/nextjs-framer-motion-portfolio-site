import React from "react";
import TabNav from "../TabNav";
import { buildTabs } from "../../../../../lib/codeTabs";

export default function BuildContent({
  activeTab,
  setActiveTab,
  handleLeftArrowClick,
  handleRightArrowClick,
  clicked,
  labelName,
  selectedTab,
  handleSelectedTabClick,
}) {
  return (
    <div className="h-full w-full">
      <TabNav
        clicked={clicked}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleLeftArrowClick={handleLeftArrowClick}
        handleRightArrowClick={handleRightArrowClick}
        selectedTab={selectedTab}
        handleSelectedTabClick={handleSelectedTabClick}
        labelName={labelName}
      />
      <main>
        {selectedTab && (
          <div>{buildTabs.find(({ id }) => id === selectedTab)?.component}</div>
        )}
      </main>
    </div>
  );
}
