import { FileNode } from "@/utils/store";
import { Monaco, OnMount } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLanguageFromFilePath(filePath: string): string {
  const extension = filePath.split(".").pop()?.toLowerCase();
  switch (extension) {
    case "js":
    case "jsx":
      return "javascript";
    case "ts":
    case "tsx":
      return "typescript";
    case "json":
      return "json";
    case "html":
      return "html";
    case "css":
      return "css";
    default:
      return "plaintext";
  }
}

export const handleEditorDidMount = (
  editor: editor.IStandaloneCodeEditor,
  monaco: Monaco,
) => {
  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: true,
    noSyntaxValidation: false,
  });
};

export const MOCK_FILE_TREE: FileNode[] = [
  {
    id: "src",
    name: "src",
    type: "folder",
    path: "src",
    children: [
      {
        id: "main.tsx",
        name: "main.tsx",
        type: "file",
        path: "src/main.tsx",
      },
      {
        id: "App.tsx",
        name: "App.tsx",
        type: "file",
        path: "src/App.tsx",
      },
      {
        id: "components",
        name: "components",
        type: "folder",
        path: "src/components",
        children: [
          {
            id: "Header.tsx",
            name: "Header.tsx",
            type: "file",
            path: "src/components/Header.tsx",
          },
          {
            id: "Button.tsx",
            name: "Button.tsx",
            type: "file",
            path: "src/components/Button.tsx",
          },
        ],
      },
      {
        id: "styles",
        name: "styles",
        type: "folder",
        path: "src/styles",
        children: [
          {
            id: "globals.css",
            name: "globals.css",
            type: "file",
            path: "src/styles/globals.css",
          },
        ],
      },
    ],
  },
  {
    id: "package.json",
    name: "package.json",
    type: "file",
    path: "package.json",
  },
  {
    id: "vite.config.ts",
    name: "vite.config.ts",
    type: "file",
    path: "vite.config.ts",
  },
  {
    id: "README.md",
    name: "README.md",
    type: "file",
    path: "README.md",
  },
];

export const MOCK_FILE_MAP: Record<string, string> = {
  "src/main.tsx": `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,

  "src/App.tsx": `import Header from "./components/Header";
import Button from "./components/Button";

export default function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <Header />
      <Button label="Click Me" />
    </div>
  );
}`,

  "src/components/Header.tsx": `export default function Header() {
  return (
    <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
      🚀 Welcome to Your IDE
    </h1>
  );
}`,

  "src/components/Button.tsx": `type Props = {
  label: string;
};

export default function Button({ label }: Props) {
  return (
    <button
      style={{
        padding: "10px 20px",
        background: "#6366f1",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      {label}
    </button>
  );
}`,

  "src/styles/globals.css": `body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #111;
  color: white;
}`,

  "package.json": `{
  "name": "awesome-project",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}`,

  "vite.config.ts": `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});`,

  "README.md": `# Awesome Project

This is a demo project to test our custom IDE.

## Features

- File Explorer
- Monaco Editor
- AI integration (coming soon)
- e2b sync (coming soon)
`,
};
