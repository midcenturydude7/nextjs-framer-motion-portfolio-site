import DesignTailwindcss from "../components/DesignTailwindcss";
import DesignAnimations from "../components/DesignAnimations";
import DesignTools from "../components/DesignTools";

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
