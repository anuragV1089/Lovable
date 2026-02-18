import { MOCK_FILE_MAP, MOCK_FILE_TREE } from "@/lib/utils";
import { create } from "zustand";

export type FileNode = {
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
  expandedFolders: Set<string>;

  toggleFolder: (path: string) => void;
  setActiveFile: (path: string) => void;
  updateFile: (path: string, content: string) => void;
  setFileTree: (tree: FileNode[]) => void;
  setFiles: (files: FileMap) => void;
};

export const useCodeStore = create<CodeStore>((set) => ({
  fileTree: MOCK_FILE_TREE,
  files: MOCK_FILE_MAP,
  activeFilePath: null,
  expandedFolders: new Set(),

  toggleFolder: (path) =>
    set((state) => {
      const newExpandedFolders = new Set(state.expandedFolders);
      if (newExpandedFolders.has(path)) {
        newExpandedFolders.delete(path);
      } else {
        newExpandedFolders.add(path);
      }
      return { expandedFolders: newExpandedFolders }; //explicit return
    }),
  setActiveFile: (path) => set({ activeFilePath: path }),
  updateFile: (path, content) =>
    set((state) => ({
      files: {
        ...state.files,
        [path]: content,
      }, //implicit return, js syntax
    })),
  setFileTree: (tree) => set({ fileTree: tree }),
  setFiles: (files) => set({ files }),
}));

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type ChatStore = {
  messages: Message[];
  addMessage: (message: Message) => void;
  isStreaming: boolean;
  setIsStreaming: (isStreaming: boolean) => void;
  streamingContent: string;
  setStreamingContent: (content: string) => void;
};

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),
  isStreaming: false,
  setIsStreaming: (isStreaming) => set({ isStreaming }),
  streamingContent: "",
  setStreamingContent: (content) => set({ streamingContent: content }),
}));
