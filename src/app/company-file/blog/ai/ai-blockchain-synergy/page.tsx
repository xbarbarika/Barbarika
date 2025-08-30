'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';

const BlogPost = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200 relative">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/90 to-red-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-red-500/5" />
      </div>
      
      <Navbar />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <div className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Back Button */}
          <button
            onClick={() => router.push('/company-file/blog/ai')}
            className="mb-8 flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to AI + Blockchain Series
          </button>

          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden rounded-xl mb-8">
            <Image
              src="/hero.png"
              alt="Why Combine AI and Blockchain?"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center text-sm text-gray-400 mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-900/50 text-blue-300 mr-4">
                Technology
              </span>
              <span>Aug 10, 2025</span>
              <span className="mx-2">•</span>
              <span>4 min read</span>
              <span className="mx-2">•</span>
              <span>Barbarika Labs</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{
              fontFamily: 'var(--font-tourney), sans-serif',
              background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Day 4: Why Combine AI and Blockchain?
            </h1>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-6" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <p className="text-xl text-gray-200 font-medium mb-8">
                Learn how AI and blockchain complement each other.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Perfect Partnership</h2>
              
              <p>
                Now that we understand both AI and blockchain individually, let&apos;s explore why combining them creates 
                something truly revolutionary. It&apos;s like discovering that chocolate and peanut butter make the perfect 
                combination &mdash; each is great on its own, but together they&apos;re magical!
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">AI&apos;s Strengths and Weaknesses</h2>
              
              <p>
                AI is incredibly powerful at:
              </p>

              <ul className="space-y-3 text-gray-300 my-6">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">🧠</span>
                  <span><strong>Processing massive amounts of data</strong> quickly and efficiently</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">🔍</span>
                  <span><strong>Finding patterns</strong> that humans might miss</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">⚡</span>
                  <span><strong>Making decisions</strong> based on complex algorithms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">📊</span>
                  <span><strong>Learning and improving</strong> over time</span>
                </li>
              </ul>

              <p>
                But AI has a critical weakness: <strong>it needs trustworthy data to work properly.</strong>
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Blockchain&apos;s Perfect Solution</h2>
              
              <p>
                This is where blockchain comes in! Blockchain provides:
              </p>

              <div className="space-y-4 my-8">
                <div className="bg-blue-900/20 border-l-4 border-blue-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">🔒 Data Integrity</h4>
                  <p className="text-gray-300">
                    Once data is recorded on the blockchain, it cannot be altered or tampered with. 
                    This ensures AI systems work with reliable, authentic information.
                  </p>
                </div>
                
                <div className="bg-green-900/20 border-l-4 border-green-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-green-300 mb-2">👁️ Transparency</h4>
                  <p className="text-gray-300">
                    All data sources and changes are visible to everyone, creating trust and accountability 
                    in AI decision-making processes.
                  </p>
                </div>
                
                <div className="bg-purple-900/20 border-l-4 border-purple-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">🌐 Decentralization</h4>
                  <p className="text-gray-300">
                    No single entity controls the data, preventing manipulation and ensuring fair access 
                    for AI systems.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Real-World Examples of AI + Blockchain</h2>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">🏥 Healthcare</h4>
                  <p className="text-sm text-gray-300">
                    AI analyzes medical data stored on blockchain, ensuring patient privacy while 
                    providing accurate diagnoses and treatment recommendations.
                  </p>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">🏦 Finance</h4>
                  <p className="text-sm text-gray-300">
                    AI-powered trading algorithms work with transparent, immutable financial data 
                    on blockchain, reducing fraud and improving market efficiency.
                  </p>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">📦 Supply Chain</h4>
                  <p className="text-sm text-gray-300">
                    AI tracks products through blockchain-verified supply chains, detecting 
                    anomalies and ensuring authenticity from factory to consumer.
                  </p>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">🎯 Marketing</h4>
                  <p className="text-sm text-gray-300">
                    AI analyzes customer behavior data stored on blockchain, creating personalized 
                    experiences while maintaining user privacy and data ownership.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Future is Bright</h2>
              
              <p>
                Together, AI and blockchain are creating systems that are:
              </p>

              <ul className="space-y-3 text-gray-300 my-6">
                <li><strong>Smart:</strong> AI provides intelligence and automation</li>
                <li><strong>Secure:</strong> Blockchain ensures data integrity and privacy</li>
                <li><strong>Transparent:</strong> All operations are visible and auditable</li>
                <li><strong>Efficient:</strong> Automated processes with minimal human intervention</li>
                <li><strong>Trustworthy:</strong> Verifiable and tamper-proof systems</li>
              </ul>

              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Tomorrow&apos;s Preview:</h3>
                <p className="text-gray-200">
                  Now that we understand the synergy, tomorrow we&apos;ll explore real-world examples 
                  of companies and projects that are already successfully combining AI and blockchain. 
                  Get ready to see the future in action!
                </p>
              </div>

              <p className="text-lg font-medium text-blue-300 mt-8">
                AI + Blockchain isn&apos;t just a combination &mdash; it&apos;s a revolution! 🚀
              </p>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-800">
            <button
              onClick={() => router.push('/company-file/blog/ai/blockchain-fundamentals')}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous: Day 3 - Deep Dive: What is Blockchain?
            </button>
            <button
              onClick={() => router.push('/company-file/blog/ai/real-world-applications')}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Next: Day 5 - Real-World Examples
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
