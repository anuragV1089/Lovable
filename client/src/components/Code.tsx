import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";

export default function Code() {
  return (
    <>
      <div className="w-full h-full bg-black flex items-center justify-center text-2xl">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={25} minSize={15}>
            <div className="bg-[#1C1C1C] rounded-lg p-2 h-16 flex items-center justify-center mx-2 my-2">
              <div className="bg-black text-white px-9 py-3 rounded-lg flex items-center justify-center text-lg w-full">
                Files
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75} minSize={50}>
            <div className="flex flex-col items-center gap-4">
              <div className="text-4xl">Code Editor Coming Soon!</div>
              <div className="text-sm text-gray-400">
                We're working hard to bring you an amazing coding experience.
                Stay tuned!
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
}
