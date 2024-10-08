export default function HomeContent() {
  return (
    <div className="ml-4 mt-20 h-full w-full">
      <div className="flex items-center">
        <h1 className="inline-block bg-gradient-to-r from-sky-300/90 to-indigo-900/70 bg-clip-text font-[dolce,_sans-serif] text-[6.5rem] font-[800] not-italic text-transparent antialiased">
          Hello.
        </h1>
        <div className="group relative mt-[-2.75rem] pr-12">
          <div className="ml-4 flex h-[7.75rem] w-[7.75rem] items-center justify-center rounded-full border border-slate-200/10">
            <p>I am Matt</p>
          </div>
        </div>
      </div>
      <div>
        <p className="mt-[-1.75rem] pr-10 text-justify text-[1.1rem] font-light leading-[2.2rem]">
          Thanks for stopping by. I am a self-taught frontend engineer with a
          background in communications. I have a passion for building web
          solutions that are engaginging and useful. Take a moment to click
          around and let me know what you think.
        </p>
      </div>
    </div>
  );
}
