import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PaperCardProps = {
  slug: string;
  title: string;
  date: string;
  authors?: string[];
  thumbnail?: string;
  summary: string;
  tags?: string[];
};

export function PaperCard({
  slug,
  title,
  date,
  authors = [],
  thumbnail,
  summary,
  tags = [],
}: PaperCardProps) {
  return (
    <a href={`/papers/${slug}`}>
      <Card className="hover:shadow-lg transition">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="rounded-t-xl w-full h-40 object-cover"
          />
        ) : (
          <div className="h-40 flex items-center justify-center bg-gradient-to-r from-gray-500 to-gray-700 text-white text-xl font-bold">
            {title[0]}
          </div>
        )}
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <p className="text-sm opacity-60">{date}</p>
          <p className="text-sm opacity-80">By {authors.join(", ")}</p>
        </CardHeader>
        <CardContent>
          <p className="text-sm opacity-80">{summary}</p>
          {tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-200 px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </a>
  );
}
