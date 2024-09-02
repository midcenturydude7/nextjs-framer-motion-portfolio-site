import DesignTailwindcss from "../components/Home/Main/Hero/Design/DesignTailwindcss";
import DesignAnimations from "../components/Home/Main/Hero/Design/DesignAnimations";
import DesignTools from "../components/Home/Main/Hero/Design/DesignTools";
import CodeFrameworks from "../components/Home/Main/Hero/Code/CodeFrameworks";
import CodeJavascript from "../components/Home/Main/Hero/Code/CodeJavascript";
import CodeDataStructures from "../components/Home/Main/Hero/Code/CodeDataStructures";
import BuildFullStack from "../components/Home/Main/Hero/Build/BuildFullStack";
import BuildAiMl from "../components/Home/Main/Hero/Build/BuildAiMl";
import BuildDataViz from "../components/Home/Main/Hero/Build/BuildDataViz";

export const designTabs = [
  {
    label: "Tailwindcss",
    component: <DesignTailwindcss />,
  },
  {
    label: "Animations",
    component: <DesignAnimations />,
  },
  {
    label: "Tools",
    component: <DesignTools />,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));

export const codeTabs = [
  {
    label: "Nextjs",
    component: <CodeFrameworks />,
  },
  {
    label: "React",
    component: <CodeJavascript />,
  },
  {
    label: "Javascript",
    component: <CodeDataStructures />,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));

export const buildTabs = [
  {
    label: "Full Stack",
    component: <BuildFullStack />,
  },
  {
    label: "AI & ML",
    component: <BuildAiMl />,
  },
  {
    label: "Data Viz",
    component: <BuildDataViz />,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
