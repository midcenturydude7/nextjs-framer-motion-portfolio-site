import { FaGithubAlt, FaCodePen } from "react-icons/fa6";
import { FiCodesandbox } from "react-icons/fi";

export const navIcons = [
  {
    label: "github",
    icon: <FaGithubAlt />,
    url: "https://github.com/midcenturydude7",
  },
  {
    label: "codepen",
    icon: <FaCodePen />,
    url: "https://github.com/midcenturydude7",
  },
  {
    label: "codesandbox",
    icon: <FiCodesandbox />,
    url: "https://github.com/midcenturydude7",
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
