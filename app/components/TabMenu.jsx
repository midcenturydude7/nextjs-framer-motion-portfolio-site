import DesignTabs from "./DesignTabs";
import CodeDisciplines from "./CodeDisciplines";

export default function TabMenu({
  handleSelectedTabClick,
  selectedTab,
  activeTab,
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
    </ul>
  );
}
