'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  category: string;
}

const aiBlogs: BlogPost[] = [
  {
    slug: 'ai-blockchain-intro',
    title: 'Day 1: Introduction and Basics',
    excerpt: 'Welcome to the Journey! Starting something new can be exciting and sometimes a bit overwhelming.',
    date: 'Aug 7, 2025',
    author: 'Barbarika Labs',
    readTime: '2 min read',
    image: '/hero.png',
    category: 'Technology'
  },
  {
    slug: 'AI-deep-dive',
    title: 'Day 2: Deep Dive: What is AI?',
    excerpt: 'What is AI? Hey there, curious mind! Today, let&apos;s explore Artificial Intelligence (AI) using a warm, natural story.',
    date: 'Aug 8, 2025',
    author: 'Barbarika Labs',
    readTime: '5 min read',
    image: '/hero.png',
    category: 'Technology'
  },
  {
    slug: 'blockchain-fundamentals',
    title: 'Day 3: Deep Dive: What is Blockchain?',
    excerpt: 'Discover how blockchain technology works beyond digital currencies.',
    date: 'Aug 9, 2025',
    author: 'Barbarika Labs',
    readTime: '3 min read',
    image: '/hero.png',
    category: 'Technology'
  },
  {
    slug: 'ai-blockchain-synergy',
    title: 'Day 4: Why Combine AI and Blockchain?',
    excerpt: 'Learn how AI and blockchain complement each other.',
    date: 'Aug 10, 2025',
    author: 'Barbarika Labs',
    readTime: '4 min read',
    image: '/hero.png',
    category: 'Technology'
  },
  {
    slug: 'real-world-applications',
    title: 'Day 5: Real-World Examples',
    excerpt: 'Examine real companies and projects using AI + Blockchain.',
    date: 'Aug 11, 2025',
    author: 'Barbarika Labs',
    readTime: '5 min read',
    image: '/hero.png',
    category: 'Technology'
  },
  {
    slug: 'benefits-businesses-society',
    title: 'Day 6: Benefits for Businesses and Society',
    excerpt: 'Discover how AI + Blockchain creates value for organizations and communities.',
    date: 'Aug 12, 2025',
    author: 'Barbarika Labs',
    readTime: '4 min read',
    image: '/hero.png',
    category: 'Technology'
  },
  {
    slug: 'challenges-limitations',
    title: 'Day 7: Challenges and Limitations',
    excerpt: 'Understanding the obstacles and constraints in AI + Blockchain adoption.',
    date: 'Aug 13, 2025',
    author: 'Barbarika Labs',
    readTime: '4 min read',
    image: '/hero.png',
    category: 'Technology'
  },
  {
    slug: 'recent-developments-news',
    title: 'Day 8: Recent Developments and News',
    excerpt: 'Stay updated with the latest breakthroughs and industry updates.',
    date: 'Aug 14, 2025',
    author: 'Barbarika Labs',
    readTime: '3 min read',
    image: '/hero.png',
    category: 'Technology'
  },
  {
    slug: 'future-trends',
    title: 'Day 9: Future Trends',
    excerpt: 'Explore what&apos;s coming next in the AI + Blockchain landscape.',
    date: 'Aug 15, 2025',
    author: 'Barbarika Labs',
    readTime: '5 min read',
    image: '/hero.png',
    category: 'Technology'
  },
  {
    slug: 'qa-highlights-recap',
    title: 'Day 10: Q&A or Highlights (Recap)',
    excerpt: 'A comprehensive review and answers to common questions.',
    date: 'Aug 16, 2025',
    author: 'Barbarika Labs',
    readTime: '3 min read',
    image: '/hero.png',
    category: 'Technology'
  },
  {
    slug: 'practical-tips-beginners',
    title: 'Day 11: Practical Tips for Beginners',
    excerpt: 'Actionable advice for those starting their AI + Blockchain journey.',
    date: 'Aug 17, 2025',
    author: 'Barbarika Labs',
    readTime: '4 min read',
    image: '/hero.png',
    category: 'Technology'
  },
  {
    slug: 'case-studies',
    title: 'Day 12: Case Studies',
    excerpt: 'In-depth analysis of successful AI + Blockchain implementations.',
    date: 'Aug 18, 2025',
    author: 'Barbarika Labs',
    readTime: '6 min read',
    image: '/hero.png',
    category: 'Technology'
  },
  {
    slug: 'interviews-expert-opinions',
    title: 'Day 13: Interviews or Expert Opinions',
    excerpt: 'Insights from industry leaders and practitioners.',
    date: 'Aug 19, 2025',
    author: 'Barbarika Labs',
    readTime: '5 min read',
    image: '/hero.png',
    category: 'Technology'
  },
  {
    slug: 'writing-review-day',
    title: 'Day 14: Writing and Review Day',
    excerpt: 'Reflecting on our journey and preparing for the final publication.',
    date: 'Aug 20, 2025',
    author: 'Barbarika Labs',
    readTime: '2 min read',
    image: '/hero.png',
    category: 'Technology'
  },
  {
    slug: 'final-polish-publish',
    title: 'Day 15: Final Polish and Publish!',
    excerpt: 'The culmination of our 15-day journey into AI + Blockchain.',
    date: 'Aug 21, 2025',
    author: 'Barbarika Labs',
    readTime: '3 min read',
    image: '/hero.png',
    category: 'Technology'
  }
];

const AIBlogPage = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const openBlog = (blog: BlogPost) => {
    router.push(`/company-file/blog/ai/${blog.slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200 relative">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/90 to-red-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-red-500/5" />
      </div>
      
      <Navbar />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <div className="relative">
        <div className="w-full">
          <div className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 xl:px-24">
            <div className="max-w-6xl mx-auto text-center">
              <button
                onClick={() => router.push('/company-file/blog')}
                className="mb-8 flex items-center text-blue-400 hover:text-blue-300 transition-colors mx-auto"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </button>
              
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-2" style={{
                fontFamily: 'var(--font-tourney), sans-serif',
                background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                lineHeight: '1.2',
                wordBreak: 'keep-all',
                hyphens: 'manual',
                overflowWrap: 'break-word',
                whiteSpace: 'normal'
              }}>
                AI + Blockchain Series
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4" style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                lineHeight: '1.6'
              }}>
                Explore the fascinating intersection of Artificial Intelligence and Blockchain technology.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <section className="relative py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiBlogs.map((blog, index) => (
              <div
                key={index}
                className="relative group bg-gray-900/60 rounded-xl overflow-hidden border border-gray-800/60 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/50 hover:scale-[1.02] hover:ring-1 hover:ring-blue-500/30"
                onClick={() => openBlog(blog)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openBlog(blog)}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm text-blue-300 bg-blue-900/50">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 relative z-10">
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <span className="group-hover:text-blue-300 transition-colors">{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-gray-300">{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-200 transition-colors line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span>Read more</span>
                    <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default AIBlogPage;
