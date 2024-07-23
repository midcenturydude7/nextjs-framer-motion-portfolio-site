import HomeContent from "../components/HomeContent";
import DesignContent from "../components/DesignContent";
import CodeContent from "../components/CodeContent";
import BuildContent from "../components/BuildContent";

export function heroContents({
  clicked,
  leftClick,
  handleLeftArrowClick,
  rightClick,
  handleRightArrowClick,
  activeTab,
  setActiveTab,
  setClicked,
}) {
  return [
    {
      id: 1,
      label: "DesignContent",
      component: (
        <DesignContent
          clicked={clicked}
          leftClick={leftClick}
          handleLeftArrowClick={() => handleLeftArrowClick("HomeContent")}
          rightClick={rightClick}
          handleRightArrowClick={() => handleRightArrowClick(1)}
          activeTab={activeTab}
        />
      ),
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
  ];
}
