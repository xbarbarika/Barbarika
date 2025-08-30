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
    <div className="min-h-screen bg-white text-gray-900 relative">
      
      <Navbar />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <div className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Back Button */}
          <button
            onClick={() => router.push('/company-file/blog/ai')}
            className="mb-8 flex items-center text-lg text-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to AI + Blockchain Series
          </button>

          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden mb-8 border border-gray-200">
            <Image
              src="/hero.png"
              alt="Deep Dive: What is Blockchain?"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center text-base text-gray-600 mb-6">
              <span className="inline-block px-3 py-1 text-sm font-semibold border border-gray-300 text-gray-700 mr-4">
                Technology
              </span>
              <span>Aug 9, 2025</span>
              <span className="mx-2">•</span>
              <span>3 min read</span>
              <span className="mx-2">•</span>
              <span>Barbarika Labs</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900" style={{
              fontFamily: 'var(--font-tourney), sans-serif'
            }}>
              Day 3: Deep Dive: What is Blockchain?
            </h1>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-8 text-lg" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <p className="text-2xl text-gray-800 font-medium mb-10">
                Discover how blockchain technology works beyond digital currencies.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">What is Blockchain?</h2>
              
              <p>
                Blockchain is a revolutionary technology that&apos;s changing how we think about trust, ownership, and data sharing. 
                Think of it as a digital ledger that&apos;s shared across a network of computers, where every transaction is recorded 
                and can&apos;t be altered once confirmed.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">How Does Blockchain Work?</h2>
              
              <p>
                Imagine a chain of digital &quot;blocks,&quot; where each block contains:
              </p>

              <ul className="space-y-3 text-gray-700 my-6">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span><strong>Transaction data</strong> (who sent what to whom)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span><strong>A unique fingerprint</strong> (hash) of the previous block</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span><strong>Timestamp</strong> of when the block was created</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Key Features of Blockchain</h2>
              
              <div className="space-y-4 my-8">
                <div className="bg-gray-50 border-l-4 border-gray-400 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Immutability</h4>
                  <p className="text-gray-700">
                    Once data is recorded, it cannot be changed or deleted. This creates a permanent, tamper-proof record.
                  </p>
                </div>
                
                <div className="bg-gray-50 border-l-4 border-gray-400 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Decentralization</h4>
                  <p className="text-gray-700">
                    No single entity controls the network. It&apos;s distributed across many computers worldwide.
                  </p>
                </div>
                
                <div className="bg-gray-50 border-l-4 border-gray-400 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Transparency</h4>
                  <p className="text-gray-700">
                    All transactions are visible to everyone on the network, creating trust through openness.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Beyond Cryptocurrency</h2>
              
              <p>
                While Bitcoin made blockchain famous, the technology has countless other applications:
              </p>

              <ul className="space-y-3 text-gray-700 my-6">
                <li><strong>Supply Chain Management:</strong> Track products from factory to consumer</li>
                <li><strong>Voting Systems:</strong> Secure, transparent elections</li>
                <li><strong>Digital Identity:</strong> Self-sovereign identity management</li>
                <li><strong>Smart Contracts:</strong> Automated agreements that execute themselves</li>
                <li><strong>Healthcare Records:</strong> Secure, shareable medical data</li>
              </ul>

              <div className="bg-gray-50 border border-gray-200 p-6 my-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Tomorrow&apos;s Preview:</h3>
                <p className="text-gray-700">
                  Now that we understand both AI and blockchain individually, tomorrow we&apos;ll explore why combining them 
                  creates something truly powerful. Get ready to see how these technologies complement each other!
                </p>
              </div>

              <p className="text-lg font-medium text-gray-800 mt-8">
                Blockchain is more than just Bitcoin — it&apos;s the foundation for a more transparent, secure future!
              </p>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-10 border-t border-gray-300">
            <button
              onClick={() => router.push('/company-file/blog/ai/AI-deep-dive')}
              className="flex items-center text-lg text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous: Day 2 - Deep Dive: What is AI?
            </button>
            <button
              onClick={() => router.push('/company-file/blog/ai/ai-blockchain-synergy')}
              className="flex items-center text-lg text-gray-600 hover:text-gray-800 transition-colors"
            >
              Next: Day 4: Why Combine AI and Blockchain?
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
