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
              alt="Deep Dive: What is Blockchain?"
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
              <span>Aug 9, 2025</span>
              <span className="mx-2">•</span>
              <span>3 min read</span>
              <span className="mx-2">•</span>
              <span>Barbarika Labs</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{
              fontFamily: 'var(--font-tourney), sans-serif',
              background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Day 3: Deep Dive: What is Blockchain?
            </h1>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-6" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <p className="text-xl text-gray-200 font-medium mb-8">
                Discover how blockchain technology works beyond digital currencies.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">What is Blockchain?</h2>
              
              <p>
                Blockchain is a revolutionary technology that&apos;s changing how we think about trust, ownership, and data sharing. 
                Think of it as a digital ledger that&apos;s shared across a network of computers, where every transaction is recorded 
                and can&apos;t be altered once confirmed.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">How Does Blockchain Work?</h2>
              
              <p>
                Imagine a chain of digital &quot;blocks,&quot; where each block contains:
              </p>

              <ul className="space-y-3 text-gray-300 my-6">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">📝</span>
                  <span><strong>Transaction data</strong> (who sent what to whom)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">🔗</span>
                  <span><strong>A unique fingerprint</strong> (hash) of the previous block</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">⏰</span>
                  <span><strong>Timestamp</strong> of when the block was created</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Features of Blockchain</h2>
              
              <div className="space-y-4 my-8">
                <div className="bg-blue-900/20 border-l-4 border-blue-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">🔒 Immutability</h4>
                  <p className="text-gray-300">
                    Once data is recorded, it cannot be changed or deleted. This creates a permanent, tamper-proof record.
                  </p>
                </div>
                
                <div className="bg-green-900/20 border-l-4 border-green-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-green-300 mb-2">🌐 Decentralization</h4>
                  <p className="text-gray-300">
                    No single entity controls the network. It&apos;s distributed across many computers worldwide.
                  </p>
                </div>
                
                <div className="bg-purple-900/20 border-l-4 border-purple-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">👁️ Transparency</h4>
                  <p className="text-gray-300">
                    All transactions are visible to everyone on the network, creating trust through openness.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Beyond Cryptocurrency</h2>
              
              <p>
                While Bitcoin made blockchain famous, the technology has countless other applications:
              </p>

              <ul className="space-y-3 text-gray-300 my-6">
                <li><strong>Supply Chain Management:</strong> Track products from factory to consumer</li>
                <li><strong>Voting Systems:</strong> Secure, transparent elections</li>
                <li><strong>Digital Identity:</strong> Self-sovereign identity management</li>
                <li><strong>Smart Contracts:</strong> Automated agreements that execute themselves</li>
                <li><strong>Healthcare Records:</strong> Secure, shareable medical data</li>
              </ul>

              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Tomorrow&apos;s Preview:</h3>
                <p className="text-gray-200">
                  Now that we understand both AI and blockchain individually, tomorrow we&apos;ll explore why combining them 
                  creates something truly powerful. Get ready to see how these technologies complement each other!
                </p>
              </div>

              <p className="text-lg font-medium text-blue-300 mt-8">
                Blockchain is more than just Bitcoin &mdash; it&apos;s the foundation for a more transparent, secure future! 🚀
              </p>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-800">
            <button
              onClick={() => router.push('/company-file/blog/ai/AI-deep-dive')}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous: Day 2 - Deep Dive: What is AI?
            </button>
            <button
              onClick={() => router.push('/company-file/blog/ai/ai-blockchain-synergy')}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Next: Day 4: Why Combine AI and Blockchain?
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
