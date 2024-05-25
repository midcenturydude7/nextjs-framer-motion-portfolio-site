"use client";
import React from "react";
import { navItems } from "../lib/navItems";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Menu() {
  const pathname = usePathname();
  const [selected, setSelected] = React.useState(pathname);
  const [focused, setFocused] = React.useState(null);

  return (
    <nav onMouseLeave={() => setFocused(null)} className="group relative">
      <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100"></div>

      <div className="relative flex gap-2 rounded-lg border border-transparent bg-zinc-900/90 py-[1rem] pl-[1.35rem] pr-[2.25rem] leading-none transition-colors duration-1000 hover:border hover:border-zinc-100/30 hover:bg-black/80">
        {navItems.map(({ path, id, label }) => {
          const isActive = path === pathname;
          return (
            <Link key={id} href={path}>
              <button
                key={id}
                data-active={isActive}
                onClick={() => setSelected(path)}
                onKeyDown={(e) =>
                  e.key === "Enter" ? setSelected(path) : null
                }
                onFocus={() => setFocused(path)}
                onMouseEnter={() => setFocused(path)}
                tabIndex={0}
                className={`group relative h-[35px] w-[90px] outline-[none] ${selected === path ? "cursor-default" : "cursor-pointer"}`}
              >
                <span className="absolute bottom-[0] left-[4px] right-[0] top-[6px] z-10 select-none text-[1rem] text-[#E8E8FD]/50 transition-colors hover:text-[#E8E8FD]/90">
                  {label}
                </span>
                {focused === path ? (
                  <motion.div
                    className="absolute bottom-[1px] left-[0] right-[0] z-0 h-[110%] w-[110%] rounded-[8px] bg-[#23272F]"
                    transition={{
                      layout: {
                        duration: 0.2,
                        ease: "easeOut",
                      },
                    }}
                    layoutId="highlight"
                  />
                ) : null}
                {selected === path ? (
                  <motion.div
                    className="absolute bottom-[-5px] left-[12px] right-[0] z-0 h-[4px] w-[80%] rounded-[8px] bg-[#393f49]/70 transition-colors duration-1000 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:duration-1000"
                    transition={{
                      layout: {
                        duration: 0.4,
                        ease: "easeInOut",
                      },
                    }}
                    layoutId="underline"
                  />
                ) : null}
              </button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
