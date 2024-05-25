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

      <div className="relative flex gap-2 rounded-lg border border-transparent bg-zinc-900/90 pb-[0.6rem] pl-[1.35rem] pr-[2.25rem] pt-[1rem] leading-none transition-colors duration-1000 hover:border hover:border-zinc-100/30 hover:bg-black/80">
        {navItems.map(({ svg, path, id, label }) => {
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
                {/* <span className="left-[-2px] top-[2px] absolute z-10 opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                    />
                  </svg>
                </span> */}
                <span
                  className={`absolute bottom-[0] left-[4px] right-[0] top-[6px] z-10 select-none text-[1rem] text-[#E8E8FD]/50 transition-colors hover:text-purple-200/90 group-hover:duration-1000 ${selected === path ? "hover:text-[#E8E8FD]/50" : null}`}
                >
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
