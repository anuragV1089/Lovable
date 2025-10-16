import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExpandingButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const buttonText = isExpanded ? "New Content Was Added!" : "Click Me";

  return (
    // This container is the key: it aligns its content to the right
    <div className="flex w-full justify-end">
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        // The layout prop tells Framer Motion to animate size and position changes
        layout
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="
          px-8 py-3
          bg-indigo-600 text-white font-bold
          rounded-lg shadow-lg
          whitespace-nowrap
          focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75
          hover:bg-indigo-700 transition-colors duration-200
        "
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={buttonText}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            {buttonText}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ExpandingButton;
