import HomeContent from "../components/HomeContent";
import DesignContent from "../components/DesignContent";
import CodeContent from "../components/CodeContent";
import BuildContent from "../components/BuildContent";

export function heroContents({
  clicked,
  setClicked,
  leftClick,
  setLeftClick,
  rightClick,
  setRightClick,
  handleTabClick,
  handleLeftArrowClick,
  handleRightArrowClick,
  activeTab,
  setActiveTab,
  labelName,
  setLabelName,
  selectedTab,
  setSelectedTab,
  handleSelectedTabClick,
  activeNav,
  setActiveNav,
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
          rightClick={rightClick}
          setRightClick={setRightClick}
          handleTabClick={handleTabClick}
          handleLeftArrowClick={() => handleLeftArrowClick("HomeContent")}
          handleRightArrowClick={() => handleRightArrowClick("CodeContent")}
          activeTab={activeTab}
          labelName={labelName}
          setLabelName={setLabelName}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          handleSelectedTabClick={handleSelectedTabClick}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
        />
      ),
    },
    {
      label: "CodeContent",
      component: (
        <CodeContent
          clicked={clicked}
          setClicked={setClicked}
          leftClick={leftClick}
          setLeftClick={setLeftClick}
          rightClick={rightClick}
          setRightClick={setRightClick}
          handleTabClick={handleTabClick}
          handleLeftArrowClick={() => handleLeftArrowClick("DesignContent")}
          handleRightArrowClick={() => handleRightArrowClick("BuildContent")}
          activeTab={activeTab}
          labelName={labelName}
          setLabelName={setLabelName}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          handleSelectedTabClick={handleSelectedTabClick}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
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
