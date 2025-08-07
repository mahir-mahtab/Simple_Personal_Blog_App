import Link from "next/link";

interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
}

interface BlogListProps {
  posts: Post[];
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article key={post.id} className="group text-left">
          <Link
            href={`/blog/${post.id}`}
            className="block hover:opacity-80 transition-opacity duration-200"
          >
            <h2 className="text-2xl font-light text-gray-900 mb-2 group-hover:text-gray-600">
              {post.title}
            </h2>
            <p className="text-gray-600 text-sm mb-2">{post.date}</p>
            <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
          </Link>
        </article>
      ))}
    </div>
  );
}
