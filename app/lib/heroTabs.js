import DesignSVG from "../components/DesignSVG";
import CodeSVG from "../components/CodeSVG";
import BuildSVG from "../components/BuildSVG";

export const heroTabs = [
  {
    svgIcon: <DesignSVG />,
    label: "Design",
  },
  {
    svgIcon: <CodeSVG />,
    label: "Code",
  },
  {
    svgIcon: <BuildSVG />,
    label: "Build",
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
