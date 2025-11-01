import React, { useState } from "react";
import { BLOG_POSTS } from "../api/cakeData";
import { Calendar, User, Tag } from "lucide-react";

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(BLOG_POSTS.map((post) => post.category))];
  const filteredPosts = selectedCategory
    ? BLOG_POSTS.filter((post) => post.category === selectedCategory)
    : BLOG_POSTS;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Cake Tips & Benefits</h1>
          <p className="text-rose-100 text-lg">
            Learn about our favorite topics, baking tips, and cake care essentials
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Filter by Category</h2>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === null
                    ? "bg-rose-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Posts
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    selectedCategory === category
                      ? "bg-rose-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-r from-rose-100 to-pink-100 h-48 flex items-center justify-center">
                  <div className="text-6xl">📝</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      {post.author}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-sm bg-rose-100 text-rose-700 px-3 py-1 rounded-full">
                      <Tag size={14} />
                      {post.category}
                    </span>
                    <button className="text-rose-600 hover:text-rose-700 font-semibold">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Full Post View (Expandable) */}
          <div className="mt-16 space-y-16 border-t-2 border-gray-200 pt-16">
            {filteredPosts.map((post) => (
              <article key={`full-${post.id}`} className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h2>
                <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8 pb-8 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={18} />
                    <span>By {post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag size={18} />
                    <span>{post.category}</span>
                  </div>
                </div>
                <div className="prose prose-lg text-gray-700 max-w-none space-y-4">
                  {post.content.split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Have More Questions?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Can't find the answer you're looking for? Reach out to us directly for personalized assistance.
          </p>
          <button className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
