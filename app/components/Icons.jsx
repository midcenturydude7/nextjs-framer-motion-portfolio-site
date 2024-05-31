"use client";
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navIcons } from "../lib/navIcons";

export default function Icons() {
  const [focused, setFocused] = React.useState(null);

  return (
    <nav className="group relative">
      <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100" />
      <div className="relative flex gap-8 rounded-lg border border-transparent bg-zinc-900/90 px-[1.75rem] py-[0.475rem]  leading-none transition-colors duration-1000 hover:border hover:border-zinc-100/30 hover:bg-black/80">
        {navIcons.map(({ icon: Icon, url, id, label }) => (
          <Link key={id} href={url} target="_noblank">
            <button
              onKeyDown={(e) => (e.key === "Enter" ? setFocused(label) : null)}
              onFocus={() => setFocused(label)}
              onMouseEnter={() => setFocused(label)}
              tabIndex={0}
              className={`relative h-[35px] w-[35px] cursor-pointer rounded-full bg-zinc-800/90 px-5 py-5 text-[1.4rem] text-[#E8E8FD]/50 outline-none transition-colors duration-1000 hover:text-purple-200/90 hover:duration-1000`}
            >
              <span className="absolute inset-[9.5px]">
                <Icon />
              </span>
            </button>
          </Link>
        ))}
      </div>
    </nav>
  );
}
