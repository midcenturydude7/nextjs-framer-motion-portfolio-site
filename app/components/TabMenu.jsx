import DesignTabs from "./DesignTabs";
import CodeTabs from "./CodeTabs";

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
        <CodeTabs
          handleSelectedTabClick={handleSelectedTabClick}
          selectedTab={selectedTab}
        />
      ) : null}
    </ul>
  );
}