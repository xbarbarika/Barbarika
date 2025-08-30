'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RWATreasuryBondPage = () => {
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
                <h1 className="text-3xl font-bold text-white mb-6">How Priya from Pune Bought a Piece of a US Treasury Bond</h1>
                
                <div className="flex items-center text-sm text-gray-400 mb-8">
                  <span>By Prince Bhesaniya</span>
                  <span className="mx-2">•</span>
                  <span>Sep 3, 2025</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>

                <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/hero.png"
                    alt="Global Investing"
                    fill
                    className="object-cover" />
                </div>

                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Priya Patel from Pune, India, invested in a US Treasury bond with just $50, thanks to blockchain technology. 
                                     Here&apos;s how she did it and what it means for global finance.
                </p>
                
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Traditional Barriers</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Minimum investments over $1,000</li>
                  <li>Complex international accounts</li>
                  <li>Currency conversion fees</li>
                  <li>Lengthy settlement times</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Blockchain Solution</h2>
                <p className="mb-6">
                  Tokenization platforms pool investor funds, purchase actual bonds, and issue digital tokens representing fractional ownership.
                </p>
                
                                 <h3 className="text-xl font-semibold text-white mt-8 mb-3">Priya&apos;s Journey</h3>
                <ol className="list-decimal pl-6 space-y-3 mb-6">
                  <li>Signed up on a regulated platform</li>
                  <li>Completed KYC in 10 minutes</li>
                  <li>Deposited 4,000 INR ($50)</li>
                  <li>Invested in a US Treasury bond fund</li>
                  <li>Received digital tokens as proof of ownership</li>
                </ol>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 bg-gray-800/50 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-3">For Investors</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                      <li>Low minimum investment</li>
                      <li>No international accounts needed</li>
                      <li>Transparent tracking</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-gray-800/50 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-3">For the System</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                      <li>Increased capital efficiency</li>
                      <li>Broader investor base</li>
                      <li>24/7 global markets</li>
                    </ul>
                  </div>
                </div>

                <p className="mb-6">
                  This is just the beginning of a more inclusive financial system where anyone with an internet connection 
                  can access global investment opportunities.
                </p>

                <div className="mt-12 pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400">By Prince Bhesaniya</p>
                  <p className="text-sm text-gray-500 mt-2">Published on September 3, 2025</p>
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

export default RWATreasuryBondPage;
