import { useState } from "react";
import Code from "./Code";
import Preview from "./Preview";
import Navbar from "./Navbar";
export type WorkSpaceTab = "preview" | "code" | "other";

export default function WorkSpace() {
  const [activeTab, setActiveTab] = useState<WorkSpaceTab>("preview");

  return (
    <>
      <div className="w-full h-16 bg-[#1C1C1C] flex gap-8">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {activeTab == "code" && <Code />}
      {activeTab == "preview" && <Preview />}
    </>
  );
}
