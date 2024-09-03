import HomeContent from "../components/Home/Main/Hero/HomeContent";
import DesignContent from "../components/Home/Main/Hero/Design/DesignContent";
import CodeContent from "../components/Home/Main/Hero/Code/CodeContent";
import BuildContent from "../components/Home/Main/Hero/Build/BuildContent";

export function heroContents({
  clicked,
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
}) {
  return [
    {
      label: "DesignContent",
      component: (
        <DesignContent
          clicked={clicked}
          leftClick={leftClick}
          setLeftClick={setLeftClick}
          rightClick={rightClick}
          setRightClick={setRightClick}
          handleTabClick={handleTabClick}
          handleLeftArrowClick={() => handleLeftArrowClick("HomeContent")}
          handleRightArrowClick={() => handleRightArrowClick("CodeContent")}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          labelName={labelName}
          setLabelName={setLabelName}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          handleSelectedTabClick={handleSelectedTabClick}
        />
      ),
    },
    {
      label: "CodeContent",
      component: (
        <CodeContent
          clicked={clicked}
          leftClick={leftClick}
          setLeftClick={setLeftClick}
          rightClick={rightClick}
          setRightClick={setRightClick}
          handleTabClick={handleTabClick}
          handleLeftArrowClick={() => handleLeftArrowClick("DesignContent")}
          handleRightArrowClick={() => handleRightArrowClick("BuildContent")}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          labelName={labelName}
          setLabelName={setLabelName}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          handleSelectedTabClick={handleSelectedTabClick}
        />
      ),
    },
    {
      label: "BuildContent",
      component: (
        <BuildContent
          clicked={clicked}
          leftClick={leftClick}
          setLeftClick={setLeftClick}
          rightClick={rightClick}
          setRightClick={setRightClick}
          handleTabClick={handleTabClick}
          handleLeftArrowClick={() => handleLeftArrowClick("CodeContent")}
          handleRightArrowClick={() => handleRightArrowClick("HomeContent")}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          labelName={labelName}
          setLabelName={setLabelName}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          handleSelectedTabClick={handleSelectedTabClick}
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
