"use client";
import React from "react";
import { navItems } from "../lib/navItems";
import { usePathname } from "next/navigation";
import Link from "next/link";


export default function Menu() {
  return (
    <div className="group relative">
      <div>
        <ul>
          <li>Menu</li>
        </ul>
      </div>
    </div>
  );
}
