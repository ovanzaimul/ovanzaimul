import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export default function getPostData() {
  const posts = fs.readdirSync(postsDirectory);

  return posts.map((post) => {
    const str = fs.readFileSync(`${postsDirectory}/${post}`);
    const { data } = matter(str);

    return {
      title: data.title,
      slug: post.replace(/\.(md|mdx)$/, ""),
      fileName: post,
    };
  });
}
