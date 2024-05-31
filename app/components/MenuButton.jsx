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
    <div className="group relative flex gap-6 rounded-lg border border-transparent bg-zinc-900/90 pb-[0.4rem] pl-[1.9rem] pr-[.55rem] pt-[1rem] leading-none transition-colors duration-1000 hover:border hover:border-zinc-100/30 hover:bg-black/80">
      {navItems.map(({ svg, path, id, label }) => {
        const isActive = path === pathname;
        return (
          <Link key={id} href={path}>
            <motion.button
              layout
              data-active={isActive}
              onClick={() => setSelected(path)}
              onKeyDown={(e) => (e.key === "Enter" ? setSelected(path) : null)}
              onFocus={() => setFocused(path)}
              onMouseEnter={() => setFocused(path)}
              tabIndex={0}
              className={`relative h-[35px] w-[90px] text-[#E8E8FD]/50 outline-[none] ${selected === path ? "cursor-default hover:text-[#E8E8FD]/50" : "cursor-pointer hover:text-purple-200/90"}`}
            >
              <span className="stroke-1 transition-colors group-hover:stroke-2 group-hover:duration-1000">
                {svg}
              </span>
              <span
                className={`absolute bottom-[0] left-[4px] right-[0] top-[6px] z-10 select-none text-[1rem]  transition-colors group-hover:duration-1000`}
              >
                {label}
              </span>
              <AnimatePresence>
                {focused === path ? (
                  <motion.div
                    className="absolute bottom-[1px] left-[-20px] right-[0] z-0 h-[110%] w-[120%] rounded-[8px] bg-[rgba(57,63,73,0.75)]"
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
                  <motion.div
                    className="absolute bottom-[-7px] left-[-15px] right-[0] z-0 h-[4px] w-[110%] rounded-[8px] bg-[#393f49]/75 transition-colors duration-1000 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600"
                    layoutId="underline"
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
