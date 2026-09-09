import getPostData from "@/app/utils/getPostData";

export async function generateStaticParams() {
  const data = getPostData();
  return data.map((d) => ({
    slug: d.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { default: MDXContent } = await import(`@/posts/${slug}.mdx`);

  return (
    <div>
      <MDXContent />
    </div>
  );
}
