import { projectItems } from "../../../../lib/projectItems";

export default function ProjectsContent() {
  return (
    <div className="mt-16 w-[45%]">
      <div className="flex flex-wrap justify-between gap-8 text-[1.2rem] text-sky-100/50">
        {projectItems.map(({ label }) => (
          <div className="flex h-[300px] w-[30%] min-w-72 flex-1 items-start justify-start rounded-lg border-t-[1px] border-slate-50/15 bg-gradient-to-b from-slate-900/90 to-transparent pl-6 pt-6">
            <h1>{label}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
