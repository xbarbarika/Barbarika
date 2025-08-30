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

const rwaBlogs: BlogPost[] = [
  {
    slug: 'rwa-intro',
    title: 'Introduction to Real World Asset Tokenization',
    excerpt: 'Discover how blockchain is transforming traditional assets through tokenization.',
    date: 'Aug 20, 2025',
    author: 'Barbarika Labs',
    readTime: '4 min read',
    image: '/hero.png',
    category: 'Finance'
  },
  {
    slug: 'rwa-treasury-bond',
    title: 'How Priya from Pune Bought a Piece of a US Treasury Bond',
    excerpt: 'Discover how blockchain enabled global investment in US Treasury bonds with just $50.',
    date: 'Sep 3, 2025',
    author: 'Prince Bhesaniya',
    readTime: '5 min read',
    image: '/hero.png',
    category: 'Finance'
  },
  {
    slug: 'rwa-real-world-examples',
    title: 'Real World Examples of RWAs: 2024-2025 (From Gold to Green Finance)',
    excerpt: 'Explore real-world examples of tokenized assets transforming global finance in 2024-2025.',
    date: 'Sep 10, 2025',
    author: 'Prince Bhesaniya',
    readTime: '6 min read',
    image: '/hero.png',
    category: 'Finance'
  },
  {
    slug: 'tokenization-made-simple',
    title: 'Tokenization Made Simple: How Real Things Become Digital Assets You Can Own',
    excerpt: 'A beginner-friendly guide to understanding how real-world assets are transformed into digital tokens.',
    date: 'Sep 17, 2025',
    author: 'Prince Bhesaniya',
    readTime: '5 min read',
    image: '/hero.png',
    category: 'Education'
  },
  {
    slug: 'blockchain-rwa-backbone',
    title: 'Why Blockchain is the Backbone of Real World Assets (RWAs)',
    excerpt: 'Understanding the critical role of blockchain technology in enabling the tokenization of real-world assets.',
    date: 'Sep 24, 2025',
    author: 'Prince Bhesaniya',
    readTime: '5 min read',
    image: '/hero.png',
    category: 'Technology'
  },
  {
    slug: 'rwa-beginners-guide',
    title: 'Real World Assets: The Beginner\'s Gateway to the Next Financial Evolution',
    excerpt: 'Explore how Real World Assets are transforming finance through blockchain technology and tokenization.',
    date: 'Aug 27, 2025',
    author: 'Prince Bhesaniya',
    readTime: '6 min read',
    image: '/hero.png',
    category: 'Finance'
  },
  {
    slug: 'fractional-ownership-rwa',
    title: 'Owning a Piece of the World: How Fractional Ownership Works in RWAs',
    excerpt: 'Discover how fractional ownership is democratizing access to high-value assets through blockchain technology.',
    date: 'Sep 25, 2025',
    author: 'Prince Bhesaniya',
    readTime: '7 min read',
    image: '/hero.png',
    category: 'Finance'
  },
  {
    slug: 'rwa-platforms-powering-hype',
    title: 'Who\'s Powering RWAs? A Look at the Platforms Behind the Hype',
    excerpt: 'Explore the key platforms and infrastructure providers making RWA tokenization possible.',
    date: 'Sep 26, 2025',
    author: 'Prince Bhesaniya',
    readTime: '5 min read',
    image: '/hero.png',
    category: 'Technology'
  },
  {
    slug: 'rwa-regulations-adoption',
    title: 'The Rulebook: Regulations Shaping RWA Adoption',
    excerpt: 'Understanding the regulatory landscape and its impact on Real World Asset tokenization.',
    date: 'Sep 27, 2025',
    author: 'Prince Bhesaniya',
    readTime: '6 min read',
    image: '/hero.png',
    category: 'Finance'
  }
];

const RWABlogPage = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const openBlog = (blog: BlogPost) => {
    router.push(`/company-file/blog/rwa/${blog.slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200 relative">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-black/90 to-yellow-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-green-500/5 via-transparent to-yellow-500/5" />
      </div>
      
      <Navbar />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <div className="relative">
        <div className="w-full">
          <div className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 xl:px-24">
            <div className="max-w-6xl mx-auto text-center">
              <button
                onClick={() => router.push('/company-file/blog')}
                className="mb-8 flex items-center text-green-400 hover:text-green-300 transition-colors mx-auto"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </button>
              
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-2" style={{
                fontFamily: 'var(--font-tourney), sans-serif',
                background: 'linear-gradient(90deg, #10B981 0%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                lineHeight: '1.2',
                wordBreak: 'keep-all',
                hyphens: 'manual',
                overflowWrap: 'break-word',
                whiteSpace: 'normal'
              }}>
                RWA Blog Series
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4" style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                lineHeight: '1.6'
              }}>
                Explore how Real World Assets are being tokenized and brought onto blockchain networks.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <section className="relative py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rwaBlogs.map((blog, index) => (
              <div
                key={index}
                className="relative group bg-gray-900/60 rounded-xl overflow-hidden border border-gray-800/60 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:border-green-500/50 hover:scale-[1.02] hover:ring-1 hover:ring-green-500/30"
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
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm text-green-300 bg-green-900/50">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 relative z-10">
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <span className="group-hover:text-green-300 transition-colors">{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-gray-300">{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-200 transition-colors line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-green-400 group-hover:text-green-300 transition-colors">
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

export default RWABlogPage;
