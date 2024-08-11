"use client";
import React from "react";
import MenuButton from "./MenuButton";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();
  const [selected, setSelected] = React.useState(pathname);
  const [focused, setFocused] = React.useState(null);

  return (
    <nav onPointerLeave={() => setFocused(null)} className="group relative">
      <div className="from-200% absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-sky-500/80 via-fuchsia-700/70 via-60% to-indigo-700/90 to-80% opacity-50 blur transition duration-1000 group-hover:opacity-100" />

      <MenuButton
        selected={selected}
        setSelected={setSelected}
        focused={focused}
        setFocused={setFocused}
      />

      {/* <div className="relative flex gap-6 rounded-lg border border-transparent bg-zinc-900/90 pb-[0.4rem] pl-[1.9rem] pr-[.55rem] pt-[1rem] leading-none transition-colors duration-1000 hover:border hover:border-zinc-100/30 hover:bg-black/80">
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
                className={`group relative h-[35px] w-[90px] text-[#E8E8FD]/50 outline-[none] ${selected === path ? "cursor-default hover:text-[#E8E8FD]/50" : "cursor-pointer hover:text-purple-200/90"}`}
              >
                <span className="stroke-1 transition-colors group-hover:stroke-2 group-hover:duration-1000">
                  {svg}
                </span>
                <span
                  className={`absolute bottom-[0] left-[4px] right-[0] top-[6px] z-10 select-none text-[1rem]  transition-colors group-hover:duration-1000`}
                >
                  {label}
                </span>
                {focused === path ? (
                  <motion.div
                    className="absolute bottom-[1px] left-[-20px] right-[0] z-0 h-[110%] w-[120%] rounded-[8px] bg-[rgba(57,63,73,0.75)]"
                    transition={{
                      layout: {
                        duration: 0.4,
                        ease: "easeOut",
                      },
                    }}
                    layoutId="highlight"
                  />
                ) : null}
                {selected === path ? (
                  <motion.div
                    className="absolute bottom-[-7px] left-[-15px] right-[0] z-0 h-[4px] w-[110%] rounded-[8px] bg-[#393f49]/70 transition-colors duration-1000 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:duration-1000"
                    layoutId="underline"
                  />
                ) : null}
              </button>
            </Link>
          );
        })}
      </div> */}
    </nav>
  );
}
