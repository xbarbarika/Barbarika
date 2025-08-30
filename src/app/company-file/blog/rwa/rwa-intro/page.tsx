'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RWAIntroPage = () => {
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
                <h1 className="text-3xl font-bold text-white mb-6">Introduction to Real World Asset Tokenization</h1>
                
                <div className="flex items-center text-sm text-gray-400 mb-8">
                  <span>By Barbarika Labs</span>
                  <span className="mx-2">•</span>
                  <span>Aug 20, 2025</span>
                  <span className="mx-2">•</span>
                  <span>4 min read</span>
                </div>

                <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/hero.png"
                    alt="Real World Asset Tokenization"
                    fill
                    className="object-cover" />
                </div>

                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  The world of finance is undergoing a seismic shift with the advent of blockchain technology. 
                  One of the most promising applications is the tokenization of real-world assets (RWA).
                </p>
                
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">What is Asset Tokenization?</h2>
                <p className="mb-6">
                  Asset tokenization converts rights to an asset into a digital token on a blockchain, 
                  enabling fractional ownership, increased liquidity, and 24/7 trading of traditionally illiquid assets.
                </p>
                
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Key Benefits</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>Liquidity:</strong> Unlock value in illiquid assets</li>
                  <li><strong>Accessibility:</strong> Fractional ownership of high-value assets</li>
                  <li><strong>Efficiency:</strong> Reduce settlement times from days to minutes</li>
                  <li><strong>Transparency:</strong> Immutable record of ownership</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Tokenizable Assets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 bg-gray-800/50 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-3">Tangible Assets</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                      <li>Real Estate</li>
                      <li>Precious Metals</li>
                      <li>Art & Collectibles</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-gray-800/50 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-3">Intangible Assets</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                      <li>Intellectual Property</li>
                      <li>Private Equity</li>
                      <li>Royalties</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Future</h2>
                <p className="mb-6">
                                     As blockchain technology matures, we&apos;ll see trillions in real-world assets move onto blockchain networks, 
                   creating a more inclusive and transparent financial system.
                </p>

                <div className="mt-12 pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400">By Barbarika Labs</p>
                  <p className="text-sm text-gray-500 mt-2">Published on August 20, 2025</p>
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

export default RWAIntroPage;
