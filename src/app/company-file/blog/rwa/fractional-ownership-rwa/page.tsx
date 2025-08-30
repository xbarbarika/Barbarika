'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FractionalOwnershipRWAPage = () => {
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
                <h1 className="text-3xl font-bold text-white mb-6">Owning a Piece of the World: How Fractional Ownership Works in RWAs</h1>
                
                <div className="flex items-center text-sm text-gray-400 mb-8">
                  <span>By Prince Bhesaniya</span>
                  <span className="mx-2">•</span>
                  <span>Sep 25, 2025</span>
                  <span className="mx-2">•</span>
                  <span>7 min read</span>
                </div>

                <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/hero.png"
                    alt="Fractional Ownership"
                    fill
                    className="object-cover" />
                </div>

                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  &quot;Why buy a whole cow when you just want a glass of milk?&quot;
                  That&apos;s essentially the idea behind fractional ownership — except instead of cows, we&apos;re talking apartments in Dubai, gold bars in Swiss vaults, and even rare paintings.
                </p>
                
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Old World Problem</h2>
                <p className="mb-6">
                  Imagine walking past a luxury apartment in Dubai priced at ₹10 crore.
                  You know it&apos;s a great investment — the location is unbeatable, the rental income is high — but here&apos;s the catch:
                  You don&apos;t have ₹10 crore lying around.
                </p>
                <p className="mb-6">
                  Even if you could team up with friends or family, it would get messy:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Who handles the paperwork?</li>
                  <li>Who collects rent?</li>
                  <li>What if someone wants to sell their share?</li>
                </ul>
                <p className="mb-6">
                  Fractional ownership existed before, but it was slow, legal-heavy, and often limited to people who knew each other.
                </p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">The New World Solution: Blockchain + RWAs</h2>
                <p className="mb-6">
                  With Real-World Assets (RWAs) on the blockchain, all of those headaches disappear.
                  Here&apos;s how it works:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>The real asset (say, an apartment) is tokenized into smaller pieces.</li>
                  <li>Each token represents a share of that asset.</li>
                  <li>Your ownership is recorded transparently on the blockchain.</li>
                  <li>You can sell your tokens whenever you want — no lawyers, no waiting months for buyers.</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">A Few Real-Life Examples</h2>
                
                <h3 className="text-xl font-semibold text-white mt-8 mb-3">1. Luxury Real Estate</h3>
                <p className="mb-4">
                  A villa in Goa worth ₹12 crore is split into 12,000 tokens. Each token costs ₹10,000.
                  You buy 5 tokens → you own 0.05% of the villa and earn your share of the rental income.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-3">2. Gold</h3>
                <p className="mb-4">
                  A gold bar stored in a vault is tokenized into 1,000 parts.
                  You own 25 tokens → when gold prices rise, your tokens gain value.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-3">3. Art</h3>
                <p className="mb-6">
                  A famous painting is tokenized so multiple collectors can co-own it.
                  When it&apos;s auctioned years later, profits are split based on token holdings.
                </p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why This is a Game-Changer</h2>
                
                <h3 className="text-xl font-semibold text-white mt-8 mb-3">Lower Entry Barriers</h3>
                <p className="mb-4">You can start with as little as ₹100 in some projects.</p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-3">Diversification</h3>
                <p className="mb-4">Instead of putting ₹1 lakh into just one asset, you could own fractions of real estate, gold, and corporate bonds all at once.</p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-3">Liquidity</h3>
                <p className="mb-6">Unlike traditional ownership, you&apos;re not locked in for years — you can trade your tokens anytime on supported marketplaces.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">But… It&apos;s Not Risk-Free</h2>
                
                <h3 className="text-xl font-semibold text-white mt-8 mb-3">Trust in the Custodian</h3>
                <p className="mb-4">The token is only as reliable as the company holding the real asset.</p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-3">Market Fluctuations</h3>
                <p className="mb-4">Token prices can move based on demand, not just the asset&apos;s value.</p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-3">Regulatory Uncertainty</h3>
                <p className="mb-6">Some countries don&apos;t have clear laws for tokenized fractional ownership yet.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why Everyday Investors Should Care</h2>
                <p className="mb-6">
                  Fractional ownership is democratizing access to assets once reserved for the ultra-rich:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>A student in Bengaluru can co-own farmland in Australia.</li>
                  <li>A retiree in Pune can hold part of a gold vault in Switzerland.</li>
                  <li>A small business owner in Delhi can invest in US corporate bonds.</li>
                </ul>
                <p className="mb-6">You no longer need to be rich to invest like the rich.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Road Ahead</h2>
                <p className="mb-6">
                  As regulation catches up and more platforms emerge, expect to see:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>NFT-based property deeds for instant transfers.</li>
                  <li>Cross-asset swaps (gold → real estate → bonds in minutes).</li>
                  <li>Fully digital portfolios made entirely of fractional assets.</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Final Takeaway</h2>
                <p className="mb-6">
                  Fractional ownership isn&apos;t about buying &quot;less.&quot;
                  It&apos;s about unlocking access to more opportunities — without needing millions in your bank account.
                </p>

                <div className="mt-12 pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400">By Prince Bhesaniya</p>
                  <p className="text-sm text-gray-500 mt-2">Published on September 25, 2025</p>
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

export default FractionalOwnershipRWAPage;
