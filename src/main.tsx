import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";

import { BlogPage } from "@/components/blog/BlogPage";
import { BlogDetail } from "@/components/blog/BlogDetails";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        {/* You can add PapersPage and PaperDetail here too */}
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
