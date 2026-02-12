import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import Editor from "@monaco-editor/react";
import { useCodeStore } from "@/utils/store";
import { getLanguageFromFilePath } from "@/lib/utils";
import FileNodeView from "./FileNodeView";
import { handleEditorDidMount } from "@/lib/utils";

export default function Code() {
  const activeFilePath = useCodeStore((state) => state.activeFilePath);
  const updateFile = useCodeStore((state) => state.updateFile);
  const fileTree = useCodeStore((state) => state.fileTree);

  const content = useCodeStore((state) => {
    if (activeFilePath) {
      return state.files[activeFilePath] || "";
    }
    return "";
  });

  return (
    <>
      <div className="w-full h-full bg-black flex items-center justify-center text-xl">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={25} minSize={15}>
            <div className="bg-[#1C1C1C] text-white py-3 rounded-lg flex flex-col text-lg w-full h-full">
              {fileTree.length === 0
                ? "No files in the project. Please add files to start coding."
                : fileTree.map((node) => {
                    return <FileNodeView key={node.id} node={node} />;
                  })}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75} minSize={50}>
            {activeFilePath ? (
              <Editor
                height="100%"
                width="100%"
                theme="vs-dark"
                language={getLanguageFromFilePath(activeFilePath)}
                path={`file:///${activeFilePath}`}
                value={content}
                onChange={(value) => updateFile(activeFilePath, value || "")}
                options={{
                  readOnly: true,
                  minimap: { enabled: false },
                  fontSize: 16,
                  lineHeight: 24,
                  wordWrap: "on",
                  automaticLayout: true,
                }}
                onMount={(editor, monaco) => {
                  handleEditorDidMount(editor, monaco);
                }}
              />
            ) : (
              <div className="w-full h-full bg-black flex items-center justify-center text-2xl">
                No file selected. Please select a file to start coding.
              </div>
            )}
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
}
