import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Editor() {
  return (
    <div className="max-w-screen mx-auto h-screen flex flex-col text-white p-1">
      <div className="text-white p-6">Kya kha?</div>
      <div className="flex-1">
        <ResizablePanelGroup direction="horizontal" className="border">
          <ResizablePanel defaultSize={25} className="min-w-sm">
            <div>Editor</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <div>Coder/Previewer</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
