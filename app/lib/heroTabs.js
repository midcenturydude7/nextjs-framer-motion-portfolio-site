import DesignSVG from "../components/DesignSVG";
import CodeSVG from "../components/CodeSVG";
import BuildSVG from "../components/BuildSVG";
import ArrowSVG from "../components/ArrowSVG";

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
