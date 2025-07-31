"use client";

import Link from "next/link";
import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react";
import { useState } from "react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      title:
        "Building Scalable React Applications: Best Practices and Patterns",
      excerpt:
        "Learn how to structure and organize your React applications for scalability, maintainability, and team collaboration. We&apos;ll explore component architecture, state management, and performance optimization techniques.",
      content:
        "In this comprehensive guide, we dive deep into the best practices for building React applications that can scale with your team and requirements...",
      date: "January 15, 2025",
      readTime: "8 min read",
      slug: "building-scalable-react-apps",
      category: "React",
      tags: ["React", "JavaScript", "Architecture", "Best Practices"],
      featured: true,
    },
    {
      title: "Next.js Performance Optimization: Tips and Tricks",
      excerpt:
        "Discover advanced techniques to optimize your Next.js applications for better performance and user experience. From image optimization to code splitting.",
      content:
        "Performance is crucial for modern web applications. Let&apos;s explore how to make your Next.js apps lightning fast...",
      date: "January 8, 2025",
      readTime: "6 min read",
      slug: "nextjs-performance-optimization",
      category: "Next.js",
      tags: ["Next.js", "Performance", "Web Vitals", "Optimization"],
      featured: true,
    },
    {
      title: "Understanding Go Concurrency: Goroutines and Channels",
      excerpt:
        "A comprehensive guide to Go&apos;s concurrency model. Learn how to use goroutines and channels effectively to build concurrent applications.",
      content:
        "Go&apos;s approach to concurrency is one of its strongest features. Let&apos;s explore how it works...",
      date: "December 28, 2024",
      readTime: "10 min read",
      slug: "go-concurrency-guide",
      category: "Go",
      tags: ["Go", "Concurrency", "Goroutines", "Channels"],
      featured: false,
    },
    {
      title: "Modern CSS Techniques for Better Layouts",
      excerpt:
        "Explore modern CSS features like Grid, Flexbox, and Container Queries to create responsive and maintainable layouts.",
      content:
        "CSS has evolved tremendously. Let&apos;s look at the modern techniques that can improve your layouts...",
      date: "December 20, 2024",
      readTime: "7 min read",
      slug: "modern-css-techniques",
      category: "CSS",
      tags: ["CSS", "Grid", "Flexbox", "Responsive Design"],
      featured: false,
    },
    {
      title: "Building RESTful APIs with Laravel",
      excerpt:
        "Learn how to create robust and scalable RESTful APIs using Laravel. We&apos;ll cover authentication, validation, and best practices.",
      content:
        "Laravel provides excellent tools for building APIs. Let&apos;s explore how to use them effectively...",
      date: "December 12, 2024",
      readTime: "9 min read",
      slug: "laravel-restful-apis",
      category: "Laravel",
      tags: ["Laravel", "PHP", "API", "Backend"],
      featured: false,
    },
    {
      title: "JavaScript ES2024: New Features and Updates",
      excerpt:
        "Discover the latest features in JavaScript ES2024 and how they can improve your code quality and developer experience.",
      content:
        "JavaScript continues to evolve with new features that make development more efficient...",
      date: "December 5, 2024",
      readTime: "5 min read",
      slug: "javascript-es2024-features",
      category: "JavaScript",
      tags: ["JavaScript", "ES2024", "Features", "Modern JS"],
      featured: false,
    },
  ];

  const categories = [
    "All",
    "React",
    "Next.js",
    "JavaScript",
    "Go",
    "Laravel",
    "CSS",
  ];

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="pt-16 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8 slide-up">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--card)] border border-[var(--border)] shadow-[var(--shadow-lg)] mb-6">
              <Tag className="w-10 h-10 text-[var(--accent)]" />
            </div>
            <div className="space-y-4">
              <h1 className="heading-1">Blog</h1>
              <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
                Thoughts, tutorials, and insights from my development journey.
                Sharing knowledge about modern web development, programming
                languages, and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section>
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8">Featured Articles</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredPosts.map((post, index) => (
                <article key={index} className="card card-interactive">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="px-2 py-1 bg-[var(--accent)] text-[var(--accent-foreground)] rounded-md font-medium">
                          Featured
                        </span>
                        <span className="px-2 py-1 bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded-md">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="heading-3 group-hover:text-[var(--accent)] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-[var(--muted-foreground)] leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-2 py-1 bg-[var(--muted)] text-[var(--muted-foreground)] rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section>
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="space-y-6">
              <h2 className="heading-2">All Articles</h2>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-[var(--secondary)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-colors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-[var(--accent)] text-[var(--accent-foreground)]"
                        : "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--muted)]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section>
        <div className="max-w-4xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="space-y-8">
              {filteredPosts.map((post, index) => (
                <article key={index} className="card group">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="px-2 py-1 bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded-md">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="heading-3 group-hover:text-[var(--accent)] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-[var(--muted-foreground)] leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-[var(--accent)] font-medium text-sm group-hover:gap-2 transition-all">
                          Read more
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                      <div className="flex gap-2 flex-wrap pt-2 border-t border-[var(--border)]">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-2 py-1 bg-[var(--muted)] text-[var(--muted-foreground)] rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="card text-center">
              <div className="space-y-4">
                <Search className="w-12 h-12 text-[var(--muted-foreground)] mx-auto" />
                <h3 className="heading-3">No articles found</h3>
                <p className="text-[var(--muted-foreground)]">
                  Try adjusting your search terms or filters to find what
                  you&apos;re looking for.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section>
        <div className="max-w-2xl mx-auto">
          <div className="card text-center">
            <h2 className="heading-2 mb-4">Stay Updated</h2>
            <p className="text-large mb-8">
              Get notified when I publish new articles. No spam, unsubscribe at
              any time.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[var(--secondary)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-colors"
              />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
