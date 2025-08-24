// components/ReadingProgress.tsx
import { useEffect, useState } from "react";

export function ReadingProgress({ targetId }: { targetId: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const handleScroll = () => {
      const { height } = target.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const offsetTop = target.offsetTop;
      const total = height - windowHeight;
      const current = Math.min(
        Math.max(scrollTop - offsetTop, 0),
        total > 0 ? total : 1,
      );

      setProgress((current / (total || 1)) * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetId]);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
      <div
        className="h-full bg-blue-600 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
