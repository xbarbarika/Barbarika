'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RWA100MUsersPage = () => {
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
                }}>How RWAs Could Change Finance for the Next 100 Million Users</h1>
                <div className="flex items-center text-base text-gray-400 mb-8">
                  <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-blue-900/50 text-blue-300 mr-4">Finance</span>
                  <span>Aug 12, 2025</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                  <span className="mx-2">•</span>
                  <span>Princebhesaniya</span>
                </div>

                <p className="mb-6">Let&apos;s stop thinking of RWAs as just a crypto play. They&apos;re much bigger than that. RWAs have the power to reshape finance for millions of people who&apos;ve been left out of traditional systems.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Borderless Finance</h2>
                <p className="mb-6">If you&apos;re in India today and want to buy a US Treasury bond, good luck. The paperwork, middlemen, and cost make it nearly impossible. With RWAs, you could own a tokenized slice of the same bond in minutes. That&apos;s borderless access — something banks have never been able to offer.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Financial Inclusion</h2>
                <p className="mb-6">RWAs shrink the entry barrier. Instead of needing ₹50 lakh to buy property, you can invest ₹500 in a fraction of a building. Instead of needing connections to buy corporate bonds, you can grab a token instantly.</p>
                <p className="mb-6">The result? A farmer in UP and a software engineer in Bengaluru can both own the same asset.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Liquidity & Flexibility</h2>
                <p className="mb-6">Traditionally, assets like real estate or bonds are illiquid — meaning once you buy them, you&apos;re locked in for years. RWAs change this by creating instant secondary markets. Buy today, sell tomorrow, all on-chain.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Wealth Creation for the Masses</h2>
                <p className="mb-6">RWAs democratize access to high-value assets. For decades, these were opportunities reserved for the wealthy. Now, they&apos;re open to anyone with internet access.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Takeaway</h2>
                <p className="mb-6">RWAs are not just a new investment product. They&apos;re a shift in who gets to participate in wealth creation. The next 100 million users won&apos;t join crypto because of memes or speculation, they&apos;ll join because RWAs give them financial tools they&apos;ve never had before.</p>

                <div className="mt-12 pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400">By Princebhesaniya</p>
                  <p className="text-sm text-gray-500 mt-2">Published on August 12, 2025</p>
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

export default RWA100MUsersPage;


