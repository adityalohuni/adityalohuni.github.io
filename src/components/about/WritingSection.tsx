import React from "react";
import { Link } from "react-router-dom";

export const WritingSection: React.FC = () => (
  <div className="p-4 border rounded-xl">
    <h3 className="text-lg font-semibold">Writing & Papers</h3>
    <p className="mt-2 opacity-70">
      I write short implementation notes and paper summaries on my blog.
    </p>
    <div className="mt-3">
      <Link
        to="/blog"
        className="inline-block px-3 py-2 border rounded-md hover:bg-white/5"
      >
        View blog
      </Link>
    </div>
  </div>
);
