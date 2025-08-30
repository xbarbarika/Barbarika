'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';

const BlogPost = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200 relative">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/90 to-red-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-red-500/5" />
      </div>
      
      <Navbar />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <div className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Back Button */}
          <button
            onClick={() => router.push('/company-file/blog/ai')}
            className="mb-8 flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to AI + Blockchain Series
          </button>

          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden rounded-xl mb-8">
            <Image
              src="/hero.png"
              alt="Deep Dive: What is AI?"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center text-sm text-gray-400 mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-900/50 text-blue-300 mr-4">
                Technology
              </span>
              <span>Aug 8, 2025</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
              <span className="mx-2">•</span>
              <span>Barbarika Labs</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{
              fontFamily: 'var(--font-tourney), sans-serif',
              background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Day 2: Deep Dive: What is AI?
            </h1>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-6" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <p className="text-2xl text-gray-200 font-medium mb-10">
                What is AI? Hey there, curious mind! Today, let&apos;s explore Artificial Intelligence (AI) using a warm, natural story.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">What is Artificial Intelligence?</h2>
              
              <p>
                Artificial Intelligence, or AI, is like giving computers a &quot;brain&quot; that can learn and think. 
                Think of it as teaching machines to understand patterns, make decisions, and solve problems 
                just like humans do &mdash; but often much faster and more accurately.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">AI in Everyday Life</h2>
              
              <p>
                You&apos;re probably using AI more than you realize! Here are some familiar examples:
              </p>

              <ul className="space-y-3 text-gray-300 my-6">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">📱</span>
                  <span><strong>Your smartphone&apos;s camera</strong> automatically adjusts settings and recognizes faces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">🛒</span>
                  <span><strong>Online shopping</strong> recommendations (&quot;People who bought this also bought...&quot;)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">🎵</span>
                  <span><strong>Music streaming</strong> services creating personalized playlists</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">🚗</span>
                  <span><strong>GPS navigation</strong> finding the fastest route and avoiding traffic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3">💬</span>
                  <span><strong>Social media</strong> curating your feed and filtering spam</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Types of AI: From Narrow to General</h2>
              
              <p>
                Not all AI is created equal. Think of it like different levels of expertise:
              </p>

              <div className="space-y-4 my-8">
                <div className="bg-blue-900/20 border-l-4 border-blue-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">Narrow AI (What We Have Today)</h4>
                  <p className="text-gray-300">
                    Specialized in specific tasks &mdash; like a chess grandmaster who&apos;s brilliant at chess but can&apos;t cook dinner. 
                    Examples: Siri, Google Translate, Netflix recommendations.
                  </p>
                </div>
                
                <div className="bg-green-900/20 border-l-4 border-green-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-green-300 mb-2">General AI (The Future Goal)</h4>
                  <p className="text-gray-300">
                    AI that can understand, learn, and apply intelligence across any domain &mdash; like a human brain. 
                    This is still theoretical and likely decades away.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Should You Care?</h2>
              
              <p>
                Understanding AI isn&apos;t just about technology &mdash; it&apos;s about understanding the future of work, creativity, 
                and human potential. As AI becomes more integrated into our lives, those who understand it will have 
                significant advantages in their careers and personal lives.
              </p>

              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Tomorrow&apos;s Preview:</h3>
                <p className="text-gray-200">
                  Now that we understand what AI is, tomorrow we&apos;ll explore blockchain technology &mdash; the revolutionary system 
                  that&apos;s changing how we think about trust, ownership, and value exchange. Get ready to discover why blockchain 
                  is much more than just cryptocurrency!
                </p>
              </div>

              <p className="text-lg font-medium text-blue-300 mt-8">
                Keep that curiosity burning &mdash; we&apos;re just getting started! 🔥
              </p>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-800">
            <button
              onClick={() => router.push('/company-file/blog/ai/ai-blockchain-intro')}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous: Day 1 - Introduction and Basics
            </button>
            <button
              onClick={() => router.push('/company-file/blog/ai/blockchain-fundamentals')}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Next: Day 3 - Deep Dive: What is Blockchain?
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
