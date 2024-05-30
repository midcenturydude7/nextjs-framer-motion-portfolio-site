"use client";
import Link from "next/link";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { navIcons } from "../lib/navIcons";

import { FaGithubAlt, FaCodepen } from "react-icons/fa6";
import { FiCodesandbox } from "react-icons/fi";

const navIcons = [
  {
    label: "github",
    icon: FaGithubAlt,
    url: "https://github.com/midcenturydude7",
  },
  {
    label: "codepen",
    icon: FaCodepen,
    url: "https://github.com/midcenturydude7",
  },
  {
    label: "codesandbox",
    icon: FiCodesandbox,
    url: "https://github.com/midcenturydude7",
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));

export default function Icons() {
  return (
    <nav className="group relative">
      <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100" />
      <div className="relative flex gap-6 rounded-lg border border-transparent bg-zinc-900/90 pb-[0.4rem] pl-[1.9rem] pr-[.55rem] pt-[1rem] leading-none transition-colors duration-1000 hover:border hover:border-zinc-100/30 hover:bg-black/80">
        {navIcons.map(({ icon, url, id }) => {
          const SocialIcon = icon;
          return (
            <Link key={id} href={url} target="_noblank">
              <button>
                <span>
                  <SocialIcon />
                </span>
              </button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
