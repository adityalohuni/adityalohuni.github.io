import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type BlogCardProps = {
  slug: string;
  title: string;
  date: string;
  thumbnail?: string;
  summary: string;
};

export function BlogCard({
  slug,
  title,
  date,
  thumbnail,
  summary,
}: BlogCardProps) {
  return (
    <Link to={`/blog/${slug}`}>
      <Card className="hover:shadow-lg transition">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="rounded-t-xl w-full h-40 object-cover"
          />
        ) : (
          <div className="h-40 flex items-center justify-center thumbnail-gradient text-xl font-bold p-10">
            {title}
          </div>
        )}
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <p className="text-sm opacity-60">{date}</p>
        </CardHeader>
        <CardContent>
          <p className="text-sm opacity-80">{summary}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
