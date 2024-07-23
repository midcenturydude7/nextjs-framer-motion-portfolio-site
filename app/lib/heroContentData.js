import HomeContent from "../components/HomeContent";
import DesignContent from "../components/DesignContent";
import CodeContent from "../components/CodeContent";
import BuildContent from "../components/BuildContent";

export function heroContents({
  clicked,
  leftClick,
  setLeftClick,
  handleLeftArrowClick,
  rightClick,
  setRightClick,
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
          setClicked={setClicked}
          leftClick={leftClick}
          setLeftClick={setLeftClick}
          handleLeftArrowClick={() => handleLeftArrowClick("HomeContent")}
          rightClick={rightClick}
          setRightClick={setRightClick}
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
          setClicked={setClicked}
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
          setClicked={setClicked}
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
          setClicked={setClicked}
        />
      ),
    },
  ].map((n, idx) => ({ ...n, id: idx + 1 }));
}
