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
            className="mb-8 flex items-center text-lg text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to AI + Blockchain Series
          </button>

          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden rounded-xl mb-8">
            <Image
              src="/hero.png"
              alt="Real-World Examples"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center text-base text-gray-400 mb-6">
              <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-blue-900/50 text-blue-300 mr-4">
                Technology
              </span>
              <span>Aug 11, 2025</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
              <span className="mx-2">•</span>
              <span>Barbarika Labs</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{
              fontFamily: 'var(--font-tourney), sans-serif',
              background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Day 5: Real-World Examples
            </h1>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-8 text-lg" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <p className="text-2xl text-gray-200 font-medium mb-10">
                Examine real companies and projects using AI + Blockchain.
              </p>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">Seeing is Believing</h2>
              
              <p>
                Now that we understand the theory behind AI + Blockchain synergy, let&apos;s look at real companies 
                and projects that are already making this combination work in the real world. These aren&apos;t 
                just concepts &mdash; they&apos;re solutions that are actively improving lives and businesses today.
              </p>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">🏥 Healthcare Revolution</h2>
              
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Patientory</h3>
                <p className="text-gray-300">
                  This company combines AI-powered health analytics with blockchain-secured patient data. 
                  AI analyzes medical records to provide personalized health insights, while blockchain ensures 
                  patient privacy and data ownership. Patients control who accesses their information, and 
                  AI insights are transparent and auditable.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">🏦 Financial Innovation</h2>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-green-300 mb-3">Numerai</h3>
                <p className="text-gray-300">
                  A hedge fund that uses AI to make investment decisions while blockchain ensures transparency. 
                  AI models analyze market data to predict stock movements, and blockchain records all decisions 
                  and outcomes, creating a transparent and accountable investment system.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">📦 Supply Chain Transparency</h2>
              
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">IBM Food Trust</h3>
                <p className="text-gray-300">
                  IBM combines AI and blockchain to track food from farm to table. AI analyzes supply chain 
                  data to optimize logistics and detect potential contamination, while blockchain provides 
                  immutable records of every step in the journey. This helps ensure food safety and authenticity.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">🎯 Marketing & Advertising</h2>
              
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-red-300 mb-3">Brave Browser</h3>
                <p className="text-gray-300">
                  Brave uses AI to analyze user behavior and provide personalized content while blockchain 
                  ensures user privacy and data ownership. Users can choose to share their data and get 
                  rewarded with cryptocurrency, creating a fair and transparent advertising ecosystem.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">🚗 Transportation & Mobility</h2>
              
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-yellow-300 mb-3">IOTA Foundation</h3>
                <p className="text-gray-300">
                  IOTA combines AI and blockchain for autonomous vehicle networks. AI powers self-driving 
                  capabilities and traffic optimization, while blockchain creates a secure network for vehicles 
                  to share data, coordinate routes, and process micropayments for services.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">Key Success Factors</h2>
              
              <p>
                What makes these projects successful? They all share common characteristics:
              </p>

              <ul className="space-y-3 text-gray-300 my-6">
                <li><strong>Clear Problem Definition:</strong> Each solves a specific, real-world problem</li>
                <li><strong>User-Centric Design:</strong> Focus on user experience and value delivery</li>
                <li><strong>Scalable Architecture:</strong> Built to grow and adapt over time</li>
                <li><strong>Regulatory Compliance:</strong> Work within existing legal frameworks</li>
                <li><strong>Community Engagement:</strong> Involve stakeholders in development</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">What This Means for You</h2>
              
              <p>
                These examples show that AI + Blockchain isn&apos;t just theoretical &mdash; it&apos;s practical, 
                profitable, and already changing industries. Whether you&apos;re an entrepreneur, developer, 
                or business leader, there are opportunities to apply these technologies in your field.
              </p>

              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Tomorrow&apos;s Preview:</h3>
                <p className="text-gray-200">
                  Now that we&apos;ve seen the real-world impact, tomorrow we&apos;ll explore the specific benefits 
                  that AI + Blockchain brings to businesses and society. Get ready to understand the concrete 
                  value these technologies create!
                </p>
              </div>

              <p className="text-lg font-medium text-blue-300 mt-8">
                The future is already here &mdash; and it&apos;s more exciting than we imagined! 🌟
              </p>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-10 border-t border-gray-800">
            <button
              onClick={() => router.push('/company-file/blog/ai/ai-blockchain-synergy')}
              className="flex items-center text-lg text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous: Day 4 - Why Combine AI and Blockchain?
            </button>
            <button
              onClick={() => router.push('/company-file/blog/ai/benefits-businesses-society')}
              className="flex items-center text-lg text-blue-400 hover:text-blue-300 transition-colors"
            >
              Next: Day 6 - Benefits for Businesses and Society
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
