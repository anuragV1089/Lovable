import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { useState } from "react";
import type { JSX } from "react";

type PropType = HTMLMotionProps<"div"> & {
  content?: string;
  icon?: JSX.Element;
};

export default function Button({ content, icon, ...props }: PropType) {
  const [isHovered, setIsHovered] = useState(false);

  const gradient1 =
    "radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0) 75%)";
  const gradient2 =
    "radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0) 90%)";
  return (
    <motion.div
      {...props}
      className={`cursor-pointer ${
        icon ? "" : "min-w-28"
      } h-10 flex items-center text-white text-center w-fit rounded-full border  border-white/20 hover:border-white/90 transition duration-500 ease-in-out`}
      style={{
        backgroundImage: isHovered ? gradient2 : gradient1,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      animate={{ backgroundImage: isHovered ? gradient2 : gradient1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <p className="bg-clip-text w-full flex justify-center bg-[linear-gradient(to_bottom,rgba(255,255,255,0.3),rgba(255,255,255,1))] hover:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.5),rgba(255,255,255,1))] text-transparent p-3">
        {content}
        {icon}
      </p>
    </motion.div>
  );
}
