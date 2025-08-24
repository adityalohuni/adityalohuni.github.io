import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Timeline } from "@/components/timeline/Timeline";

import { ModeToggle } from "@/components/theme/ModeToggle";
import aditya_png from "@/assets/aditya_grey.png";

// AboutMe component that reads content from a JSON file
// Expected JSON shape (example):
// {
//   "name": "Aditya",
//   "email": "aditya@example.com",
//   "github": "https://github.com/your-username",
//   "linkedin": "https://www.linkedin.com/in/your-profile/",
//   "resumeLink": "/resume.pdf",
//   "avatar": "/avatar.jpg",
//   "bio": "Short bio...",
//   "tech": ["JavaScript/TypeScript", "React", "Node.js"],
//   "certs": [{"title":"Intro to ML","issuer":"Coursera","year":2024,"link":"#"}],
//   "interests": { "strava": "https://www.strava.com/athletes/your-strava-id", "text": "Running" },
//   "topSkills": ["Systems design","ML prototyping","Cross-platform mobile apps"],
//   "openTo": "Fullstack / ML systems"
// }
//

export function About() {
  const data = import.meta.glob("/content/about/about.json", {
    eager: true,
  })["/content/about/about.json"].default;
  // Use useMemo to avoid recreating values on every render
  const cfg = useMemo(() => {
    // Provide a safe fallback if the JSON file is missing or incomplete
    const {
      name = "",
      email = "",
      github = "",
      linkedin = "",
      resumeLink = "",
      avatar = "/avatar.jpg",
      bio = "",
      tech = [],
      certs = [],
      interests = { strava: "", text: "" },
      topSkills = [],
      openTo = "",
    } = data || {};

    return {
      name,
      email,
      github,
      linkedin,
      resumeLink,
      avatar,
      bio,
      tech,
      certs,
      interests,
      topSkills,
      openTo,
    };
  }, []);

  return (
    <section
      aria-labelledby="about-heading"
      className="max-w-7xl mx-auto px-4 py-8 flex-1 "
    >
      <div className="flex justify-end">
        <ModeToggle />
      </div>

      <div className="mb-6">
        <h2 id="about-heading" className="text-2xl font-bold">
          Hi!
        </h2>
        <p className="mt-2 opacity-70">
          {cfg.bio ||
            "I’m a software engineer who builds full-stack apps, mobile (Flutter) projects, and small AI prototypes."}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left / main column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Timeline  */}
          <Timeline />
          {/* Technical Summary */}
          <div className="p-4 border rounded-xl">
            <h3 className="text-lg font-semibold">Technical Summary</h3>
            <p className="mt-2 opacity-70">
              Languages, frameworks & libraries I use:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {(cfg.tech && cfg.tech.length > 0
                ? cfg.tech
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

          {/* Certifications */}
          <div className="p-4 border rounded-xl">
            <h3 className="text-lg font-semibold">Selected Certificates</h3>
            <p className="mt-2 opacity-70">
              Proof of study — links to verification / artifacts
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(cfg.certs && cfg.certs.length > 0 ? cfg.certs : []).map((c) => (
                <a
                  key={c.title}
                  href={c.link || "#"}
                  className="p-3 border rounded-md hover:shadow-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-sm font-medium">{c.title}</div>
                  <div className="text-xs opacity-60">
                    {c.issuer} • {c.year}
                  </div>
                </a>
              ))}
              {(!cfg.certs || cfg.certs.length === 0) && (
                <div className="text-sm opacity-60">
                  No certificates listed in data/about.json
                </div>
              )}
            </div>
          </div>

          {/* Projects */}
          <div className="p-4 border rounded-xl">
            <h3 className="text-lg font-semibold">Projects</h3>
            <p className="mt-2 opacity-70">Things I do in my free time</p>
            <div className="mt-3">
              {/* Project Icon and description in a row */}
            </div>
          </div>

          {/* Writing / Papers */}
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

          {/* Interests */}
          <div className="p-4 border rounded-xl">
            <h3 className="text-lg font-semibold">Interests</h3>
            <p className="mt-2 opacity-70">
              {cfg.interests?.text ||
                "When I'm not coding I like running and exploring trails."}
            </p>
            <div className="mt-3 flex items-center gap-3">
              {cfg.interests?.strava ? (
                <a
                  href={cfg.interests.strava}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 border rounded-md"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M13 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM6 20c.4-2 2-4 4-4h3l-1-3 2-2 3 1 1 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  View Strava
                </a>
              ) : (
                <span className="text-sm opacity-70">
                  No Strava link provided
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right column / aside */}
        <aside className="space-y-6">
          <div className="p-4 border rounded-xl flex flex-col items-center text-center">
            <img
              src={cfg.avatar}
              alt={`${cfg.name} profile`}
              className="w-28 h-28 rounded-full object-cover [object-position:50%_20%] border"
            />
            <div className="mt-3">
              <div className="font-semibold">{cfg.name || "Aditya"}</div>
              <div className="text-xs opacity-70">
                Software Engineer — Fullstack · Mobile · AI
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2 w-full">
              {cfg.email ? (
                <a
                  href={`mailto:${cfg.email}`}
                  className="inline-flex items-center justify-center gap-2 px-3 py-2 border rounded-md"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M3 8l8.5 6L20 8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="16"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span className="text-sm">{cfg.email}</span>
                </a>
              ) : (
                <div className="text-sm opacity-60">Email not configured</div>
              )}

              <div className="flex gap-2 justify-center">
                {cfg.github ? (
                  <a
                    href={cfg.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2 border rounded-md"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.2-3.37-1.2-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.36-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0112 6.8c.85.004 1.71.11 2.51.32 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .26.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </a>
                ) : null}

                {cfg.linkedin ? (
                  <a
                    href={cfg.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2 border rounded-md"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M6 9.5v8M6 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM10.5 17.5V12c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v5.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ) : null}
              </div>

              {cfg.resumeLink ? (
                <a
                  href={cfg.resumeLink}
                  className="mt-2 inline-flex items-center justify-center gap-2 px-3 py-2 border rounded-md"
                  download
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M12 3v12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 11l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="3"
                      y="17"
                      width="18"
                      height="4"
                      rx="1"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                  Download Resume
                </a>
              ) : null}

              <div className="mt-2 text-xs opacity-60">
                Interested in {cfg.openTo || "Fullstack / ML systems"} ·
                Available for interviews
              </div>
            </div>
          </div>

          {/* Top skills */}
          <div className="p-4 border rounded-xl">
            <h4 className="text-sm font-semibold">Top skills</h4>
            <ul className="mt-2 text-sm opacity-80 space-y-1">
              {(cfg.topSkills && cfg.topSkills.length > 0
                ? cfg.topSkills
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

          {/* Quick contact CTA */}
          <div className="p-4 border rounded-xl text-center">
            <div className="text-sm opacity-70">Looking to collaborate?</div>
            {cfg.email ? (
              <a
                href={`mailto:${cfg.email}?subject=Opportunity`}
                className="mt-3 inline-block px-4 py-2 border rounded-md"
              >
                Say hello
              </a>
            ) : (
              <div className="mt-3 text-sm opacity-60">
                Contact not configured
              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
