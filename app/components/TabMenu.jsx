import DesignTabs from "./DesignTabs";
import CodeDisciplines from "./CodeDisciplines";
import BuildTabs from "./BuildTabs";

export default function TabMenu({
  handleSelectedTabClick,
  selectedTab,
  clicked,
  labelName,
  handleTabClick,
}) {
  return (
    <ul className="flex items-center justify-between gap-[3.75rem] border-b border-slate-200/10 text-[1.175rem]">
      {selectedTab && clicked && labelName === "Design" ? (
        <DesignTabs
          handleTabClick={handleTabClick}
          handleSelectedTabClick={handleSelectedTabClick}
          selectedTab={selectedTab}
        />
      ) : null}
      {selectedTab && clicked && labelName === "Code" ? (
        <CodeDisciplines
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
