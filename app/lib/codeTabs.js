import DesignTailwindcss from "../components/DesignTailwindcss";
import DesignAnimations from "../components/DesignAnimations";
import DesignTools from "../components/DesignTools";
import CodeFrameworks from "../components/CodeFrameworks";
import CodeJavascript from "../components/CodeJavascript";
import CodeDataStructures from "../components/CodeDataStructures";
import BuildFullStack from "../components/BuildFullStack";
import BuildAiMl from "../components/BuildAiMl";
import BuildDataViz from "../components/BuildDataViz";

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
].map((n, idx) => ({ ...n, id: idx + 1 }));;

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
