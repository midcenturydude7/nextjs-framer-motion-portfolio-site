export default function ButtonRightArrow({ handleRightArrowClick }) {
  return (
    <div className="flex items-center">
      <button
        onClick={handleRightArrowClick}
        className="rounded-full border border-slate-200/20 p-2 opacity-70 transition duration-1000 hover:border-sky-300/50 hover:bg-indigo-200/20 hover:text-sky-300/50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
