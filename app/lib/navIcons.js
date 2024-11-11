import {
  FaGithubAlt,
  FaCodepen,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
// import { FiCodesandbox } from "react-icons/fi";

export const navIcons = [
  {
    label: "github",
    icon: FaGithubAlt,
    url: "https://github.com/midcenturydude7",
  },
  // {
  //   label: "codepen",
  //   icon: FaCodepen,
  //   url: "https://github.com/midcenturydude7",
  // },
  // {
  //   label: "codesandbox",
  //   icon: FiCodesandbox,
  //   url: "https://github.com/midcenturydude7",
  // },
  {
    label: "twitterX",
    icon: FaXTwitter,
    url: "https://github.com/midcenturydude7",
  },
  {
    label: "linkedin",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/matthewgriffes/",
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
