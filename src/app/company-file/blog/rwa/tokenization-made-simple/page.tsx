'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TokenizationMadeSimplePage = () => {
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
                <h1 className="text-3xl font-bold text-white mb-2" style={{
                  fontFamily: 'var(--font-tourney), sans-serif',
                  background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>Tokenization Made Simple</h1>
                <h2 className="text-2xl font-semibold text-gray-300 mb-6">How Real Things Become Digital Assets You Can Own</h2>
                
                <div className="flex items-center text-base text-gray-400 mb-8">
                  <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-blue-900/50 text-blue-300 mr-4">Education</span>
                  <span>Aug 20, 2025</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                  <span className="mx-2">•</span>
                  <span>Prince Bhesaniya</span>
                </div>

                <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/hero.png"
                    alt="Tokenization Explained"
                    fill
                    className="object-cover" />
                </div>

                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Imagine owning a piece of the Eiffel Tower, a famous painting, or a rare sports car — 
                  not just in pictures, but actual ownership you can prove and sell. 
                                     This is the magic of tokenization, and it&apos;s simpler than you think.
                </p>
                
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">What is Tokenization?</h2>
                <p className="mb-6">
                  Tokenization turns real-world assets into digital tokens on a blockchain. 
                                     It&apos;s like creating digital certificates of ownership that are secure, easy to transfer, 
                   and can be divided into smaller pieces.
                </p>
                
                <div className="bg-gray-800/50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold text-white mb-3">The Pizza Analogy</h3>
                  <p className="mb-4">
                    Think of tokenization like cutting a pizza into slices. The whole pizza is the asset, 
                    and each slice represents a token. You can own one slice or many, and you can easily 
                    trade your slices with others.
                  </p>
                  <p>
                                         The best part? The blockchain keeps perfect track of who owns which slices, 
                     so there&apos;s never any confusion or dispute.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">How Tokenization Works</h2>
                <ol className="list-decimal pl-6 space-y-4 mb-6">
                  <li>
                    <strong>Asset Selection:</strong> Choose a valuable asset (real estate, art, commodities, etc.)
                  </li>
                  <li>
                    <strong>Legal Framework:</strong> Establish ownership rights and legal structure
                  </li>
                  <li>
                    <strong>Valuation:</strong> Determine the asset&apos;s market value
                  </li>
                  <li>
                    <strong>Token Creation:</strong> Issue digital tokens representing ownership shares
                  </li>
                  <li>
                    <strong>Distribution:</strong> Sell tokens to investors through compliant channels
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why It Matters</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 bg-gray-800/50 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-3">For Investors</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                      <li>Access to premium assets with small amounts</li>
                      <li>Diversify across different asset classes</li>
                      <li>24/7 global trading</li>
                      <li>Transparent ownership records</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-gray-800/50 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-3">For Asset Owners</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                      <li>Unlock liquidity in illiquid assets</li>
                      <li>Access global capital pools</li>
                      <li>Reduce transaction costs</li>
                      <li>Automate compliance and distributions</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Future is Tokenized</h2>
                <p className="mb-6">
                                     As blockchain technology matures, we&apos;ll see more assets being tokenized, 
                   making investing more accessible and markets more efficient. 
                   The tokenization revolution is just beginning, and it&apos;s open to everyone.
                </p>

                <div className="mt-12 pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400">By Prince Bhesaniya, Blockchain & Fintech Expert</p>
                  <p className="text-sm text-gray-500 mt-2">Published on September 17, 2025</p>
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

export default TokenizationMadeSimplePage;
