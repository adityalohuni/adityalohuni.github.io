import React from "react";

type ProfileSidebarProps = {
  name: string;
  avatar: string;
  email: string;
  github: string;
  linkedin: string;
  resumeLink: string;
  openTo: string;
  topSkills: string[];
};

export const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
  name,
  avatar,
  email,
  github,
  linkedin,
  resumeLink,
  openTo,
  topSkills,
}) => (
  <aside className="space-y-6">
    <div className="p-4 border rounded-xl flex flex-col items-center text-center">
      <img
        src={avatar}
        alt={`${name} profile`}
        className="w-28 h-28 rounded-full object-cover [object-position:50%_20%] border"
      />
      <div className="mt-3">
        <div className="font-semibold">{name || "Aditya"}</div>
        <div className="text-xs opacity-70">
          Software Engineer — Fullstack · Mobile · AI
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2 w-full">
        {email ? (
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center gap-2 px-3 py-2 border rounded-md"
          >
            Email
          </a>
        ) : (
          <div className="text-sm opacity-60">Email not configured</div>
        )}
        <div className="flex gap-2 justify-center">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 border rounded-md">GitHub</a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 border rounded-md">LinkedIn</a>
          )}
        </div>
        {resumeLink && (
          <a href={resumeLink} className="mt-2 inline-flex items-center justify-center gap-2 px-3 py-2 border rounded-md" download>
            Download Resume
          </a>
        )}
        <div className="mt-2 text-xs opacity-60">
          Interested in {openTo || "Fullstack / ML systems"} · Available for interviews
        </div>
      </div>
    </div>
    <div className="p-4 border rounded-xl">
      <h4 className="text-sm font-semibold">Top skills</h4>
      <ul className="mt-2 text-sm opacity-80 space-y-1">
        {(topSkills && topSkills.length > 0
          ? topSkills
          : [
              "Systems design & API development",
              "ML prototyping & prompt engineering",
              "Cross-platform mobile apps (Flutter)",
            ]
        ).map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  </aside>
);
