import DesignSVG from "../components/Home/Main/Hero/Design/DesignSVG";
import CodeSVG from "../components/Home/Main/Hero/Code/CodeSVG";
import BuildSVG from "../components/Home/Main/Hero/Build/BuildSVG";
import ArrowSVG from "../components/Home/Main/Hero/ArrowSVG";

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
