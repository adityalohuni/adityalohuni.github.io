
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import { BlogPage } from "@/components/blog/BlogPage";
import { BlogDetail } from "@/components/blog/BlogDetails";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        {/* TODO: Add PapersPage and PaperDetail routes if needed */}
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
