import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { JSX } from "react";
import { useState } from "react";

type PropType = HTMLMotionProps<"div"> & {
  hoverText: string;
  icon: JSX.Element;
};

export default function ToolTip({ hoverText, icon, ...props }: PropType) {
  const [isActive, setActive] = useState(false);
  const gradient =
    "radial-gradient(circle at center, rgba(13,153,255,0.7) 0%, rgba(13,153,255,0.5) 45%, rgba(13,153,255,0) 90%)";
  return (
    <motion.div
      {...props}
      className="relative flex justify-end"
      whileHover={isActive ? undefined : "hovered"}
      onClick={() => {
        setActive((isActive) => !isActive);
      }}
      initial="rest"
      animate={isActive ? "active" : "rest"}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        variants={{
          rest: { opacity: 0 },
          hovered: { opacity: 1 },
          active: {
            display: "none",
            transition: { duration: 0, ease: "easeIn" },
          },
        }}
        transition={{ ease: "easeInOut", duration: 0.3, delay: 1 }}
        className="text-sm p-2 absolute top-full left-1/2 -translate-x-1/2 -mt-1 px-1 w-max rounded-lg bg-white text-black pointer-events-none z-10 whitespace-nowrap"
      >
        {hoverText}
      </motion.div>
      <motion.button
        layoutId={`button-${hoverText}`}
        variants={{
          rest: { scale: 1 },
          hovered: {
            scale: 1.05,
            backgroundImage: gradient,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          },
          active: {
            borderColor: "#0D99FF",
            backgroundImage: gradient,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          },
        }}
        transition={{
          type: "tween",
          duration: 0.3,
          layout: {
            duration: 0.3,
            ease: "easeInOut",
          },
        }}
        className="rounded-md border overflow-hidden border-gray-500 text-white bg-black p-1 cursor-pointer flex items-center justify-center"
      >
        <motion.span layoutId={`icon-${hoverText}`}>{icon}</motion.span>
        <motion.span
          className="text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isActive ? hoverText : null}
        </motion.span>
      </motion.button>
    </motion.div>
  );
}
