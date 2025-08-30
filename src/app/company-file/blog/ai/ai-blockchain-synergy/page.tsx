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
    <div className="min-h-screen bg-white text-gray-900 relative">
      
      <Navbar />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <div className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Back Button */}
          <button
            onClick={() => router.push('/company-file/blog/ai')}
            className="mb-8 flex items-center text-lg text-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to AI + Blockchain Series
          </button>

          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden mb-8 border border-gray-200">
            <Image
              src="/hero.png"
              alt="Why Combine AI and Blockchain?"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center text-base text-gray-600 mb-6">
              <span className="inline-block px-3 py-1 text-sm font-semibold border border-gray-300 text-gray-700 mr-4">
                Technology
              </span>
              <span>Aug 10, 2025</span>
              <span className="mx-2">•</span>
              <span>4 min read</span>
              <span className="mx-2">•</span>
              <span>Barbarika Labs</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900" style={{
              fontFamily: 'var(--font-tourney), sans-serif'
            }}>
              Day 4: Why Combine AI and Blockchain?
            </h1>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-8 text-lg" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <p className="text-2xl text-gray-800 font-medium mb-10">
                Learn how AI and blockchain complement each other.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">The Perfect Partnership</h2>
              
              <p>
                Now that we understand both AI and blockchain individually, let&apos;s explore why combining them creates 
                something truly revolutionary. It&apos;s like discovering that chocolate and peanut butter make the perfect 
                combination — each is great on its own, but together they&apos;re magical!
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">AI&apos;s Strengths and Weaknesses</h2>
              
              <p>
                AI is incredibly powerful at:
              </p>

              <ul className="space-y-3 text-gray-700 my-6">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span><strong>Processing massive amounts of data</strong> quickly and efficiently</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span><strong>Finding patterns</strong> that humans might miss</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span><strong>Making decisions</strong> based on complex algorithms</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span><strong>Learning and improving</strong> over time</span>
                </li>
              </ul>

              <p>
                But AI has a critical weakness: <strong>it needs trustworthy data to work properly.</strong>
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Blockchain&apos;s Perfect Solution</h2>
              
              <p>
                This is where blockchain comes in! Blockchain provides:
              </p>

              <div className="space-y-4 my-8">
                <div className="bg-gray-50 border-l-4 border-gray-400 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Data Integrity</h4>
                  <p className="text-gray-700">
                    Once data is recorded on the blockchain, it cannot be altered or tampered with. 
                    This ensures AI systems work with reliable, authentic information.
                  </p>
                </div>
                
                <div className="bg-gray-50 border-l-4 border-gray-400 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Transparency</h4>
                  <p className="text-gray-700">
                    All data sources and changes are visible to everyone, creating trust and accountability 
                    in AI decision-making processes.
                  </p>
                </div>
                
                <div className="bg-gray-50 border-l-4 border-gray-400 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Decentralization</h4>
                  <p className="text-gray-700">
                    No single entity controls the data, preventing manipulation and ensuring fair access 
                    for AI systems.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Real-World Examples of AI + Blockchain</h2>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Healthcare</h4>
                  <p className="text-sm text-gray-700">
                    AI analyzes medical data stored on blockchain, ensuring patient privacy while 
                    providing accurate diagnoses and treatment recommendations.
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Finance</h4>
                  <p className="text-sm text-gray-700">
                    AI-powered trading algorithms work with transparent, immutable financial data 
                    on blockchain, reducing fraud and improving market efficiency.
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Supply Chain</h4>
                  <p className="text-sm text-gray-700">
                    AI tracks products through blockchain-verified supply chains, detecting 
                    anomalies and ensuring authenticity from factory to consumer.
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Marketing</h4>
                  <p className="text-sm text-gray-700">
                    AI analyzes customer behavior data stored on blockchain, creating personalized 
                    experiences while maintaining user privacy and data ownership.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">The Future is Bright</h2>
              
              <p>
                Together, AI and blockchain are creating systems that are:
              </p>

              <ul className="space-y-3 text-gray-700 my-6">
                <li><strong>Smart:</strong> AI provides intelligence and automation</li>
                <li><strong>Secure:</strong> Blockchain ensures data integrity and privacy</li>
                <li><strong>Transparent:</strong> All operations are visible and auditable</li>
                <li><strong>Efficient:</strong> Automated processes with minimal human intervention</li>
                <li><strong>Trustworthy:</strong> Verifiable and tamper-proof systems</li>
              </ul>

              <div className="bg-gray-50 border border-gray-200 p-6 my-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Tomorrow&apos;s Preview:</h3>
                <p className="text-gray-700">
                  Now that we understand the synergy, tomorrow we&apos;ll explore real-world examples 
                  of companies and projects that are already successfully combining AI and blockchain. 
                  Get ready to see the future in action!
                </p>
              </div>

              <p className="text-lg font-medium text-gray-800 mt-8">
                AI + Blockchain isn&apos;t just a combination — it&apos;s a revolution!
              </p>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-10 border-t border-gray-300">
            <button
              onClick={() => router.push('/company-file/blog/ai/blockchain-fundamentals')}
              className="flex items-center text-lg text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous: Day 3 - Deep Dive: What is Blockchain?
            </button>
            <button
              onClick={() => router.push('/company-file/blog/ai/real-world-applications')}
              className="flex items-center text-lg text-gray-600 hover:text-gray-800 transition-colors"
            >
              Next: Day 5 - Real-World Examples
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
