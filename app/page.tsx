import { getAllPosts } from "@/lib/posts";
import { BlogList } from "@/components/BlogList";


export default function Home() {
  const posts = getAllPosts();
  
  return (
    <main className="text-center">
      <h1 className="text-6xl font-light tracking-tight text-gray-900 mb-16">
        My Blog
      </h1>
      <BlogList posts={posts} />
    </main>
  );
}
