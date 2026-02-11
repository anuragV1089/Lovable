import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { WorkSpaceTab } from "../WorkSpace";

const ExpandingButton: React.FC<{
  activeTab: WorkSpaceTab;
  setActiveTab: (active: WorkSpaceTab) => void;
  label: WorkSpaceTab;
  icon: React.ReactNode;
}> = ({ activeTab, setActiveTab, label, icon }) => {
  return (
    // This container is the key: it aligns its content to the right

    <motion.button
      onClick={() => {
        setActiveTab(label);
      }}
      layout
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={`
        flex items-center gap-2
        rounded-md border
        px-4 py-3 overflow-hidden
        ${activeTab === label ? "border-[#0D99FF] text-[#0D99FF]" : "bg-transparent border-white"}
      `}
    >
      <motion.span layout className="text-2xl">
        {icon}
      </motion.span>
      <AnimatePresence mode="popLayout">
        {activeTab === label && (
          <motion.span
            key={label}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ExpandingButton;
