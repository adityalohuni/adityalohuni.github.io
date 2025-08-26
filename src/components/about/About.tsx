
import { useMemo } from "react";
import { Timeline } from "@/components/timeline/Timeline";
import { ModeToggle } from "@/components/theme/ModeToggle";
import { TechnicalSummary } from "./TechnicalSummary";
import { Certifications } from "./Certifications";
import { Projects } from "./Projects";
import { WritingSection } from "./WritingSection";
import { InterestsSection } from "./InterestsSection";
import { ProfileSidebar } from "./ProfileSidebar";
import { ContactCTA } from "./ContactCTA";
import { OssContributions } from "./OssContributions";
import type { OssContribution } from "./OssContributions";

type Profile = {
  name: string;
  email: string;
  github: string;
  linkedin: string;
  resumeLink: string;
  avatar: string;
  bio: string;
  tech: string[];
  certs: { title: string; issuer: string; year: number; link: string }[];
  interests: { strava: string; text: string };
  topSkills: string[];
  openTo: string;
  oss?: OssContribution[];
};

export function About() {
  const modules = import.meta.glob("/content/about/about.json", { eager: true }) as Record<string, { default: Profile }>;
  const data = modules["/content/about/about.json"].default;
  const cfg = useMemo(() => {
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
      oss = [],
    } = data || {};
    return { name, email, github, linkedin, resumeLink, avatar, bio, tech, certs, interests, topSkills, openTo, oss };
  }, [data]);

  return (
    <section aria-labelledby="about-heading" className="max-w-7xl mx-auto px-4 py-8 flex-1 ">
      <div className="flex justify-end">
        <ModeToggle />
      </div>
      <div className="mb-6">
        <h2 id="about-heading" className="text-2xl font-bold">Hi!</h2>
        <p className="mt-2 opacity-70">
          {cfg.bio || "I’m a software engineer who builds full-stack apps, mobile (Flutter) projects, and small AI prototypes."}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left / main column */}
        <div className="lg:col-span-2 space-y-6">
          <Timeline />
          <TechnicalSummary tech={cfg.tech} />
          <OssContributions oss={cfg.oss} />
          <Certifications certs={cfg.certs} />
          <Projects />
          <WritingSection />
          <InterestsSection interests={cfg.interests} />
        </div>
        {/* Right column / aside */}
        <div>
          <ProfileSidebar
            name={cfg.name}
            avatar={cfg.avatar}
            email={cfg.email}
            github={cfg.github}
            linkedin={cfg.linkedin}
            resumeLink={cfg.resumeLink}
            openTo={cfg.openTo}
            topSkills={cfg.topSkills}
          />
          <ContactCTA email={cfg.email} />
        </div>
      </div>
    </section>
  );
}
