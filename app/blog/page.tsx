import BlogList from "../components/BlogList";
import { Squiggly } from "../components/svgs/Squiggly";

export default async function Page() {
  return (
    <div className="mx-5">
      <h1 className="text-4xl inline-block mb-6">
        Things I&apos;ve written down
        <Squiggly />
      </h1>
      <BlogList />
    </div>
  );
}
