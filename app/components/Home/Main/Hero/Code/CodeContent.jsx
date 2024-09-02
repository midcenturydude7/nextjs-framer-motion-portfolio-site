import TabNav from "../TabNav";
import { codeTabs } from "../../../../../lib/codeTabs";

export default function CodeContent({
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
          <div>{codeTabs.find(({ id }) => id === selectedTab)?.component}</div>
        )}
      </main>
    </div>
  );
}
