import Link from "next/link";
import getPostNames from "../utils/getPostData";

export default function BlogList() {
  const blogsData = getPostNames();
  return (
    <ul className="flex flex-col gap-5">
      {blogsData.map(({ frontMatter, slug }) => (
        <li key={frontMatter.title} className="border">
          <Link href={`/blog/${slug}`}>
            <div>
              <span>{frontMatter?.publish_date}</span>
            </div>
            <h2 className="text-2xl">{frontMatter.title}</h2>
            <p className="dek">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis necessitatibus non molestiae beatae illo earum
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
