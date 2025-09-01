'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RealEstateTokenizedPage = () => {
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
                }}>From Rent to Returns: How Real Estate is Getting Tokenized</h1>
                <div className="flex items-center text-base text-gray-400 mb-8">
                  <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-blue-900/50 text-blue-300 mr-4">Finance</span>
                  <span>Aug 4, 2025</span>
                  <span className="mx-2">•</span>
                  <span>8 min read</span>
                  <span className="mx-2">•</span>
                  <span>Princebhesaniya</span>
                </div>

                <p>If there’s one asset class long seen as the “holy grail” of wealth-building, it’s real estate. But it’s expensive, illiquid, and out of reach for many. Tokenization changes that: with as little as $100, you can own a fraction of premium global properties — and earn your share of returns.</p>

                <h2>Why Real Estate is Perfect for Tokenization</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>High value, hard to access:</strong> Fractional tokens lower entry barriers.</li>
                  <li><strong>Stable & tangible:</strong> Backed by physical land and property.</li>
                  <li><strong>Global investor pool:</strong> Borderless access from anywhere.</li>
                </ul>

                <h2>How Tokenized Real Estate Works (Step by Step)</h2>
                <ol className="list-decimal pl-6 space-y-2 mb-6">
                  <li>Property selection by a developer/asset manager.</li>
                  <li>Legal wrapping via SPV or trust.</li>
                  <li>Token creation mapping fractions to ownership.</li>
                  <li>Investor participation using fiat or crypto.</li>
                  <li>Income distribution (rent/appreciation) to wallets.</li>
                </ol>

                <h3>Example: Rahul’s Slice of Dubai</h3>
                <p>Rahul invests $500 into a tokenized luxury apartment. Each quarter he receives rental income in USDC — global real estate income without borders or middlemen.</p>

                <h2>The Benefits</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Fractional ownership starting ~$100</li>
                  <li>Secondary-market liquidity</li>
                  <li>Global reach</li>
                  <li>Transparent records on-chain</li>
                  <li>Passive income from rent/dividends</li>
                </ul>

                <h2>Risks to Consider</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Regulatory differences across countries</li>
                  <li>Liquidity can vary by market/platform</li>
                  <li>Platform/custodian trust and setup</li>
                  <li>Market risk: property values can fall</li>
                </ul>

                <h2>The Bigger Picture</h2>
                <p>Tokenization may democratize real estate like mutual funds did for stocks — enabling mass participation and unlocking liquidity for developers and owners.</p>

                <h2>What the Future Holds</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Government pilots and clearer regulation</li>
                  <li>Banking/fintech integrations</li>
                  <li>Growing demand for real-world backed tokens</li>
                </ul>

                <p className="mt-8">In the tokenized future, the mantra may shift from “location, location, location” to “fraction, fraction, fraction.”</p>

                <div className="mt-12 pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400">By Princebhesaniya</p>
                  <p className="text-sm text-gray-500 mt-2">Published on September 28, 2025</p>
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

export default RealEstateTokenizedPage;


