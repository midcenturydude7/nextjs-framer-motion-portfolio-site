import DesignTailwindcss from "../components/DesignTailwindcss";
import DesignAnimations from "../components/DesignAnimations";
import DesignTools from "../components/DesignTools";
import CodeFrameworks from "../components/CodeFrameworks";
import CodeJavascript from "../components/CodeJavascript";
import CodeDataStructures from "../components/CodeDataStructures";

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

export const codeItems = [
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
