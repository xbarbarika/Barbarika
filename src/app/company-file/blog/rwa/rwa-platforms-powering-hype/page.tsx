'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RWAPlatformsPage = () => {
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
                <h1 className="text-3xl font-bold text-white mb-6">Who&apos;s Powering RWAs? A Look at the Platforms Behind the Hype</h1>
                
                <div className="flex items-center text-sm text-gray-400 mb-8">
                  <span>By Prince Bhesaniya</span>
                  <span className="mx-2">•</span>
                  <span>Sep 26, 2025</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>

                <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/hero.png"
                    alt="RWA Platforms"
                    fill
                    className="object-cover" />
                </div>

                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  When you hear about RWAs, you usually picture assets — real estate, gold, bonds. 
                  But behind every tokenized apartment or digital gold bar is a platform making it happen.
                </p>
                
                <p className="mb-6">
                  Think of platforms as the &quot;Exchanges + Custodians + Tech Providers&quot; of this new world. 
                  Without them, RWAs would just be a buzzword.
                </p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Big Names to Know</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>Ondo Finance</strong> → Tokenized bonds and treasuries.</li>
                  <li><strong>Maple Finance</strong> → Credit and lending built on RWAs.</li>
                  <li><strong>RealT</strong> → Fractionalized real estate.</li>
                  <li><strong>Centrifuge</strong> → Tokenizing invoices and business financing.</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why They Matter</h2>
                <p className="mb-6">They handle:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Legal custody of the actual asset</li>
                  <li>Smart contract logic for tokenization</li>
                  <li>Secondary marketplaces for liquidity</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Risk Factor</h2>
                <p className="mb-6">
                  Pick the wrong platform, and you could be holding a &quot;token&quot; with nothing behind it.
                  That&apos;s why research into who&apos;s powering RWAs is as important as the asset itself.
                </p>

                <div className="mt-12 pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400">By Prince Bhesaniya</p>
                  <p className="text-sm text-gray-500 mt-2">Published on September 26, 2025</p>
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

export default RWAPlatformsPage;
