import { projectItems } from "../../../../lib/projectItems";

export default function ProjectsContent() {
  return (
    <div className="mt-16 w-[45%]">
      <div className="flex flex-wrap items-center justify-between gap-8 text-[1.2rem] text-sky-100/50">
        {projectItems.map(({ label, id, description }) => (
          <div
            key={id}
            className="flex h-[300px] w-[30%] min-w-72 flex-1 flex-col items-start justify-start rounded-lg border-t-[1px] border-slate-50/15 bg-gradient-to-b from-slate-900/90 to-transparent pl-6 pt-6"
          >
            <h1 className="text-indigo-700 mb-3">{label}</h1>
            <p className="pr-3">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
