import React from "react";

export default function HomeWrapper() {
  return (
    <div className="flex h-lvh justify-center p-24">
      <div className="flex h-[33%] w-[45%]">
        <div className="flex w-[55%] flex-col gap-[1.2rem]">
          <div className="flex flex-1 items-center rounded-bl-lg rounded-tl-lg border-l-[1px] border-t-[1px] border-slate-50/10 bg-gradient-to-r from-slate-900/90 to-transparent pl-10">
            <h1 className="">DESIGN</h1>
          </div>
          <div className="flex flex-1 items-center rounded-bl-lg rounded-tl-lg border-l-[1px] border-t-[1px] border-slate-50/10 bg-gradient-to-r from-slate-900/90 to-transparent pl-10">
            <h1>CODE</h1>
          </div>
          <div className="flex flex-1 items-center rounded-bl-lg rounded-tl-lg border-l-[1px] border-t-[1px] border-slate-50/10 bg-gradient-to-r from-slate-900/90 to-transparent pl-10">
            <h1>BUILD</h1>
          </div>
        </div>
        <div className="flex w-[45%] flex-1 items-start justify-center rounded-lg border-r-[1px] border-t-[1px] border-slate-50/10 bg-transparent pl-10 pt-4">
          <h1 className="text-6xl">HELLO.</h1>
        </div>
      </div>
    </div>
  );
}
