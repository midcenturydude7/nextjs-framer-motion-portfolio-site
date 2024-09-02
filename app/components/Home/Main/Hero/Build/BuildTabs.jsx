import { motion } from "framer-motion";
import { buildTabs } from "../../../../../lib/codeTabs";

export default function DesignTabs({ handleSelectedTabClick, selectedTab }) {
  return (
    <>
      {buildTabs.map(({ label, id }) => (
        <li key={id}>
          <motion.button
            onClick={() => handleSelectedTabClick(id)}
            className={`relative
                      ${
                        selectedTab === id
                          ? "cursor-default rounded-tr-lg border-l-[1px] border-r-[1px] border-t-[1px] border-slate-200/10 bg-indigo-950/15 px-4 py-[0.5rem] text-sky-300/50 hover:border-slate-200/10"
                          : "transition-colors duration-1000 hover:text-sky-300/50"
                      }
                      `}
          >
            <span>{label}</span>
            {selectedTab === id ? (
              <motion.div
                className="absolute left-0 top-10 h-[4.5px] w-[100%] bg-sky-300/20"
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
                layoutId="slider"
              />
            ) : null}
          </motion.button>
        </li>
      ))}
    </>
  );
}
