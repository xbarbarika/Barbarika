'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BlockchainRWABackbonePage = () => {
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
                }}>Why Blockchain is the Backbone of Real World Assets</h1>
                
                <div className="flex items-center text-base text-gray-400 mb-8">
                  <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-blue-900/50 text-blue-300 mr-4">Technology</span>
                  <span>Aug 21, 2025</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                  <span className="mx-2">•</span>
                  <span>Prince Bhesaniya</span>
                </div>

                <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/hero.png"
                    alt="Blockchain Technology"
                    fill
                    className="object-cover" />
                </div>

                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Blockchain technology is the foundation that makes tokenization of real-world assets possible. 
                  Here&apos;s why it&apos;s the perfect solution for managing ownership of physical assets in the digital world.
                </p>
                
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Immutable Record Keeping</h2>
                <p className="mb-6">
                  Blockchain creates an unchangeable record of ownership. Once a transaction is recorded, 
                  it cannot be altered or deleted, ensuring the integrity of asset ownership records.
                </p>
                
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Decentralized Verification</h2>
                <p className="mb-6">
                  No single entity controls the network. Instead, multiple participants verify transactions, 
                  making the system more secure and resistant to fraud.
                </p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Smart Contracts</h2>
                <p className="mb-6">
                  Self-executing contracts automate processes like dividend payments, rental distributions, 
                  and compliance, reducing administrative overhead and human error.
                </p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Global Accessibility</h2>
                <p className="mb-6">
                  Blockchain operates 24/7 across borders, enabling anyone with an internet connection 
                  to participate in global markets.
                </p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Fractional Ownership</h2>
                <p className="mb-6">
                  Blockchain makes it easy to divide assets into smaller, more affordable units, 
                  democratizing access to investment opportunities.
                </p>

                <div className="mt-12 pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400">By Prince Bhesaniya, Blockchain & Fintech Expert</p>
                  <p className="text-sm text-gray-500 mt-2">Published on September 24, 2025</p>
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

export default BlockchainRWABackbonePage;
