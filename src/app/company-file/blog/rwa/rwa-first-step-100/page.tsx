'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RWAFirstStep100Page = () => {
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
                }}>Your First Step: Trying a Tokenized Asset with Just ₹100</h1>
                <div className="flex items-center text-base text-gray-400 mb-8">
                  <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-blue-900/50 text-blue-300 mr-4">Education</span>
                  <span>Aug 13, 2025</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                  <span className="mx-2">•</span>
                  <span>Princebhesaniya</span>
                </div>

                <p className="mb-6">All of this sounds exciting. But let&apos;s make it real. How can you, sitting at home, actually experience RWAs without risking your life savings? Here&apos;s a practical guide.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step 1: Pick the Right Platform</h2>
                <p className="mb-6">Start with a well-known platform that: publishes audits, has custody with trusted institutions, and is clear about regulations.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step 2: Start Small (₹100–₹500)</h2>
                <p className="mb-6">Don&apos;t chase profit in your first try. The goal is to learn how tokenization works, what fees are involved, and how trading feels. Think of it as paying for an education — not making a quick return.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step 3: Observe the Process</h2>
                <p className="mb-6">Notice how quickly you receive tokens, whether you can resell them instantly, and what kind of documentation or KYC is needed.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step 4: Ask the Hard Questions</h2>
                <p className="mb-6">Who holds the underlying asset? What happens if the platform shuts down? Does your ownership stand in court?</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why This Matters</h2>
                <p className="mb-6">The best way to understand RWAs isn&apos;t by reading a blog or watching a video. It&apos;s by trying. Start small, stay curious, and you&apos;ll see firsthand how traditional finance and blockchain are merging.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Takeaway</h2>
                <p className="mb-6">With just ₹100, you can take your first step into one of the biggest shifts in finance. RWAs aren&apos;t about theory — they&apos;re about practice. And the earlier you try, the faster you&apos;ll understand where this future is heading.</p>

                <div className="mt-12 pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400">By Princebhesaniya</p>
                  <p className="text-sm text-gray-500 mt-2">Published on August 13, 2025</p>
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

export default RWAFirstStep100Page;


