import ToolTip from "./ui/ToolTip";
import Code from "./ui/Code";
import Preview from "./ui/Preview";
import Arrow from "./ui/Arrow";
import Logo from "./ui/Logo";
import { useState } from "react";
import { useToolTip } from "@/context/ToolTipContext";

export default function Navbar() {
  return (
    <div className="text-white h-12 flex items-center justify-between bg-[#1C1C1C]">
      <div className="py-4 flex items-center justify-center w-48 gap-1">
        <ToolTip hoverText="Code" icon={<Code />} />
        <ToolTip hoverText="Arrow" icon={<Arrow />} />
        <ToolTip hoverText="Logo" icon={<Logo />} />
        <ToolTip hoverText="Preview" icon={<Preview />} />
      </div>
    </div>
  );
}
