export const navItems = [
  {
    path: "/",
    label: "home",
  },
  {
    path: "/about",
    label: "about",
  },
  {
    path: "/work",
    label: "work",
  },

  {
    path: "/contact",
    label: "contact",
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
