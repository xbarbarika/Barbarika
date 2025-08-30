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
              alt="Practical Tips for Beginners"
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
              <span>Aug 17, 2025</span>
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
              Day 11: Practical Tips for Beginners
            </h1>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-6" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <p className="text-xl text-gray-200 font-medium mb-8">
                Actionable advice for those starting their AI + Blockchain journey.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">🚀 Ready to Get Started?</h2>
              
              <p>
                Now that you understand the theory, let&apos;s get practical! Here are actionable tips 
                and resources to help you begin your AI + Blockchain journey, whether you&apos;re a 
                developer, business professional, or just curious about the technology.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">📚 Learning Path for Beginners</h2>
              
              <div className="space-y-6 my-8">
                <div className="bg-blue-900/20 border-l-4 border-blue-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">Phase 1: Foundation (2-3 months)</h4>
                  <p className="text-gray-300">
                    Start with Python programming basics, then learn machine learning fundamentals. 
                    Simultaneously, study blockchain concepts and try building simple smart contracts.
                  </p>
                </div>
                
                <div className="bg-green-900/20 border-l-4 border-green-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-green-300 mb-2">Phase 2: Integration (3-4 months)</h4>
                  <p className="text-gray-300">
                    Learn how to connect AI models with blockchain networks. Practice with 
                    real-world datasets and testnet environments.
                  </p>
                </div>
                
                <div className="bg-purple-900/20 border-l-4 border-purple-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">Phase 3: Projects (2-3 months)</h4>
                  <p className="text-gray-300">
                    Build your own AI + Blockchain applications. Start simple and gradually 
                    increase complexity as you gain confidence.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">🛠️ Essential Tools and Platforms</h2>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">🤖 AI Development</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Python (3.8+)</li>
                    <li>• Jupyter Notebooks</li>
                    <li>• TensorFlow/PyTorch</li>
                    <li>• Scikit-learn</li>
                    <li>• Google Colab (free)</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">⛓️ Blockchain Development</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• MetaMask wallet</li>
                    <li>• Remix IDE</li>
                    <li>• Hardhat framework</li>
                    <li>• Ganache (local blockchain)</li>
                    <li>• OpenZeppelin contracts</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">🔗 Integration Tools</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Web3.js/ethers.js</li>
                    <li>• Chainlink oracles</li>
                    <li>• IPFS for data storage</li>
                    <li>• The Graph for indexing</li>
                    <li>• OpenZeppelin Defender</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">📊 Learning Resources</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Coursera/Udemy courses</li>
                    <li>• YouTube channels</li>
                    <li>• GitHub repositories</li>
                    <li>• Discord communities</li>
                    <li>• Stack Overflow</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">💡 Practical Tips for Success</h2>
              
              <div className="space-y-4 my-8">
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">🎯 Start Small and Iterate</h4>
                  <p className="text-gray-300">
                    Don&apos;t try to build the next big thing immediately. Start with simple projects 
                    like a basic prediction market or a simple AI model that stores results on blockchain.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 border border-green-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">🧪 Use Testnets First</h4>
                  <p className="text-gray-300">
                    Always develop and test on blockchain testnets before deploying to mainnet. 
                    This saves money and helps you learn without financial risk.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">🔒 Security First Approach</h4>
                  <p className="text-gray-300">
                    Security is critical in both AI and blockchain. Always validate inputs, 
                    test thoroughly, and consider using established security frameworks.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">🚀 Beginner Project Ideas</h2>
              
              <div className="space-y-4 my-8">
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">📊 Simple Prediction Market</h4>
                  <p className="text-gray-300">
                    Build a basic prediction market where users can bet on outcomes, with AI 
                    analyzing historical data to provide insights.
                  </p>
                </div>
                
                <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-orange-300 mb-3">🎨 AI-Generated NFT Creator</h4>
                  <p className="text-gray-300">
                    Create an AI system that generates unique artwork, then mint it as NFTs 
                    on a blockchain with verifiable ownership.
                  </p>
                </div>
                
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-yellow-300 mb-3">🏥 Health Data Verifier</h4>
                  <p className="text-gray-300">
                    Build a system that uses AI to analyze health data while storing verified 
                    results on blockchain for secure sharing.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">🌐 Community and Networking</h2>
              
              <p>
                Don&apos;t learn in isolation! Connect with others in the space:
              </p>

              <ul className="space-y-3 text-gray-300 my-6">
                <li><strong>Discord Servers:</strong> Join AI and blockchain communities for real-time discussions</li>
                <li><strong>GitHub:</strong> Contribute to open-source projects and learn from others&apos; code</li>
                <li><strong>Meetups:</strong> Attend local or virtual meetups to network with professionals</li>
                <li><strong>Hackathons:</strong> Participate in AI + Blockchain hackathons to build and learn</li>
                <li><strong>Twitter:</strong> Follow thought leaders and stay updated with latest developments</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">⚠️ Common Beginner Mistakes to Avoid</h2>
              
              <div className="space-y-4 my-8">
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">🚫 Overcomplicating</h4>
                  <p className="text-gray-300">
                    Start simple! Many beginners try to build complex systems before mastering 
                    the basics, leading to frustration and failure.
                  </p>
                </div>
                
                <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-orange-300 mb-3">💰 Ignoring Costs</h4>
                  <p className="text-gray-300">
                    Blockchain transactions cost money. Always test on testnets first and 
                    understand gas fees before deploying to mainnet.
                  </p>
                </div>
                
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-yellow-300 mb-3">🔒 Neglecting Security</h4>
                  <p className="text-gray-300">
                    Security should be built-in from the start, not added later. Use established 
                    patterns and always validate inputs.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">📈 Measuring Your Progress</h2>
              
              <p>
                Track your learning journey with these milestones:
              </p>

              <ul className="space-y-3 text-gray-300 my-6">
                <li><strong>Week 1-2:</strong> Set up development environment and complete first tutorials</li>
                <li><strong>Month 1:</strong> Build first simple AI model and deploy first smart contract</li>
                <li><strong>Month 2-3:</strong> Complete first integration project</li>
                <li><strong>Month 4-6:</strong> Build portfolio project and contribute to open source</li>
                <li><strong>Month 6+:</strong> Apply for jobs or start freelance work</li>
              </ul>

              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Tomorrow&apos;s Preview:</h3>
                <p className="text-gray-200">
                  Ready to see these tips in action? Tomorrow we&apos;ll explore detailed case studies 
                  of successful AI + Blockchain implementations to inspire your own projects.
                </p>
              </div>

              <p className="text-lg font-medium text-blue-300 mt-8">
                The journey of a thousand miles begins with a single step! 🚀
              </p>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-800">
            <button
              onClick={() => router.push('/company-file/blog/ai/qa-highlights-recap')}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous: Day 10 - Q&A or Highlights (Recap)
            </button>
            <button
              onClick={() => router.push('/company-file/blog/ai/case-studies')}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Next: Day 12 - Case Studies
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
