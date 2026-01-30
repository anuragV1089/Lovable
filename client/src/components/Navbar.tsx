import PreviewIcon from "./ui/PreviewIcon";
import CodeIcon from "./ui/CodeIcon";
import ExpandingButton from "./ui/ExpandingButton";
import type { WorkSpaceTab } from "./WorkSpace";

export default function Navbar({
  activeTab,
  setActiveTab,
}: {
  activeTab: WorkSpaceTab;
  setActiveTab: (active: WorkSpaceTab) => void;
}) {
  return (
    <div className="text-white py-2 flex justify-center items-center bg-[#1C1C1C] mx-4">
      <div className="flex items-center justify-center gap-1">
        <ExpandingButton
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          label="preview"
          icon={
            <PreviewIcon
              color={activeTab === "preview" ? "#0D99FF" : "white"}
            />
          }
        />
        <ExpandingButton
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          label="code"
          icon={<CodeIcon color={activeTab === "code" ? "#0D99FF" : "white"} />}
        />
      </div>
    </div>
  );
}
