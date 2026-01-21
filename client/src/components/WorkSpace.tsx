import { useState } from "react";
import Code from "./Code";
import Preview from "./Preview";
import CodeIcon from "./ui/CodeIcon";
import PreviewIcon from "./ui/PreviewIcon";
type WorkSpaceTab = "preview" | "code" | "other";

export default function WorkSpace() {
  const [activeTab, setActiveTab] = useState<WorkSpaceTab>("preview");

  function onClickHandler(active: WorkSpaceTab) {
    setActiveTab(active);
  }
  return (
    <>
      <div className="w-full h-12 bg-[#1C1C1C] flex gap-8 p-1">
        <button
          className="px-2 border-white border-1 rounded-lg"
          onClick={() => {
            onClickHandler("code");
          }}
        >
          <CodeIcon />
        </button>
        <button
          className="px-2 border-white border-1 rounded-lg"
          onClick={() => {
            onClickHandler("preview");
          }}
        >
          <PreviewIcon />
        </button>
      </div>
      {activeTab == "code" && <Code />}
      {activeTab == "preview" && <Preview />}
    </>
  );
}
