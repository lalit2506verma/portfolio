import React from 'react'

export interface Blog{
  id: string;
  date: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
  href: string;
}

interface BlogPostProps{
  post: Blog;
}

const BlogCard: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <article className="rounded-lg p-6 glass-panel group hover:border-primary/50 transition-all duration-300">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
          <span className="text-primary">{post.date}</span>
          <span>•</span>
          <span>{post.category}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-all">
          {post.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          {post.description}
        </p>

        <div className="flex items-center">
          <a href={post.href} className="text-sm font-medium text-white flex items-center gap-2 group-hover:translate-x-1 transition-transform">
            Read Logs{' '}
            <span className="material-symbols-outlined text-base!">
              arrow_right_alt
            </span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;