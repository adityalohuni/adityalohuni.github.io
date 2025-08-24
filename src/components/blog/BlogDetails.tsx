import { useParams } from "react-router-dom"; // or your router
import { blogModules } from "@/lib/blog";
import { ContentPage } from "@/components/blog/ContentPage";

export function BlogDetail() {
  const { slug } = useParams(); // "2025-01-ai-in-healthcare"
  const key = `/content/blog/${slug}.mdx`;

  const mod = blogModules[key] as any;
  if (!mod) return <p>Not found</p>;

  const MDXContent = mod.default;

  return (
    <ContentPage>
      <MDXContent />
    </ContentPage>
  );
}
