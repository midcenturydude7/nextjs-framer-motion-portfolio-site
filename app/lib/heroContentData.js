import HomeContent from "../components/HomeContent";
import DesignContent from "../components/DesignContent";
import CodeContent from "../components/CodeContent";
import BuildContent from "../components/BuildContent";

export function heroContents({
  clicked,
  leftClick,
  handleLeftArrowClick,
  handleRightArrowClick,
  activeTab,
  setActiveTab,
  setClicked,
}) {
  return [
    {
      label: "DesignContent",
      component: (
        <DesignContent
          clicked={clicked}
          leftClick={leftClick}
          handleLeftArrowClick={() => handleLeftArrowClick("HomeContent")}
          handleRightArrowClick={() => handleRightArrowClick("CodeContent")}
          activeTab={activeTab}
        />
      ),
    },
    {
      label: "CodeContent",
      component: (
        <CodeContent
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          clicked={clicked}
        />
      ),
    },
    {
      label: "BuildContent",
      component: (
        <BuildContent
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          clicked={clicked}
        />
      ),
    },
    {
      label: "HomeContent",
      component: (
        <HomeContent
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          clicked={clicked}
        />
      ),
    },
  ].map((n, idx) => ({ ...n, id: idx + 1 }));
}
