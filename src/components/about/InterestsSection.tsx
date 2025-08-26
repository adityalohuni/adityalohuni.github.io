import React from "react";

type InterestsSectionProps = {
  interests: { strava: string; text: string };
};

export const InterestsSection: React.FC<InterestsSectionProps> = ({ interests }) => (
  <div className="p-4 border rounded-xl">
    <h3 className="text-lg font-semibold">Interests</h3>
    <p className="mt-2 opacity-70">
      {interests?.text || "When I'm not coding I like running and exploring trails."}
    </p>
    <div className="mt-3 flex items-center gap-3">
      {interests?.strava ? (
        <a
          href={interests.strava}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 border rounded-md"
        >
          {/* SVG icon omitted for brevity, can be added if needed */}
          View Strava
        </a>
      ) : (
        <span className="text-sm opacity-70">No Strava link provided</span>
      )}
    </div>
  </div>
);
