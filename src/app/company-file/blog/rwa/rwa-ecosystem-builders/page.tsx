'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RWAEcosystemBuildersPage = () => {
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
                }}>Who&apos;s Building the RWA Ecosystem? (Platforms + Projects You Should Know)</h1>
                <div className="flex items-center text-base text-gray-400 mb-8">
                  <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-blue-900/50 text-blue-300 mr-4">Technology</span>
                  <span>Aug 14, 2025</span>
                  <span className="mx-2">•</span>
                  <span>6 min read</span>
                  <span className="mx-2">•</span>
                  <span>Princebhesaniya</span>
                </div>

                <p className="mb-6">Let&apos;s pause for a second. We&apos;ve been talking a lot about what RWAs are and the kinds of assets being tokenized — real estate, bonds, gold, even carbon credits. But here&apos;s the question: Who&apos;s actually making all of this happen? Because RWAs don&apos;t magically appear on the blockchain. Someone has to do the heavy lifting — the infrastructure, the custody, the compliance, the interfaces we use. Let&apos;s break this down in plain English.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Builders Behind RWAs</h2>
                <p className="mb-6">Think of RWAs like building a bridge between the physical world (apartments, gold bars, invoices) and the digital one (tokens, wallets, smart contracts). You need:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Tokenization platforms — the ones who actually &quot;digitize&quot; the asset.</li>
                  <li>Custodians — trusted entities who safely hold the real-world asset.</li>
                  <li>Protocols & blockchains — the rails on which the tokens move.</li>
                  <li>Front-end platforms — apps and exchanges where you and I can access them.</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Some Key Players (Explained Simply)</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>Centrifuge</strong> → DeFi platform for businesses. Companies bring their invoices, tokenize them, and get financing from global investors.</li>
                  <li><strong>Maple Finance</strong> → A lending protocol connecting institutional borrowers with lenders — with tokenized debt.</li>
                  <li><strong>Ondo Finance</strong> → Specializes in tokenized bonds and money market funds. A bridge between TradFi and DeFi.</li>
                  <li><strong>RealT</strong> → Tokenized real estate. Own fractions of rental properties in the US.</li>
                  <li><strong>Goldfinch</strong> → Tokenized credit lending, expanding access in underserved regions.</li>
                  <li><strong>Polymesh</strong> → A blockchain built specifically for regulated assets like stocks, bonds, and RWAs.</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Big Picture</h2>
                <p className="mb-6">Different projects are taking slices of the RWA pie. Some focus on real estate, others on bonds, some on credit or collectibles. What this really means is: RWAs aren&apos;t just theory anymore. They&apos;re live. We&apos;re at the early stages, but the pipes are being laid. The winners of this space will likely be the ones who can handle trust + compliance + scale.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why You Should Care</h2>
                <p className="mb-6">Because 5–10 years from now, these names could be as common as &quot;Paytm&quot; or &quot;CoinDCX&quot; is today in India. And if you understand the players early, you&apos;re not just watching the trend — you&apos;re ahead of it.</p>

                <div className="mt-12 pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400">By Princebhesaniya</p>
                  <p className="text-sm text-gray-500 mt-2">Published on August 14, 2025</p>
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

export default RWAEcosystemBuildersPage;


