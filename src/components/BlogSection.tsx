import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "@/data/blogData";

const BlogSection: React.FC = () => {
  const postsToDisplay = blogData.slice(0, 3);

  return (
    <section id="blog" className="container py-12 md:py-16 lg:py-20">
      <h2 className="section-title reveal text-center mb-10 md:mb-12">Blog & Tipy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {postsToDisplay.map((post) => (
          <article key={post.id} className="card reveal flex flex-col h-full hover:scale-[1.02] transition-transform duration-300">
            <Link to={`/blog/${post.slug}`} className="block aspect-video rounded-lg overflow-hidden mb-4 bg-gray-100 group">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
            </Link>
            <div className="text-sm text-gray-500 mb-2">{post.date}</div>
            <h3 className="text-xl font-semibold mb-2">
              <Link to={`/blog/${post.slug}`} className="hover:text-marek-cta transition-colors">
                {post.title}
              </Link>
            </h3>
            <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
            <div className="mt-auto">
              <Link to={`/blog/${post.slug}`} className="text-marek-cta font-medium hover:underline inline-flex items-center">
                Číst více
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
