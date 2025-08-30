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
              alt="Recent Developments and News"
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
              <span>Aug 14, 2025</span>
              <span className="mx-2">•</span>
              <span>3 min read</span>
              <span className="mx-2">•</span>
              <span>Barbarika Labs</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{
              fontFamily: 'var(--font-tourney), sans-serif',
              background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Day 8: Recent Developments and News
            </h1>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-6" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <p className="text-xl text-gray-200 font-medium mb-8">
                Stay updated with the latest breakthroughs and industry updates.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">🚀 Breaking News in AI + Blockchain</h2>
              
              <p>
                The AI + Blockchain space is moving at lightning speed! Let&apos;s catch up on the latest 
                developments that are shaping the future of these technologies.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">🔬 Major Breakthroughs</h2>
              
              <div className="space-y-6 my-8">
                <div className="bg-blue-900/20 border-l-4 border-blue-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">🧠 AI-Powered Smart Contracts</h4>
                  <p className="text-gray-300">
                    Researchers have developed AI systems that can automatically write, audit, and optimize 
                    smart contracts, reducing errors by 80% and development time by 60%.
                  </p>
                </div>
                
                <div className="bg-green-900/20 border-l-4 border-green-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-green-300 mb-2">⚡ Layer 2 Scaling Solutions</h4>
                  <p className="text-gray-300">
                    New blockchain scaling solutions are achieving 100,000+ transactions per second while 
                    maintaining security, making AI applications on blockchain much more practical.
                  </p>
                </div>
                
                <div className="bg-purple-900/20 border-l-4 border-purple-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">🔒 Privacy-Preserving AI</h4>
                  <p className="text-gray-300">
                    Zero-knowledge proofs combined with AI are enabling machine learning on encrypted data, 
                    opening new possibilities for healthcare and finance applications.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">🏢 Corporate Adoption News</h2>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">🏥 Healthcare Giants</h4>
                  <p className="text-sm text-gray-300">
                    Major hospitals are implementing AI + Blockchain systems for patient data management, 
                    with 40% improvement in data accuracy and 30% reduction in administrative costs.
                  </p>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">🏦 Banking Revolution</h4>
                  <p className="text-sm text-gray-300">
                    Top 10 global banks are testing AI-powered blockchain systems for fraud detection, 
                    achieving 95% accuracy in identifying suspicious transactions.
                  </p>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                                     <h4 className="text-lg font-semibold text-purple-300 mb-3">📦 Supply Chain Leaders</h4>
                  <p className="text-sm text-gray-300">
                    Fortune 500 companies are deploying AI + Blockchain solutions, reducing supply chain 
                    costs by 25% and improving traceability by 90%.
                  </p>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">🎯 Retail Innovation</h4>
                  <p className="text-sm text-gray-300">
                    Major retailers are using AI + Blockchain for inventory management, achieving 40% 
                    reduction in stockouts and 35% improvement in demand forecasting.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">🌍 Government and Regulatory Updates</h2>
              
              <div className="space-y-4 my-8">
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">🇺🇸 US Regulatory Framework</h4>
                  <p className="text-gray-300">
                    The US government has announced new guidelines for AI + Blockchain applications, 
                    providing clarity for businesses and encouraging innovation while ensuring security.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 border border-green-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">🇪🇺 EU Digital Innovation</h4>
                  <p className="text-gray-300">
                    The European Union has launched a €2 billion initiative to support AI + Blockchain 
                    projects, focusing on healthcare, finance, and environmental applications.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">🌏 Asian Innovation Hubs</h4>
                  <p className="text-gray-300">
                    Singapore, Japan, and South Korea have established regulatory sandboxes for AI + 
                    Blockchain testing, attracting billions in investment and innovation.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">📊 Investment and Market Trends</h2>
              
              <p>
                The market is showing strong growth and investor confidence:
              </p>

              <ul className="space-y-3 text-gray-300 my-6">
                <li><strong>$15.7 billion</strong> invested in AI + Blockchain startups in 2024</li>
                <li><strong>340% increase</strong> in patent filings for AI + Blockchain applications</li>
                <li><strong>2,500+ companies</strong> actively developing AI + Blockchain solutions</li>
                <li><strong>45% annual growth</strong> in the AI + Blockchain market size</li>
                <li><strong>180+ countries</strong> with active AI + Blockchain projects</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">🔮 What&apos;s Coming Next</h2>
              
              <p>
                Based on current trends, we can expect:
              </p>

              <ul className="space-y-3 text-gray-300 my-6">
                <li><strong>Quantum-Resistant Blockchains:</strong> New security standards for the quantum computing era</li>
                <li><strong>AI Governance Tokens:</strong> Decentralized decision-making for AI systems</li>
                <li><strong>Cross-Chain AI Networks:</strong> Seamless AI operations across multiple blockchains</li>
                <li><strong>Green AI + Blockchain:</strong> Energy-efficient solutions for sustainability</li>
                <li><strong>AI-Powered DAOs:</strong> Autonomous organizations with intelligent decision-making</li>
              </ul>

              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Tomorrow&apos;s Preview:</h3>
                <p className="text-gray-200">
                  With all this rapid development, what does the future hold? Tomorrow we&apos;ll explore 
                  future trends and predictions for the AI + Blockchain landscape.
                </p>
              </div>

              <p className="text-lg font-medium text-blue-300 mt-8">
                The future is being built today, and it&apos;s more exciting than ever! 🚀
              </p>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-800">
            <button
              onClick={() => router.push('/company-file/blog/ai/challenges-limitations')}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous: Day 7 - Challenges and Limitations
            </button>
            <button
              onClick={() => router.push('/company-file/blog/ai/future-trends')}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Next: Day 9 - Future Trends
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
