import DesignTabs from "./Design/DesignTabs";
import CodeTabs from "./Code/CodeTabs";
import BuildTabs from "./Build/BuildTabs";

export default function TabMenu({
  handleSelectedTabClick,
  selectedTab,
  clicked,
  labelName,
  handleTabClick,
}) {
  return (
    <ul className="flex items-center justify-between space-x-6 3xl:space-x-20 text-nowrap border-b border-slate-200/10 text-[1.175rem]">
      {selectedTab && clicked && labelName === "Design" ? (
        <DesignTabs
          handleTabClick={handleTabClick}
          handleSelectedTabClick={handleSelectedTabClick}
          selectedTab={selectedTab}
        />
      ) : null}
      {selectedTab && clicked && labelName === "Code" ? (
        <CodeTabs
          handleTabClick={handleTabClick}
          handleSelectedTabClick={handleSelectedTabClick}
          selectedTab={selectedTab}
        />
      ) : null}
      {selectedTab && clicked && labelName === "Build" ? (
        <BuildTabs
          handleTabClick={handleTabClick}
          handleSelectedTabClick={handleSelectedTabClick}
          selectedTab={selectedTab}
        />
      ) : null}
    </ul>
  );
}
