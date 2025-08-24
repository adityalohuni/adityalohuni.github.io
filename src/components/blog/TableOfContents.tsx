// components/TableOfContents.tsx
import { type TOCItem } from "@/hooks/useTOC";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";

export function TableOfContents({
  toc,
  activeId,
}: {
  toc: TOCItem[];
  activeId: string | null;
}) {
  const [open, setOpen] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!listRef.current || !activeId) return;
    const activeEl = listRef.current.querySelector(`[data-id="${activeId}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({
        block: "nearest",
        inline: "nearest",
        behavior: "smooth",
      });
    }
  }, [activeId, open]);

  const renderList = () => (
    <ul
      ref={listRef}
      className="space-y-2 text-sm max-h-[70vh] overflow-y-auto pr-2"
    >
      {toc.map((item) => (
        <li
          key={item.id}
          data-id={item.id}
          className={clsx(
            "ml-" + (item.level - 1) * 4,
            activeId === item.id
              ? "text-blue-600 font-semibold"
              : "text-gray-600",
          )}
        >
          <a
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById(item.id);
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              setOpen(false); // close drawer on mobile
            }}
            className="hover:underline"
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="hidden lg:block w-64 sticky top-24 self-start">
        <h2 className="text-lg font-semibold mb-4">On this page</h2>
        {renderList()}
      </nav>

      {/* Mobile drawer */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button size="icon" className="rounded-full shadow-lg">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 flex flex-col">
            <h2 className="text-lg font-semibold mb-4">On this page</h2>
            {renderList()}
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
