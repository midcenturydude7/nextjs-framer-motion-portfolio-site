import React from "react";

export default function DesignContent() {
  return (
    <nav className="pl-[0.5rem] pt-[6.2rem]">
      <ul className="flex items-center justify-between border-b border-slate-200/20 text-[1.175rem]">
        <li>
          <button className="rounded-tr-lg border-l-[1px] border-r-[1px] border-t-[1px] border-slate-200/20 px-4 py-[0.5rem] bg-indigo-950/15">
            Tailwindcss
          </button>
        </li>
        <li>
          <button>Animations</button>
        </li>
        <li>
          <button>Toolset</button>
        </li>
      </ul>
    </nav>
  );
}
