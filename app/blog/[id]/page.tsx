
import { getPostById } from '@/lib/posts';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function Post({ params }: { params: { id: string } }) {
  // Next.js 15 dynamic params must be awaited
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    return (
      <div className="text-center">
        <h1 className="text-4xl font-light text-gray-900 mb-4">Post not found</h1>
        <p className="text-gray-600">The post you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto">
      {/* Back button */}
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-8 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
        Back to blog
      </Link>
      
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-light text-gray-900 mb-4">{post.title}</h1>
        <p className="text-gray-600">{post.date}</p>
      </header>
      
      <div 
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: post.content || '' }}
      />
    </article>
  );
}
