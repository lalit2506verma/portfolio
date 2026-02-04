import React from 'react'
import BlogCard, {type Blog} from './BlogCard'

const BlogSection: React.FC = () => {
  const blogPosts: Blog[] = [
    {
      id: "1",
      date: "FEB 10, 2024",
      category: "BACKEND DEVELOPMENT",
      readTime: "7 MIN READ",
      title: "Designing Secure REST APIs with Spring Boot and JWT",
      description:
        "A practical guide to building secure REST APIs using Spring Boot and JWT authentication, covering protected vs public endpoints and common security pitfalls.",
      href: "#",
    },
    {
      id: "2",
      date: "JAN 22, 2024",
      category: "JAVA",
      readTime: "6 MIN READ",
      title: "Handling Exceptions and Errors in Spring Boot Applications",
      description:
        "Explains global exception handling using @ControllerAdvice, custom error responses, and best practices for building reliable backend services.",
      href: "#",
    },
    {
      id: "3",
      date: "DEC 18, 2023",
      category: "SYSTEM DESIGN",
      readTime: "8 MIN READ",
      title:
        "Building Scalable Backend Systems: Lessons from Enterprise Applications",
      description:
        "Insights into designing scalable backend systems, focusing on clean architecture, API design, monitoring, and handling growth in real-world enterprise environments.",
      href: "#",
    },
  ];

  return (
    <div className="lg:col-span-7 flex flex-col gap-6">
      <div className="flex items-center justify-between border-b-2 border-glass-border pb-4 mb-2">
        <h2 className="text-2xl text-white tracking-tight font-bold">
          System Logs
        </h2>

        <a href="" target="_blank" className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
          View Archive
          <span className="material-symbols-outlined text-sm!">arrow_forward</span>
        </a>
      </div>

      {blogPosts.map((post) => (
        <BlogCard key={post.id} post={post}/>
      ))}
    </div>
  )
}

export default BlogSection