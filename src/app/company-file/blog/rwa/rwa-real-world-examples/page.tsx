'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RWARealWorldExamplesPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200 relative">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-black/90 to-yellow-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-green-500/5 via-transparent to-yellow-500/5" />
      </div>
      
      <Navbar />
      
      <div className="relative">
        <div className="w-full">
          <div className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 xl:px-24">
            <div className="max-w-6xl mx-auto">
              <button
                onClick={() => router.push('/company-file/blog/rwa')}
                className="mb-8 flex items-center text-green-400 hover:text-green-300 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to RWA Series
              </button>
              
              <div className="prose prose-invert max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-6">Real World Examples of RWAs: 2024-2025</h1>
                <h2 className="text-2xl font-semibold text-gray-300 mb-6">From Gold to Green Finance</h2>
                
                <div className="flex items-center text-sm text-gray-400 mb-8">
                  <span>By Prince Bhesaniya</span>
                  <span className="mx-2">•</span>
                  <span>Sep 10, 2025</span>
                  <span className="mx-2">•</span>
                  <span>6 min read</span>
                </div>

                <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/hero.png"
                    alt="Tokenized Assets"
                    fill
                    className="object-cover" />
                </div>

                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  The tokenization of real-world assets (RWAs) is no longer theoretical. 
                  Here are the most compelling examples transforming global finance in 2024-2025.
                </p>
                
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Precious Metals: Gold Goes Digital</h2>
                <p className="mb-4">
                  Gold-backed tokens like PAX Gold (PAXG) allow investors to own fractional shares of physical gold:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Each token = 1 troy ounce of physical gold</li>
                  <li>24/7 trading on digital exchanges</li>
                  <li>Fractional ownership (as small as 0.01g)</li>
                  <li>Eliminates storage and insurance costs</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Real Estate: Fractional Property Ownership</h2>
                <p className="mb-4">
                  Tokenized commercial properties in major cities worldwide:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Invest as little as $100 in premium properties</li>
                  <li>Automated rental income distribution</li>
                  <li>Secondary market trading</li>
                  <li>Global investor participation</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Green Finance: Carbon Credits</h2>
                <p className="mb-4">
                  Blockchain is revolutionizing environmental markets:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Fractional trading of carbon credits</li>
                  <li>Transparent price discovery</li>
                  <li>Automated verification and retirement</li>
                  <li>New opportunities for sustainable investing</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Private Credit: Small Business Loans</h2>
                <p className="mb-4">
                  Tokenized loans are transforming emerging markets:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Global funding for small businesses</li>
                  <li>Automated loan servicing</li>
                  <li>Secondary market liquidity</li>
                  <li>Expanding access to capital</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Future of Asset Tokenization</h2>
                <p className="mb-6">
                                     These examples represent just the beginning. As blockchain infrastructure matures and regulations evolve, 
                   we&apos;ll see tokenization expand across all asset classes, creating more efficient and transparent markets.
                </p>

                <div className="mt-12 pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400">By Prince Bhesaniya, Blockchain & Fintech Expert</p>
                  <p className="text-sm text-gray-500 mt-2">Published on September 10, 2025</p>
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

export default RWARealWorldExamplesPage;
