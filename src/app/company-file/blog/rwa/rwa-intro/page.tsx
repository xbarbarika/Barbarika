'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RWAIntroPage = () => {
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
              
              <div className="prose prose-invert max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-6" style={{
                  fontFamily: 'var(--font-tourney), sans-serif',
                  background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>Real World Assets: The Beginner’s Gateway to the Next Financial Evolution</h1>
                <div className="flex items-center text-sm text-gray-400 mb-8">
                  <span>By Princebhesaniya</span>
                  <span className="mx-2">•</span>
                  <span>Aug 9, 2025</span>
                  <span className="mx-2">•</span>
                  <span>4 min read</span>
                </div>

                <p className="text-xl text-gray-300 mb-6 leading-relaxed">Welcome to the only blog series you need to understand tokenized real-world assets from scratch. No jargon. No assumptions. Just one concept at a time, designed for complete beginners.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Let’s Start With a Simple Story</h2>
                <p className="mb-6">Meet Priya.</p>
                <p className="mb-6">She’s 28, works in HR, lives in Pune. Crypto? Not really her thing. Her brother owns some Bitcoin, but she thinks it’s all hype.</p>
                <p className="mb-6">One Sunday, she overhears someone mention “earning 5% on tokenized US Treasury Bonds.” She pauses.</p>
                <p className="mb-6">Wait — bonds? In crypto? She only thought Bitcoin and meme coins existed.</p>
                <p className="mb-6">Two weeks later, she’s holding her first asset-backed token worth ₹1,000. It’s tied to a US government bond. She didn’t need to fly to the States. Didn’t need a broker. Just a few taps and clicks on her phone.</p>
                <p className="mb-6">What she did wasn’t magic. It’s part of a fast-growing shift in global finance.</p>
                <p className="mb-6">That’s what this series is about.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why This Blog Series Exists</h2>
                <p className="mb-6">Let’s be honest. Web3 has a messaging problem.</p>
                <p className="mb-6">Try searching “Real World Assets” on YouTube or Twitter, and you’ll probably end up watching someone throw around words like tokenomics, yield strategies, or liquidity provisioning with graphs flying all over the screen.</p>
                <p className="mb-6">It’s no surprise that most people feel shut out.</p>
                <p className="mb-6">But here’s the thing: you shouldn’t need a tech background to understand your own money. And you definitely shouldn’t be left behind because of confusing language.</p>
                <p className="mb-6">This blog series is my attempt to fix that.</p>
                <p className="mb-6">Whether you’re a student, a freelancer, a creator, or a corporate professional who’s never touched crypto, this space belongs to you too. Let’s take it one step at a time together.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">So, What Are Real World Assets?</h2>
                <p className="mb-6"><strong>Here’s the short answer:</strong></p>
                <p className="mb-6">Real World Assets (RWAs) are physical or traditional financial assets like real estate, bonds, gold, or art, that get digitized and represented on a blockchain so people can buy, sell, or trade them globally.</p>
                <p className="mb-6">In simpler terms: RWAs are the bridge between the real economy (what exists physically or institutionally) and the digital economy (what exists online, 24/7, borderless).</p>
                <p className="mb-6">You’ve probably already interacted with RWAs and just didn’t know it.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">What You’ll Learn in This Series</h2>
                <p className="mb-6">This isn’t a one-off article. It’s a structured journey built to take you from zero to confident — with stories, analogies, case studies, and mini-guides all woven together.</p>
                <p className="mb-6">Here’s the four-part arc of the series:</p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-3">Part 1: “Laying the Tracks for the RWA Express”</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>The RWA revolution: why the buzz is real this time</li>
                  <li>Tokenization decoded: turning the physical into digital gold</li>
                  <li>Blockchain without the brain-freeze</li>
                  <li>Your starter pack: stablecoins, smart contracts, wallets, and more</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-8 mb-3">Part 2: “Treasures Going Digital”</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Real estate you can own without stepping inside</li>
                  <li>Bonds made bite-sized for anyone, anywhere</li>
                  <li>Gold and precious metals in your pocket (literally)</li>
                  <li>Fine art, collectibles, and even sneakers going on-chain</li>
                  <li>The weird, wonderful, and unexpected RWAs</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-8 mb-3">Part 3: “Inside the RWA Engine Room”</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>The life of a tokenized bond: start to finish</li>
                  <li>Who actually keeps the real thing safe?</li>
                  <li>The platforms turning RWAs into reality</li>
                  <li>The guardrails: custody, compliance, and code risks</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-8 mb-3">Part 4: “Your RWA Game Plan”</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>How to dip your toes in without sinking your wallet</li>
                  <li>The rookie mistakes that cost people money</li>
                  <li>India’s role in the global RWA race</li>
                  <li>Where the next big wave is headed and how to be ready</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">A Format That Keeps You Hooked</h2>
                <p className="mb-6">Every blog is self-contained, but if you read them in order, it becomes a complete curriculum.</p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Your 3-Month RWA Learning Plan (50+ Blogs)</h2>
                <p className="mb-6">Yes we’re going deep. Not just 5 or 10 posts. We’re doing 50 to 60 high-quality, storytelling-driven, beginner-friendly blogs over the next 12 weeks.</p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-3">Month 1: “Cracking the RWA Code”</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>RWAs unmasked: what they are and why they matter now</li>
                  <li>Tokenization as the great equalizer in investing</li>
                  <li>The biggest real-world RWA wins of 2024–2025</li>
                  <li>Wallets, gas fees, and stablecoins, explained so even your 12-year-old cousin gets it</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-8 mb-3">Month 2: “From Skyscrapers to Sneakers”</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Owning real estate without holding the keys</li>
                  <li>Why tokenized bonds are catching the eye of Indian investors</li>
                  <li>Gold on blockchain vs ETFs, what’s the real difference?</li>
                  <li>The invisible giants: carbon credits and invoice finance</li>
                    </ul>

                <h3 className="text-xl font-semibold text-white mt-8 mb-3">Month 3: “Under the Hood & Into the Future”</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Meet the architects of the RWA ecosystem</li>
                  <li>The regulatory race - who’s ahead and who’s lagging</li>
                  <li>How RWAs could shape finance for the next 100 million users</li>
                  <li>Your ₹100 crash course in buying your first tokenized asset</li>
                    </ul>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why RWAs Could Be Your First Real Step Into Web3</h2>
                <p className="mb-6">Crypto often feels like a tech playground. But RWAs are different.</p>
                <p className="mb-6">This is about owning something real, with the power of the internet.</p>
                <p className="mb-6">It’s not speculation. It’s not meme coins. It’s not get-rich-quick. It’s slow, steady transformation of how we hold value, earn yield, build wealth, and cross borders.</p>
                <p className="mb-6">This isn’t the future. It’s already live.</p>

                <div className="mt-12 pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400">By Princebhesaniya</p>
                  <p className="text-sm text-gray-500 mt-2">Published on August 9, 2025</p>
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

 
