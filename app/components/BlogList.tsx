import Link from "next/link";
import getPostNames from "../utils/getPostData";

export default function BlogList() {
  const blogsData = getPostNames();
  return (
    <div>
      <ul>
        {blogsData.map(({ title, slug }) => (
          <li key={title}>
            <Link href={`/blog/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
