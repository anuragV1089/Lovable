import ToolTip from "./ui/ToolTip";
import Code from "./ui/Code";
import Preview from "./ui/Preview";
import Arrow from "./ui/Arrow";
import Logo from "./ui/Logo";

export default function Navbar() {
  return (
    <div className="text-white px-4 h-12 flex items-center justify-between bg-[#1C1C1C]">
      <div className="flex items-center justify-between w-1/8">
        <ToolTip hoverText="Code" icon={<Code />} />
        <ToolTip hoverText="Arrow" icon={<Arrow />} />
        <ToolTip hoverText="Logo" icon={<Logo />} />
        <ToolTip hoverText="Preview" icon={<Preview />} />
      </div>
    </div>
  );
}
