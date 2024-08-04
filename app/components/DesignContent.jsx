import TabNav from "./TabNav";
import { designTabs } from "../lib/codeTabs";

export default function DesignContent({
  activeTab,
  setActiveTab,
  handleTabClick,
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
        handleTabClick={handleTabClick}
        handleLeftArrowClick={handleLeftArrowClick}
        handleRightArrowClick={handleRightArrowClick}
        selectedTab={selectedTab}
        handleSelectedTabClick={handleSelectedTabClick}
        labelName={labelName}
      />
      <main>
        {selectedTab && (
          <div>
            {designTabs.find(({ id }) => id === selectedTab)?.component}
          </div>
        )}
      </main>
    </div>
  );
}
