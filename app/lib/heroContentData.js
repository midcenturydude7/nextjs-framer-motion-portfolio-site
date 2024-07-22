import HomeContent from "../components/HomeContent";
import DesignContent from "../components/DesignContent";
import CodeContent from "../components/CodeContent";
import BuildContent from "../components/BuildContent";

export function heroContents({
  clicked,
  leftClick,
  handleArrowLeftClick,
  rightClick,
  handleRightArrowClick,
  activeTab,
  setActiveTab,
  setClicked,
}) {
  [
    {
      label: "DesignContent",
      component: (
        <DesignContent
          clicked={clicked}
          leftClick={leftClick}
          handleArrowLeftClick={handleArrowLeftClick}
          rightClick={rightClick}
          handleRightArrowClick={handleRightArrowClick}
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
