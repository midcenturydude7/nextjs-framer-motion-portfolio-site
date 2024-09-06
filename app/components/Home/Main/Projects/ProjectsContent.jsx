import Projects from "./Projects";

export default function ProjectsContent() {
  return (
    <div className="mt-16 w-[45%]">
      <div className="flex flex-wrap justify-between gap-8 text-[1.2rem] text-sky-100/50">
        <Projects />
        <Projects />
        <Projects />
      </div>
    </div>
  );
}
