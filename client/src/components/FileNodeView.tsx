import { FileNode, useCodeStore } from "../utils/store";

type props = {
  node: FileNode;
  depth?: number;
};

export default function FileNodeView({ node, depth = 0 }: props) {
  const activeFilePath = useCodeStore((state) => state.activeFilePath);
  const setActiveFile = useCodeStore((state) => state.setActiveFile);
  const toggleFolder = useCodeStore((state) => state.toggleFolder);
  const expandedFolders = useCodeStore((state) => state.expandedFolders);

  const isActive = activeFilePath === node.path;
  const isExpanded = expandedFolders.has(node.path);

  const paddingLeft = depth * 16; // 16px per level of depth

  if (node.type === "folder") {
    return (
      <div>
        <div
          className={`cursor-pointer flex items-center gap-2 p-1 ${isExpanded ? "bg-gray-700" : ""}`}
          onClick={() => toggleFolder(node.path)}
          style={{ paddingLeft }}
        >
          <div className="px-3">
            <span>{isExpanded ? "📂" : "📁"}</span>
            <span>{node.name}</span>
          </div>
        </div>
        {isExpanded &&
          node.children &&
          node.children.map((child) => (
            <FileNodeView key={child.id} node={child} depth={depth + 1} />
          ))}
      </div>
    );
  }
  return (
    <div
      style={{
        paddingLeft,
      }}
      className={`cursor-pointer py-1 ${isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
      onClick={() => {
        setActiveFile(node.path);
      }}
    >
      <div className="px-3">{node.name}</div>
    </div>
  );
}
