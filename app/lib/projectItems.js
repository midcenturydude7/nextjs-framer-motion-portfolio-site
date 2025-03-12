export const projectItems = [
  {
    label: "Login Page",
    description:
      "This is going to be a basic log-in page built in NextJs with a React frontend and a Supabase backend.",
  },
  {
    label: "AI Application",
  },
  {
    label: "Data Visualization",
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
