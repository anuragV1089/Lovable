import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Editor from "@/pages/Editor";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/editor" element={<Editor />} />
    </Route>
  )
);

export default router;
