'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RWAvsCryptoVolatilityPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200 relative">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/90 to-red-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-red-500/5" />
      </div>

      <Navbar />

      <div className="relative">
        <div className="w-full">
          <div className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 xl:px-24">
            <div className="max-w-6xl mx-auto">
              <button
                onClick={() => router.push('/company-file/blog/rwa')}
                className="mb-8 flex items-center text-lg text-blue-400 hover:text-blue-300 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to RWA Series
              </button>

              <div className="prose prose-lg prose-invert max-w-none leading-relaxed space-y-6">
                <h1 className="text-3xl font-bold text-white mb-6" style={{
                  fontFamily: 'var(--font-tourney), sans-serif',
                  background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>Stable by Design: RWAs vs. Crypto Volatility</h1>
                <div className="flex items-center text-base text-gray-400 mb-8">
                  <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-blue-900/50 text-blue-300 mr-4">Education</span>
                  <span>Oct 2, 2025</span>
                  <span className="mx-2">•</span>
                  <span>8 min read</span>
                  <span className="mx-2">•</span>
                  <span>Princebhesaniya</span>
                </div>

                <p>Crypto swings can be dizzying. RWAs are different: backed by real assets like bonds, real estate, and commodities, they’re built for stability and yield — not speculation.</p>

                <h2>Why RWAs Are More Stable</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Real‑world backing</li>
                  <li>Lower speculation, higher utility</li>
                  <li>Yield‑based returns (rent, interest)</li>
                </ul>

                <h3>Story: Naveen’s Safe Bet</h3>
                <p>Naveen chooses a tokenized government bond over a meme coin. He earns a steady 5% yield — and sleeps better.</p>

                <h2>Risks Still Exist</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Market downturns impact underlying assets</li>
                  <li>Platform security and custody</li>
                  <li>Liquidity may lag classic crypto</li>
                </ul>

                <p>RWAs won’t 10x overnight. But they won’t crash overnight either. They’re designed for long‑term wealth preservation.</p>

                <div className="mt-12 pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400">By Princebhesaniya</p>
                  <p className="text-sm text-gray-500 mt-2">Published on October 2, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RWAvsCryptoVolatilityPage;


