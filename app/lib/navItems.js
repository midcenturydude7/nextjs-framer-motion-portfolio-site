import HomeSVG from "../components/HomeSVG";
import AboutSVG from "../components/AboutSVG";
import ContactSVG from "../components/ContactSVG";
import WorkSVG from "../components/WorkSVG";
import CloudSVG from "../components/CloudSVG";

export const navItems = [
  {
    svg: <HomeSVG />,
    path: "/",
    label: "home",
  },
  {
    svg: <AboutSVG />,
    path: "/about",
    label: "about",
  },
  {
    svg: <WorkSVG />,
    path: "/work",
    label: "work",
  },
  {
    svg: <CloudSVG />,
    path: "/resources",
    label: "resources",
  },

  {
    svg: <ContactSVG />,
    path: "/contact",
    label: "contact",
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
