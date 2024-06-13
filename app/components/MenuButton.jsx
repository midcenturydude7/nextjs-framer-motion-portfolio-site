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
  background,
  setBackground,
}) {
  const pathname = usePathname();

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
              onPointerEnter={() => setFocused(path)}
              onPointerUp={() => setBackground(path)}
              tabIndex={0}
              className={`relative flex h-[2.313rem] w-[7rem] items-center justify-center rounded-lg bg-slate-900/80 text-[#E8E8FD]/50 outline-[none] transition-colors focus:rounded-[8px] group-hover:bg-slate-900/50 ${!focused && selected === path ? "cursor-default bg-slate-700/50 text-[#fad4fe]/70 transition-colors duration-1000 hover:text-[#fad4fe]/70" : "cursor-pointer duration-500 hover:text-purple-200/90"}`}
            >
              <span className="absolute left-[1.25rem] top-1 stroke-1 transition-colors hover:duration-500 group-hover:stroke-2">
                {svg}
              </span>
              <span
                className={`z-10 h-[2.313rem] w-[7rem] select-none rounded-[8px] pl-[1.25rem] pt-[0.575rem] text-[1rem] hover:duration-500`}
              >
                {label}
              </span>
              <AnimatePresence>
                {focused === path ? (
                  <motion.div
                    className={`absolute inset-0 z-0 h-[100%] w-[100%] rounded-[8px] bg-slate-700/50 ${background === path ? "bg-slate-700/50 transition-colors duration-1000" : ""}`}
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

              {selected === path ? (
                <motion.div
                  className="absolute bottom-[-10px] left-0 z-0 h-[4px] w-[100%] rounded-[8px] bg-slate-700/50 transition-colors duration-1000 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600"
                  layoutId="underline"
                />
              ) : null}
              <AnimatePresence>
                {!focused && selected === path ? (
                  <motion.div
                    className={`absolute inset-0 z-0 rounded-[8px] bg-slate-700/50 transition-colors duration-500`}
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
            </button>
          </Link>
        );
      })}
    </div>
  );
}
