import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ContentGrid } from "@/components/blog/ContentGrid";
import { BlogCard } from "@/components/blog/BlogCard";
import { getBlogs } from "@/lib/content";

export function BlogPage() {
  const blogs = getBlogs();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Blog</h2>
        <ContentGrid>
          {blogs.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </ContentGrid>
      </section>
    </ThemeProvider>
  );
}
