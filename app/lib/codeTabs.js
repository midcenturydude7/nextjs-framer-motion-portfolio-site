import CodeTailwindcss from "../components/CodeTailwindcss";
import CodeAnimations from "../components/CodeAnimations";
import CodeTools from "../components/CodeTools";

export const codeTabs = [
  {
    label: "Tailwindcss",
    component: <CodeTailwindcss />,
  },
  {
    label: "Animations",
    component: <CodeAnimations />,
  },
  {
    label: "Tools",
    component: <CodeTools />,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
