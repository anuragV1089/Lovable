import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToolTipProvider } from "./context/ToolTipContext.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./utils/router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToolTipProvider>
      <RouterProvider router={router} />
    </ToolTipProvider>
  </StrictMode>
);
