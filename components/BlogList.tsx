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
    <div className="space-y-4 sm:space-y-8">
      {posts.map((post) => (
        <article
          key={post.id}
          className="group relative text-left py-4 border-b border-gray-100 last:border-b-0"
        >
          <Link
            href={`/blog/${post.id}`}
            className="block -mx-2 px-2 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/60 hover:backdrop-blur-sm hover:ring-1 hover:ring-black/5 hover:shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 pt-2">
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full transition-all duration-300 group-hover:bg-gray-500 group-hover:scale-110"></div>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-light text-gray-900 mb-2 transition-colors duration-300 group-hover:text-gray-800">
                  {post.title}
                </h2>
                <div className="h-px w-0 bg-gray-200 transition-all duration-300 group-hover:w-16" />
                <p className="text-gray-500 text-sm mt-3 mb-3 font-light">
                  {post.date}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-3 flex items-center gap-1 opacity-0 translate-x-0 group-hover:opacity-70 group-hover:translate-x-0.5 transition-all duration-300">
                  <span className="text-sm text-gray-500 font-light">Read more</span>
                  <span className="text-sm text-gray-400">→</span>
                </div>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
