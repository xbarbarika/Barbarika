'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LuxuryAssetsRwaWorldPage = () => {
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
                }}>Gold, Art, and Beyond: Luxury Assets in the RWA World</h1>
                <div className="flex items-center text-base text-gray-400 mb-8">
                  <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-blue-900/50 text-blue-300 mr-4">Finance</span>
                  <span>Aug 6, 2025</span>
                  <span className="mx-2">•</span>
                  <span>9 min read</span>
                  <span className="mx-2">•</span>
                  <span>Princebhesaniya</span>
                </div>

                <p>Luxury assets like gold, blue‑chip art, rare watches, and classic cars are entering digital wallets through tokenization. Fractions of elite assets are becoming accessible, liquid, and globally tradable.</p>

                <h2>Why Luxury Assets Are Being Tokenized</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>High value with low accessibility</li>
                  <li>Low liquidity in traditional markets</li>
                  <li>Global collector appeal</li>
                </ul>

                <h2>How It Works</h2>
                <ol className="list-decimal pl-6 space-y-2 mb-6">
                  <li>Appraisal and custodianship under an SPV</li>
                  <li>Token minting (e.g., 1,000,000 tokens for a $10M artwork)</li>
                  <li>Investors buy fractions, sharing in appreciation</li>
                </ol>

                <h3>Real Examples</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Gold-backed tokens like PAXG, Tether Gold</li>
                  <li>Masterworks for fractional fine art</li>
                  <li>Tokenized luxury watches pilots in Switzerland</li>
                </ul>

                <h3>Story: Anjali and the Picasso</h3>
                <p>Anjali invests $200 in a tokenized Picasso share. If the painting appreciates, her tokens do too — opening the door to elite art ownership.</p>

                <h2>Upside vs. Downside</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>Upside:</strong> Access, diversification, inflation hedge (gold), prestige</li>
                  <li><strong>Downside:</strong> Liquidity variance, authenticity/custody risk, regulation, subjective valuations</li>
                </ul>

                <p>Luxury was once a closed circle. Tokenization is opening it — the only questions are how fast and who gets in early.</p>

                <div className="mt-12 pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400">By Princebhesaniya</p>
                  <p className="text-sm text-gray-500 mt-2">Published on September 30, 2025</p>
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

export default LuxuryAssetsRwaWorldPage;


