export type BlogMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  thumbnail?: string;
  tags?: string[];
};

export type PaperMeta = BlogMeta & {
  authors?: string[];
};

export const getBlogs = (): BlogMeta[] => {
  const modules = import.meta.glob("/content/blog/*.mdx", {
    eager: true,
  }) as Record<string, { frontmatter: BlogMeta }>;

  return Object.entries(modules).map(([path, mod]) => {
    const slug = path.split("/").pop()?.replace(".mdx", "") ?? "";
    return { ...mod.frontmatter, slug };
  });
};

export const getPapers = (): PaperMeta[] => {
  const modules = import.meta.glob("/content/papers/*.mdx", {
    eager: true,
  }) as Record<string, { frontmatter: PaperMeta }>;

  return Object.entries(modules).map(([path, mod]) => {
    const slug = path.split("/").pop()?.replace(".mdx", "") ?? "";
    return { ...mod.frontmatter, slug };
  });
};
