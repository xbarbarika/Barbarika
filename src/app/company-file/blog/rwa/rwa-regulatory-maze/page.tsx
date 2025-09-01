'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RWARegulatoryMazePage = () => {
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
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to RWA Series
              </button>

              <div className="prose prose-lg prose-invert max-w-none">
                <h1 className="text-3xl font-bold text-white mb-6" style={{
                  fontFamily: 'var(--font-tourney), sans-serif',
                  background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>The Regulatory Maze: What Rules Apply to RWAs?</h1>
                <div className="flex items-center text-base text-gray-400 mb-8">
                  <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-blue-900/50 text-blue-300 mr-4">Regulation</span>
                  <span>Aug 15, 2025</span>
                  <span className="mx-2">•</span>
                  <span>6 min read</span>
                  <span className="mx-2">•</span>
                  <span>Princebhesaniya</span>
                </div>

                <p className="mb-6">Okay, so far this series has been fun. RWAs sound exciting, futuristic, and honestly a little magical. But let&apos;s come back to earth for a second. Here&apos;s the uncomfortable truth: finance is one of the most regulated industries in the world. And RWAs? They&apos;re sitting at the intersection of finance + blockchain — double the rules, double the complexity.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why Regulation Matters</h2>
                <p className="mb-6">Imagine you buy a tokenized bond from a platform. You expect interest payments every month. But what if: the company holding the bond disappears? The regulators say the token itself was never legal? Or the rules change overnight? That&apos;s why regulation isn&apos;t just boring fine print — it&apos;s the foundation of trust.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Current Landscape (Simplified)</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>US & Europe</strong> → Moving faster. The US treats tokenized assets often as securities (SEC). Europe&apos;s MiCA is setting a clear framework.</li>
                  <li><strong>India</strong> → Still cautious. RBI and SEBI haven&apos;t provided a direct path yet. Crypto is taxed; tokenized RWAs remain in discussion mode.</li>
                  <li><strong>Global South</strong> → Some regions allow sandboxes for tokenized credit or carbon credits.</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Key Challenges</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Custody rules — who legally holds the gold bar or the property deed?</li>
                  <li>Investor protection — if something goes wrong, who do you call?</li>
                  <li>Cross-border laws — a property in the US, token owned in India: whose law applies?</li>
                  <li>Taxation — how is income from tokenized assets taxed?</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Good News</h2>
                <p className="mb-6">Every new technology goes through this. The internet did. Ride-sharing did. Even UPI had regulatory hurdles before becoming mainstream. Governments are watching, learning, and slowly putting rules in place.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">What This Means For You</h2>
                <p className="mb-6">Don&apos;t rush in blindly. Use platforms with regulatory clarity. Understand this is a long game — the safest opportunities will emerge as the rules crystallize.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Closing Thought</h2>
                <p className="mb-6">RWAs are the future, yes. But the future has to be legal to be sustainable. In the next 2–3 years, the biggest breakthroughs won&apos;t just be in tech, but in policy.</p>

                <div className="mt-12 pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400">By Princebhesaniya</p>
                  <p className="text-sm text-gray-500 mt-2">Published on August 15, 2025</p>
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

export default RWARegulatoryMazePage;


