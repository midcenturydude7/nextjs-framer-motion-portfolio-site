"use client";
import React from "react";
import { navItems } from "../lib/navItems";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuButton({
  selected,
  setSelected,
  focused,
  setFocused,
}) {
  const pathname = usePathname();
  const [background, setBackground] = React.useState(null);

  return (
    <div className="group relative flex gap-4 rounded-lg border border-transparent bg-zinc-900/90 pb-[0.65rem] pl-[.55rem] pr-[.55rem] pt-[0.75rem] leading-none transition-colors duration-1000 hover:border hover:border-zinc-100/30 hover:bg-black/80">
      {navItems.map(({ svg, path, id, label }) => {
        const isActive = path === pathname;
        return (
          <Link key={id} href={path}>
            <button
              data-active={isActive}
              onClick={() => setSelected(path)}
              onKeyDown={(e) => (e.key === "Enter" ? setSelected(path) : null)}
              onFocus={() => setFocused(path)}
              onMouseEnter={() => setFocused(path)}
              onMouseUp={() => setBackground(path)}
              tabIndex={0}
              className={`relative flex h-[2.313rem] w-[7rem] items-center justify-center rounded-lg bg-slate-900/80 text-[#E8E8FD]/50 outline-[none] transition-colors focus:rounded-lg group-hover:bg-slate-900/50 ${selected === path ? "cursor-default text-[#fad4fe]/70 transition-colors duration-1000 hover:text-[#fad4fe]/70" : "cursor-pointer hover:text-purple-200/90"} ${background === path ? "bg-slate-700/50 group-hover:bg-slate-700/50" : ""}`}
            >
              <span className="absolute left-[1.25rem] top-1 stroke-1 transition-colors group-hover:stroke-2">
                {svg}
              </span>
              <span
                className={`z-10 select-none pl-[1rem] text-[1rem] transition-colors hover:duration-200`}
              >
                {label}
              </span>
              <AnimatePresence>
                {focused === path ? (
                  <motion.div
                    className="absolute inset-0 z-0 h-[100%] w-[100%] rounded-[8px] bg-slate-700/50 transition-colors"
                    transition={{
                      layout: {
                        duration: 0.4,
                        ease: "easeOut",
                      },
                    }}
                    exit={{
                      opacity: 0,
                      transition: {
                        duration: 0.75,
                        ease: "easeOut",
                      },
                    }}
                    layoutId="highlight"
                  />
                ) : null}
              </AnimatePresence>
              <AnimatePresence>
                {selected === path ? (
                  <>
                    <motion.div
                      className="absolute bottom-[-10px] left-0 z-0 h-[4px] w-[100%] rounded-[8px] bg-slate-700/50 transition-colors duration-1000 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600"
                      layoutId="underline"
                    />
                    <motion.div
                      className="absolute inset-0 z-0 rounded-[8px] bg-slate-700/40 transition-colors group-hover:bg-slate-700/50"
                      layoutId="highlight"
                    />
                  </>
                ) : null}
              </AnimatePresence>
            </button>
          </Link>
        );
      })}
    </div>
  );
}
