import fs from "node:fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export default function getPostBySlug(slug: string) {
  const str = fs.readFileSync(`${postsDirectory}/${slug}.mdx`);
  const { data } = matter(str);
  return data;
}
