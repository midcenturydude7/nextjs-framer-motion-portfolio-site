import DesignSVG from "../components/DesignSVG";
import CodeSVG from "../components/CodeSVG";
import BuildSVG from "../components/BuildSVG";
import ArrowSVG from "../components/ArrowSVG";
import HomeContent from "../components/HomeContent";
import DesignContent from "../components/DesignContent";
import CodeContent from "../components/CodeContent";
import BuildContent from "../components/BuildContent";

export const heroTabs = [
  {
    svgIcon: <DesignSVG />,
    svgArrow: <ArrowSVG />,
    label: "Design",
    tag: "UI/UX",
  },
  {
    svgIcon: <CodeSVG />,
    svgArrow: <ArrowSVG />,
    label: "Code",
    tag: "Nextjs/React",
  },
  {
    svgIcon: <BuildSVG />,
    svgArrow: <ArrowSVG />,
    label: "Build",
    tag: "Frontend Engineer",
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));

export const heroContent = [
  {
    label: "DesignContent",
    component: <DesignContent />,
  },
  {
    label: "CodeContent",
    component: <CodeContent />,
  },
  {
    label: "BuildContent",
    component: <BuildContent />,
  },
  {
    label: "HomeContent",
    component: <HomeContent />,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
