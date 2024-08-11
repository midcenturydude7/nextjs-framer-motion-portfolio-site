import HomeSVG from "../components/Home/Header/Navbar/HomeSVG";
import AboutSVG from "../components/Home/Header/Navbar/AboutSVG";
import ContactSVG from "../components/Home/Header/Navbar/ContactSVG";
import WorkSVG from "../components/Home/Header/Navbar/WorkSVG";
import CloudSVG from "../components/Home/Header/Navbar/CloudSVG";

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
