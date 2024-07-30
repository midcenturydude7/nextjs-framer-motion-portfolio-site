import DesignTabs from "./DesignTabs";
import CodeDisciplines from "./CodeDisciplines";
import { heroTabs } from "../lib/heroTabs";

export default function TabMenu({
  handleSelectedTabClick,
  selectedTab,
  activeTab,
  clicked,
  labelName,
}) {
  return (
    <ul className="flex items-center justify-between gap-[3.75rem] border-b border-slate-200/10 text-[1.175rem]">
      {activeTab && clicked && labelName === "Design" ? (
        <DesignTabs
          handleSelectedTabClick={handleSelectedTabClick}
          selectedTab={selectedTab}
        />
      ) : null}
      {activeTab && clicked && labelName === "Code" ? (
        <CodeDisciplines
          handleSelectedTabClick={handleSelectedTabClick}
          selectedTab={selectedTab}
        />
      ) : null}
    </ul>
  );
}
