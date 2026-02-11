import { create } from "zustand";

type FileNode = {
  id: string;
  name: string;
  type: "file" | "folder";
  path: string;
  children?: FileNode[];
};

type FileMap = Record<string, string>;

type CodeStore = {
  fileTree: FileNode[];
  files: FileMap;
  activeFilePath: string | null;

  setActiveFile: (path: string) => void;
  updateFile: (path: string, content: string) => void;
  setFileTree: (tree: FileNode[]) => void;
  setFiles: (files: FileMap) => void;
};

export const useCodeStore = create<CodeStore>((set) => ({
  fileTree: [],
  files: {},
  activeFilePath: null,

  setActiveFile: (path) => set({ activeFilePath: path }),
  updateFile: (path, content) =>
    set((state) => ({
      files: {
        ...state.files,
        [path]: content,
      },
    })),
  setFileTree: (tree) => set({ fileTree: tree }),
  setFiles: (files) => set({ files }),
}));
