'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';

interface BlogSeries {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  postCount: number;
}

const blogSeries: BlogSeries[] = [
  {
    slug: 'rwa',
    title: 'RWA (Real World Assets)',
    description: 'Explore how Real World Assets are being tokenized and brought onto blockchain networks.',
    category: 'Finance',
    image: '/hero.png',
    postCount: 9
  },
  {
    slug: 'ai',
    title: 'AI + Blockchain',
    description: 'Explore the fascinating intersection of Artificial Intelligence and Blockchain technology.',
    category: 'Technology',
    image: '/hero.png',
    postCount: 5
  },
  {
    slug: 'zk',
    title: 'Zero Knowledge (ZK)',
    description: 'Discover the world of Zero Knowledge proofs and privacy-preserving technologies.',
    category: 'Cryptography',
    image: '/hero.png',
    postCount: 3
  }
];

const Blog = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const openSeries = (series: BlogSeries) => {
    router.push(`/company-file/blog/${series.slug}`);
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
          <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 xl:px-24">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2" style={{
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
                Insights & Updates
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto mb-6 sm:mb-8 px-2 sm:px-4" style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                lineHeight: '1.6'
              }}>
                Discover the latest trends, insights, and stories from our team of experts.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Series Cards */}
        <section className="relative py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogSeries.map((series, index) => (
              <div
                key={index}
                className={`relative group bg-gray-900/60 rounded-xl overflow-hidden border border-gray-800/60 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/50 hover:scale-[1.02] hover:ring-1 hover:ring-blue-500/30`}
                onClick={() => openSeries(series)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openSeries(series)}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={series.image}
                    alt={series.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${series.category === 'Technology' ? 'text-blue-300 bg-blue-900/50' :
                        series.category === 'Cryptography' ? 'text-purple-300 bg-purple-900/50' :
                          'text-green-300 bg-green-900/50'}`}>
                      {series.category}
                    </span>
                    <div className="mt-2">
                      <span className="inline-block px-2 py-1 text-xs text-gray-300 bg-gray-800/70 rounded">
                        {series.postCount} posts
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 relative z-10">
                  <h3 className={`text-xl font-bold mb-2 transition-colors ${series.category === 'Technology' ? 'text-white group-hover:text-blue-300 bg-gradient-to-r from-blue-300 to-red-300 bg-clip-text text-transparent' :
                      series.category === 'Cryptography' ? 'text-white group-hover:text-purple-300 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent' :
                        'text-white group-hover:text-green-300 bg-gradient-to-r from-green-300 to-yellow-300 bg-clip-text text-transparent'}`}>
                    {series.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-200 transition-colors line-clamp-3">
                    {series.description}
                  </p>
                  <div className={`flex items-center text-sm transition-colors ${series.category === 'Technology' ? 'text-blue-400 group-hover:text-blue-300' :
                      series.category === 'Cryptography' ? 'text-purple-400 group-hover:text-purple-300' :
                        'text-green-400 group-hover:text-green-300'}`}>
                    <span>Explore Series</span>
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

export default Blog;