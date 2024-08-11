"use client";
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navIcons } from "../../../../lib/navIcons";

export default function Icons() {
  const [circle, setCircle] = React.useState(null);

  return (
    <nav onPointerLeave={() => setCircle(null)} className="group relative">
      <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-sky-500/80 from-20% via-fuchsia-700/70 via-60% to-indigo-700/90 to-80% opacity-50 blur transition duration-1000 group-hover:opacity-100" />
      <div className="relative flex gap-3 rounded-lg border border-transparent bg-zinc-900/80 px-[1.25rem] py-[0.475rem] leading-none transition-colors duration-1000 hover:border hover:border-zinc-100/30 hover:bg-black/80">
        {navIcons.map(({ icon: Icon, url, id, label }) => (
          <Link key={id} href={url} target="_noblank">
            <motion.button
              layout
              onKeyDown={(e) => (e.key === "Enter" ? setCircle(label) : null)}
              onFocus={() => setCircle(label)}
              onMouseEnter={() => setCircle(label)}
              tabIndex={0}
              className={`relative h-[2.313rem] w-[2.188rem] cursor-pointer rounded-full bg-slate-900/30 px-5 py-5 text-[1.25rem] text-[#E8E8FD]/50 outline-none transition-colors hover:text-purple-200/90 hover:duration-1000 group-hover:bg-slate-900/50 group-hover:duration-1000`}
            >
              <span className="absolute inset-[10px] z-10">
                <Icon />
              </span>
              <AnimatePresence>
                {circle === label ? (
                  <motion.div
                    className="absolute inset-[0.5px] z-0 h-[100%] w-[100%] rounded-full bg-gradient-to-t from-indigo-950/80 to-sky-300/70"
                    transition={{
                      layout: {
                        duration: 0.375,
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
                    layoutId="circle"
                  />
                ) : null}
              </AnimatePresence>
            </motion.button>
          </Link>
        ))}
      </div>
    </nav>
  );
}
