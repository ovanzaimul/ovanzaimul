import fs from "fs";
import matter from "gray-matter";
import path from "path";

interface FrontMatter {
  title: string;
  publish_date: string;
}

interface PostData {
  frontMatter: FrontMatter;
  slug: string;
  fileName: string;
}

const postsDirectory = path.join(process.cwd(), "posts");

export default function getPostData() {
  const posts = fs.readdirSync(postsDirectory);

  return posts.map((post) => {
    const str = fs.readFileSync(`${postsDirectory}/${post}`);
    const { data } = matter(str);

    return {
      frontMatter: data,
      slug: post.replace(/\.(md|mdx)$/, ""),
      fileName: post,
    } as PostData;
  });
}
