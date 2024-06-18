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

  return (
    <div className="group relative flex gap-4 rounded-lg border border-transparent bg-zinc-900/90 pb-[0.65rem] pl-[.55rem] pr-[.55rem] pt-[0.75rem] leading-none transition-colors duration-1000 hover:border hover:border-zinc-100/30 hover:bg-black/80">
      {navItems.map(({ svg, path, id, label }) => {
        const isActive = path === pathname;
        return (
          <Link key={id} href={path}>
            <motion.button
              layout // Links the button to the layout animation
              data-active={isActive}
              onClick={() => setSelected(path)}
              onKeyDown={(e) => (e.key === "Enter" ? setSelected(path) : null)}
              onLoad={() => setFocused(null)} // Resets the focus state on load
              onFocus={() => setFocused(path)}
              onPointerEnter={() => setFocused(path)}
              tabIndex={0} // Makes the button focusable
              className={`relative flex h-[2.313rem] w-[7rem] items-center justify-center rounded-lg bg-slate-900/80 text-[#E8E8FD]/50 outline-[none] transition-colors focus:rounded-[8px] group-hover:bg-slate-900/50 ${selected === path ? "cursor-default text-[#fad4fe]/70 transition-colors hover:text-[#fad4fe]/70" : "cursor-pointer duration-500 hover:text-purple-200/90"}`}
            >
              <span className="absolute left-[1.25rem] top-1 stroke-1 transition-colors hover:duration-500 group-hover:stroke-2">
                {svg}
              </span>
              <motion.span
                layout // Links the label and its container to the layout animation
                className={`z-10 h-[2.313rem] w-[7rem] select-none rounded-[8px] pl-[1.25rem] pt-[0.575rem] text-[1rem] hover:duration-1000`}
              >
                {label}
              </motion.span>
              {/* 'FOLLOW' HIGHLIGHT: Animates when the button is focused and follows cursor */}
              <AnimatePresence>
                {focused === path ? (
                  <motion.div
                    className={`absolute inset-0 z-[2] h-[100%] w-[100%] rounded-[8px] bg-gradient-to-r from-pink-600/70 to-purple-500/90 transition-colors`}
                    transition={{
                      layout: {
                        duration: 0.375,
                        ease: "easeOut",
                      },
                      duration: 1,
                    }}
                    exit={{
                      opacity: 0,
                      transition: {
                        duration: 1,
                        ease: "easeOut",
                      },
                    }}
                    layoutId="highlight"
                  />
                ) : null}
              </AnimatePresence>
              {/* UNDERLINE: Animates/moves along selected path */}
              {selected === path ? (
                <motion.div
                  className={`absolute bottom-[-9px] left-0 z-0 h-[4.5px] w-[100%] rounded-[8px] bg-gradient-to-l from-pink-700/70 to-fuchsia-700/30 transition-colors duration-700 group-hover:bg-gradient-to-l group-hover:from-pink-600/80 group-hover:to-purple-500/90 group-hover:duration-1000 ${selected === path && !focused ? "bg-gradient-to-r from-pink-700/70 to-fuchsia-700/30 transition-colors" : null}`}
                  transition={{
                    layout: {
                      duration: 0.25,
                      ease: "easeOut",
                      type: "spring",
                      bounce: 0,
                      damping: 50,
                      stiffness: 500,
                    },
                  }}
                  layoutId="underline"
                />
              ) : null}
              {/* 'BOOMERANG' HIGHLIGHT: If new path isn't selected, highlight returns to currently selected path */}
              <AnimatePresence>
                {!focused && selected === path ? (
                  <motion.div
                    className={`absolute inset-0 z-[2] rounded-[8px] bg-gradient-to-r from-pink-700/70 to-fuchsia-700/30 transition-colors duration-1000 group-hover:bg-gradient-to-r group-hover:from-pink-600/70 group-hover:to-purple-500/90 group-hover:duration-1000`}
                    transition={{
                      layout: {
                        duration: 0.2,
                        ease: "easeOut",
                        type: "spring",
                        bounce: 0,
                        damping: 50,
                        stiffness: 500,
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
            </motion.button>
          </Link>
        );
      })}
    </div>
  );
}
