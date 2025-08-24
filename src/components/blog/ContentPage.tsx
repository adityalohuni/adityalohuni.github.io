import { useTOC } from "@/hooks/useTOC";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ReadingProgress } from "@/components/blog/ReadingProgress";

export function ContentPage({ children }: { children: React.ReactNode }) {
  const { toc, activeId } = useTOC();

  return (
    <>
      {/* Progress bar */}
      <ReadingProgress targetId="content-root" />

      <div id="content-root" className="flex gap-8 max-w-6xl mx-auto px-4 py-8">
        <article className="prose prose-lg max-w-none dark:prose-invert flex-1">
          {children}
        </article>
        {toc.length > 0 && <TableOfContents toc={toc} activeId={activeId} />}
      </div>
    </>
  );
}
