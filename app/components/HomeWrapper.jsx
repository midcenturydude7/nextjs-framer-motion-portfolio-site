import React from "react";

export default function HomeWrapper() {
  return (
    <div className="relative flex h-lvh flex-col items-center justify-start p-24">
      {/* ANIMATED SHAPES | TODO: CREATE COMPONENT FOR SCREEN READERS TO IGNORE */}
      <div className="absolute left-[63%] top-28 z-[-2] h-60 w-36 -rotate-45 rounded-xl bg-gradient-to-r from-slate-200/80 from-10% via-purple-900/90 via-50% to-fuchsia-700/70 to-90% opacity-30 blur-3xl" />
      <div className="absolute left-[35%] top-20 z-[-1] h-36 w-72 rounded-full bg-sky-200/80 opacity-30 blur-3xl" />
      <div className="absolute left-[28%] top-20 h-72 w-72 animate-blob rounded-full bg-indigo-500 mix-blend-multiply blur-2xl filter" />
      <div className="animation-delay-2000 absolute left-[38%] top-20 h-72 w-72 animate-blob rounded-full bg-fuchsia-500 mix-blend-multiply blur-2xl filter" />
      <div className="animation-delay-4000 absolute left-[33%] top-48 h-72 w-72 animate-blob rounded-full bg-pink-700 mix-blend-multiply blur-2xl filter" />
      {/* MAIN CONTENT: HERO SECTION */}
      <div className="flex h-[33%] w-[45%] text-slate-100/50">
        <div className="flex w-[55%] flex-col gap-[1.2rem] text-[1.2rem]">
          <div className="relative flex flex-1 items-center rounded-bl-lg rounded-tl-lg border-l-[1px] border-t-[1px] border-slate-50/10 bg-gradient-to-r from-slate-900/90 to-transparent pl-16">
            <div className="absolute left-[30px] top-[43px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
                />
              </svg>
            </div>
            <h1 className="">DESIGN</h1>
          </div>
          <div className="relative flex flex-1 items-center rounded-bl-lg rounded-tl-lg border-l-[1px] border-t-[1px] border-slate-50/10 bg-gradient-to-r from-slate-900/90 to-transparent pl-16">
            <div className="absolute left-[30px] top-[43px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                />
              </svg>
            </div>
            <h1>CODE</h1>
          </div>
          <div className="relative flex flex-1 items-center rounded-bl-lg rounded-tl-lg border-l-[1px] border-t-[1px] border-slate-50/10 bg-gradient-to-r from-slate-900/90 to-transparent pl-16">
            <div className="absolute left-[30px] top-[43px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
                />
              </svg>
            </div>
            <h1>BUILD</h1>
          </div>
        </div>
        <div className="mt-[-4rem] flex w-[45%] flex-1 flex-col items-start justify-start rounded-lg border-r-[1px] border-t-[1px] border-transparent bg-transparent pl-[4rem]">
          <h1 className="inline-block bg-gradient-to-r from-sky-300/90 to-fuchsia-700/30 bg-clip-text font-[dolce,_sans-serif] text-[6.5rem] font-[800] not-italic text-transparent antialiased">
            Hello.
          </h1>
          <p className="mt-[-1.75rem] text-justify text-[1.1rem] font-light leading-[2.2rem]">
            Thanks for stopping by. I am a self-taught frontend engineer with a
            background in communications. I have a passion for building web
            solutions that are engaginging and useful. Take a moment to click
            around and let me know what you think.
          </p>
        </div>
      </div>
      {/* MAIN CONTENT: PROJECTS SECTION */}
      <div className="mt-20 w-[45%]">
        <div className="flex justify-between gap-10 text-[1.2rem] text-slate-100/50">
          <div className="flex h-[300px] w-[30%] flex-1 items-start justify-start rounded-lg border-t-[1px] border-slate-50/15 bg-gradient-to-b from-slate-900/90 to-transparent pl-6 pt-6">
            <h1>Project 1</h1>
          </div>
          <div className="flex h-[300px] w-[30%] flex-1 items-start justify-start rounded-lg border-t-[1px] border-slate-50/15 bg-gradient-to-b from-slate-900/90 to-transparent pl-6 pt-6">
            <h1>Project 2</h1>
          </div>
          <div className="flex h-[300px] w-[30%] flex-1 items-start justify-start rounded-lg border-t-[1px] border-slate-50/15 bg-gradient-to-b from-slate-900/90 to-transparent pl-6 pt-6">
            <h1>Project 3</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
