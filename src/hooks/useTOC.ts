import { useEffect, useState } from "react";
import { slugify } from "@/lib/slugify";

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function useTOC() {
  const [toc, setTOC] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll("h1, h2, h3"),
    ) as HTMLElement[];

    const items: TOCItem[] = headings.map((el) => {
      const text = el.innerText;
      const id = slugify(text);
      const level = Number(el.tagName.replace("H", ""));
      return { id, text, level };
    });

    setTOC(items);

    // Scrollspy observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -70% 0px", // trigger when heading is near top
        threshold: 0,
      },
    );

    headings.forEach((h) => observer.observe(h));

    return () => {
      headings.forEach((h) => observer.unobserve(h));
    };
  }, []);

  return { toc, activeId };
}
