import React from "react";

type TechnicalSummaryProps = {
  tech: string[];
};

export const TechnicalSummary: React.FC<TechnicalSummaryProps> = ({ tech }) => (
  <div className="p-4 border rounded-xl">
    <h3 className="text-lg font-semibold">Technical Summary</h3>
    <p className="mt-2 opacity-70">
      Languages, frameworks & libraries I use:
    </p>
    <div className="mt-3 flex flex-wrap gap-2">
      {(tech && tech.length > 0
        ? tech
        : [
            "JavaScript/TypeScript",
            "React",
            "Node.js",
            "Flutter",
            "Python",
          ]
      ).map((t) => (
        <span
          key={t}
          className="text-sm px-3 py-1 border rounded-full opacity-90"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);
