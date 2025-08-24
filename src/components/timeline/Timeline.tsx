import { useState, useMemo } from "react";
import { yyyymmToDayAII } from "@/lib/stringToDate";

/**
 * Timeline
 *
 * - Left column: scrollable list of timeline items (date + title)
 *   - Items are keyboard-focusable (button) and show an enlarged title on hover/focus
 * - Right column: detail card styled similar to the About page cards
 * - Responsive: stacks vertically on small screens
 */

export function Timeline() {
  const data = import.meta.glob("/content/timeline/timeline.json", {
    eager: true,
  })["/content/timeline/timeline.json"].default;
  const keys = useMemo(() => Object.keys(data).reverse(), []);
  const [hoverKey, setHoverKey] = useState(keys[0] ?? null);

  if (!hoverKey) return null;

  return (
    <section
      aria-labelledby="timeline-heading"
      className="max-w-6xl mx-auto px-4 py-8"
    >
      <h2 id="timeline-heading" className="text-2xl font-bold mb-6">
        Timeline
      </h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: list */}
        <div className="lg:w-1/3 overflow-y-auto max-h-[60vh] p-2 pt-4">
          <div className="space-y-3">
            {keys.map((key) => {
              const item = data[key] ?? {};
              const isActive = key === hoverKey;
              return (
                <div key={key} className="relative p-2 border-l-1">
                  <div className="timeline-disc"></div>
                  <div className="text-xs text-gray-400 ">
                    {yyyymmToDayAII(key)}{" "}
                  </div>

                  <button
                    onMouseEnter={() => setHoverKey(key)}
                    onFocus={() => setHoverKey(key)}
                    onClick={() => setHoverKey(key)}
                    className={`w-full text-left transition-all duration-200 px-3 py-2 rounded-md border
                      ${
                        isActive
                          ? "bg-white/5 border-gray-700 text-xl lg:text-2xl font-medium"
                          : "bg-transparent border-transparent text-sm lg:text-base opacity-80 hover:bg-white/2"
                      }`}
                    aria-pressed={isActive}
                  >
                    {item.title}
                    {item.subtitle && (
                      <div className="text-xs opacity-60 mt-1">
                        {item.subtitle}
                      </div>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: detail */}
        <div className="lg:w-2/3 flex flex-col gap-4">
          <div className="p-6 border rounded-xl bg-white/2">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">
                  {data[hoverKey].title}
                </h3>
                {data[hoverKey].subtitle && (
                  <div className="text-sm opacity-70 mt-1">
                    {data[hoverKey].subtitle}
                  </div>
                )}
                {data[hoverKey].role && (
                  <div className="text-xs mt-2 inline-block px-2 py-1 border rounded-md opacity-80">
                    {data[hoverKey].role}
                  </div>
                )}
              </div>

              {/* small meta column */}
              <div className="text-sm opacity-70">
                <div>{yyyymmToDayAII(hoverKey)}</div>
                {data[hoverKey].location && (
                  <div className="mt-1">{data[hoverKey].location}</div>
                )}
              </div>
            </div>

            <div className="mt-4 prose prose-sm lg:prose-base max-w-none text-gray-200">
              {data[hoverKey].description || (
                <em className="opacity-60">No description provided.</em>
              )}
            </div>

            {/* optional tags / assets */}
            <div className="mt-4 flex flex-wrap gap-2">
              {(data[hoverKey].tags || []).map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 border rounded-full opacity-90"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* optional links */}
            <div className="mt-4 flex flex-wrap gap-3">
              {data[hoverKey].link && (
                <a
                  href={data[hoverKey].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 border rounded-md"
                >
                  View project
                </a>
              )}
              {data[hoverKey].repo && (
                <a
                  href={data[hoverKey].repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 border rounded-md"
                >
                  View repo
                </a>
              )}
            </div>
          </div>

          {/* Lower row: smaller cards for related items (certs / quick stats) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 border rounded-xl">
              <h4 className="text-sm font-semibold">Quick facts</h4>
              <div className="mt-2 text-sm opacity-80">
                {data[hoverKey].quickFacts ? (
                  <ul className="list-inside list-disc">
                    {data[hoverKey].quickFacts.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="opacity-60">No quick facts available.</div>
                )}
              </div>
            </div>

            <div className="p-4 border rounded-xl">
              <h4 className="text-sm font-semibold">Related</h4>
              <div className="mt-2 text-sm opacity-80">
                {(data[hoverKey].related || []).length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {data[hoverKey].related.map((r) => (
                      <span
                        key={r}
                        className="px-2 py-1 border rounded-md text-xs"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="opacity-60">—</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
