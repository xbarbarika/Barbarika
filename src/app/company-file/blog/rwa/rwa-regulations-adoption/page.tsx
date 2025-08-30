'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RWARegulationsPage = () => {
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
                <h1 className="text-3xl font-bold text-white mb-6">The Rulebook: Regulations Shaping RWA Adoption</h1>
                
                <div className="flex items-center text-sm text-gray-400 mb-8">
                  <span>By Prince Bhesaniya</span>
                  <span className="mx-2">•</span>
                  <span>Sep 27, 2025</span>
                  <span className="mx-2">•</span>
                  <span>6 min read</span>
                </div>

                <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/hero.png"
                    alt="RWA Regulations"
                    fill
                    className="object-cover" />
                </div>

                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Here&apos;s the thing: finance doesn&apos;t move forward without rules.
                  Real World Assets sit at the intersection of two highly regulated worlds:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Traditional finance → where everything is tightly controlled.</li>
                  <li>Crypto → where rules are still being figured out.</li>
                </ul>
                <p className="mb-6">This creates both challenges and opportunities.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">What&apos;s Happening Globally</h2>
                
                <h3 className="text-xl font-semibold text-white mt-8 mb-3">United States</h3>
                <p className="mb-4">
                  The SEC has been cautious, but we&apos;re seeing progress with tokenized US Treasuries. 
                  They&apos;re becoming one of the first widely adopted RWA products.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-3">Europe</h3>
                <p className="mb-4">
                  MiCA (Markets in Crypto Assets) is set to become one of the most comprehensive crypto regulations worldwide. 
                  It includes guidelines that directly impact tokenization.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-3">India</h3>
                <p className="mb-6">
                  Things are moving slowly. Crypto isn&apos;t fully banned, but it&apos;s heavily taxed and restricted. 
                  RWAs will need clear guidelines before mass adoption here.
                </p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why Regulation Matters</h2>
                
                <h3 className="text-xl font-semibold text-white mt-8 mb-3">Trust</h3>
                <p className="mb-4">When regulators approve tokenized bonds or property, it builds confidence. Retail investors feel safer.</p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-3">Barriers</h3>
                <p className="mb-4">Strict rules can slow things down. Compliance is expensive, which makes it harder for smaller startups to innovate.</p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-3">Adoption</h3>
                <p className="mb-6">Long-term, clear regulations make it easier for RWAs to integrate with mainstream finance.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Uber Analogy</h2>
                <p className="mb-6">
                  Think about Uber in its early days. It was incredibly useful but constantly clashing with regulators. 
                  RWAs are in a similar place today. They solve real problems but need a proper rulebook before they can go mainstream.
                </p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Takeaway</h2>
                <p className="mb-6">
                  RWAs can&apos;t thrive in a lawless environment. Regulations will decide how quickly and how widely they reshape global finance.
                </p>

                <div className="mt-12 pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400">By Prince Bhesaniya</p>
                  <p className="text-sm text-gray-500 mt-2">Published on September 27, 2025</p>
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

export default RWARegulationsPage;
