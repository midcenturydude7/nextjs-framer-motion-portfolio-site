import React from "react";

export default function HomeWrapper() {
  return (
    <div className="flex h-lvh justify-center p-24">
      <div className="flex h-[33%] w-[45%]">
        <div className="flex w-[55%] flex-col gap-[1.2rem]">
          <div className="flex-1 rounded-bl-lg rounded-tl-lg border-t-[1px] border-l-[1px] border-slate-50/10 bg-gradient-to-r from-slate-900/90 to-transparent pl-10 pt-4">
            <h1 className="">DESIGN</h1>
          </div>
          <div className="flex-1 rounded-bl-lg rounded-tl-lg bg-gradient-to-r from-slate-900/90 to-transparent pl-10 pt-4">
            <h1>ANIMATION</h1>
          </div>
          <div className="flex-1 rounded-bl-lg rounded-tl-lg bg-gradient-to-r from-slate-900/90 to-transparent pl-10 pt-4">
            <h1>DATA VISUALIZATION</h1>
          </div>
        </div>
        <div className="w-[45%] bg-transparent pl-10 pt-4">
          Right side content
        </div>
      </div>
    </div>
  );
}
