export default async function Page({ params }) {
  const { slug } = await params;
  console.log(slug);
  return (
    <div>
      <h2>This is my first blog post</h2>
    </div>
  );
}
