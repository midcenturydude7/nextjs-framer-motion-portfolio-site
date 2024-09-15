import TabMenu from "./TabMenu";
import ButtonLeftArrow from "./ButtonLeftArrow";
import ButtonRightArrow from "./ButtonRightArrow";

export default function TabNav({
  handleLeftArrowClick,
  handleRightArrowClick,
  selectedTab,
  handleSelectedTabClick,
  activeTab,
  handleTabClick,
  clicked,
  labelName,
}) {
  return (
    <nav className="flex items-center justify-between space-x-4 pt-[6.075rem]">
      <ButtonLeftArrow handleLeftArrowClick={handleLeftArrowClick} />
      <TabMenu
        handleSelectedTabClick={handleSelectedTabClick}
        selectedTab={selectedTab}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        clicked={clicked}
        labelName={labelName}
      />
      <ButtonRightArrow handleRightArrowClick={handleRightArrowClick} />
    </nav>
  );
}
