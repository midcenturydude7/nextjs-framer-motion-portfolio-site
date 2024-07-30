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
  labelName,
}) {
  return [
    {
      label: "DesignContent",
      component: (
        <DesignContent
          clicked={clicked}
          handleLeftArrowClick={() => handleLeftArrowClick("HomeContent")}
          handleRightArrowClick={() => handleRightArrowClick("CodeContent")}
          activeTab={activeTab}
          labelName={labelName}
        />
      ),
    },
    {
      label: "CodeContent",
      component: (
        <CodeContent
          clicked={clicked}
          leftClick={leftClick}
          handleLeftArrowClick={() => handleLeftArrowClick("DesignContent")}
          handleRightArrowClick={() => handleRightArrowClick("BuildContent")}
          activeTab={activeTab}
          labelName={labelName}
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
