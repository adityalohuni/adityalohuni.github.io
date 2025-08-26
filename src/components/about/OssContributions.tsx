import React from "react";

export type OssContribution = {
  name: string;
  logo: string;
  link: string;
};

type OssContributionsProps = {
  oss: OssContribution[];
};

export const OssContributions: React.FC<OssContributionsProps> = ({ oss }) => {
  if (!oss || oss.length === 0) return null;
  return (
    <div className="p-4 border rounded-xl">
      <h3 className="text-lg font-semibold mb-2">OSS Contributions</h3>
      <div className="flex flex-wrap gap-2">
        {oss.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-1 border rounded-full text-xs hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            title={item.name}
          >
            <img src={item.logo} alt={item.name} className="w-4 h-4 mr-1" />
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};
