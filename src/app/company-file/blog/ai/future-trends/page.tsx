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
              alt="Future Trends"
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
              <span>Aug 15, 2025</span>
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
              Day 9: Future Trends
            </h1>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-8 text-lg" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <p className="text-2xl text-gray-200 font-medium mb-10">
                Explore what&apos;s coming next in the AI + Blockchain landscape.
              </p>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">Crystal Ball: The Next Decade</h2>
              
              <p>
                Based on current developments and expert predictions, let&apos;s explore the exciting trends 
                that will shape the AI + Blockchain landscape over the next 5-10 years. The future is 
                not just coming &mdash; it&apos;s being built right now!
              </p>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">2025-2027: The Integration Era</h2>
              
              <div className="space-y-6 my-8">
                <div className="bg-blue-900/20 border-l-4 border-blue-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">Seamless Interoperability</h4>
                  <p className="text-gray-300">
                    AI systems will seamlessly operate across multiple blockchain networks, creating 
                    unified ecosystems where data and intelligence flow freely between platforms.
                  </p>
                </div>
                
                <div className="bg-green-900/20 border-l-4 border-green-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-green-300 mb-2">AI-Powered DAOs</h4>
                  <p className="text-gray-300">
                    Decentralized Autonomous Organizations will become truly intelligent, with AI 
                    handling complex decision-making and governance processes.
                  </p>
                </div>
                
                <div className="bg-purple-900/20 border-l-4 border-purple-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">Privacy-First AI</h4>
                  <p className="text-gray-300">
                    Zero-knowledge proofs and homomorphic encryption will enable AI to learn from 
                    encrypted data without ever seeing the raw information.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">2028-2030: The Transformation Era</h2>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">Healthcare Revolution</h4>
                  <p className="text-sm text-gray-300">
                    AI + Blockchain will enable personalized medicine at scale, with secure genomic 
                    data analysis and automated treatment recommendations.
                  </p>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">Financial Democracy</h4>
                  <p className="text-sm text-gray-300">
                    Traditional banking will be replaced by AI-powered DeFi systems that provide 
                    better services at lower costs to everyone.
                  </p>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Global Governance</h4>
                  <p className="text-sm text-gray-300">
                    AI + Blockchain will enable new forms of global cooperation, from climate action 
                    to humanitarian aid distribution.
                  </p>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">Education Evolution</h4>
                  <p className="text-sm text-gray-300">
                    Learning will become truly personalized and lifelong, with AI tutors and 
                    blockchain-verified credentials accessible to everyone.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">2030+: The Singularity Era</h2>
              
              <div className="space-y-4 my-8">
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">Artificial General Intelligence</h4>
                  <p className="text-gray-300">
                    AGI systems will operate on decentralized networks, making decisions that benefit 
                    humanity while maintaining transparency and accountability.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 border border-green-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">Interplanetary Networks</h4>
                  <p className="text-gray-300">
                    AI + Blockchain will enable communication and commerce across planets, with 
                    intelligent systems managing resources and coordination.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Conscious Machines</h4>
                  <p className="text-gray-300">
                    The line between human and artificial consciousness may blur, with blockchain 
                    providing the framework for understanding and managing these new forms of intelligence.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">Industry-Specific Predictions</h2>
              
              <div className="space-y-4 my-8">
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">Manufacturing</h4>
                  <p className="text-gray-300">
                    Factories will become fully autonomous, with AI managing production and blockchain 
                    ensuring supply chain integrity. Human workers will focus on creativity and innovation.
                  </p>
                </div>
                
                <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-orange-300 mb-3">Creative Industries</h4>
                  <p className="text-gray-300">
                    AI will generate personalized content while blockchain ensures fair compensation 
                    for creators. New art forms and entertainment experiences will emerge.
                  </p>
                </div>
                
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-yellow-300 mb-3">Agriculture</h4>
                  <p className="text-gray-300">
                    Smart farms will use AI to optimize crop yields while blockchain tracks food 
                    from seed to table, ensuring sustainability and food security.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">Potential Challenges and Risks</h2>
              
              <p>
                With great power comes great responsibility. We must also consider potential risks:
              </p>

              <ul className="space-y-3 text-gray-300 my-6">
                <li><strong>Job Displacement:</strong> AI automation may eliminate many traditional jobs</li>
                <li><strong>Centralization Risk:</strong> Powerful AI systems could concentrate power</li>
                <li><strong>Security Vulnerabilities:</strong> Advanced AI could be weaponized</li>
                <li><strong>Ethical Dilemmas:</strong> Complex moral decisions by AI systems</li>
                <li><strong>Dependency Issues:</strong> Over-reliance on AI for critical decisions</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">Preparing for the Future</h2>
              
              <p>
                To thrive in this future, individuals and organizations should:
              </p>

              <ul className="space-y-3 text-gray-300 my-6">
                <li><strong>Develop AI Literacy:</strong> Understand how AI works and its limitations</li>
                <li><strong>Learn Blockchain Basics:</strong> Familiarize yourself with decentralized systems</li>
                <li><strong>Focus on Creativity:</strong> Develop skills that AI cannot easily replicate</li>
                <li><strong>Embrace Lifelong Learning:</strong> Stay updated with rapid technological changes</li>
                <li><strong>Build Ethical Awareness:</strong> Consider the social impact of new technologies</li>
              </ul>

              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Tomorrow&apos;s Preview:</h3>
                <p className="text-gray-200">
                  With all these future possibilities, it&apos;s time to reflect on what we&apos;ve learned. 
                  Tomorrow we&apos;ll have a Q&A session and recap the highlights of our journey.
                </p>
              </div>

              <p className="text-lg font-medium text-blue-300 mt-8">
                The future is not something we enter, it&apos;s something we create!
              </p>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-10 border-t border-gray-800">
            <button
              onClick={() => router.push('/company-file/blog/ai/recent-developments-news')}
              className="flex items-center text-lg text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous: Day 8 - Recent Developments and News
            </button>
            <button
              onClick={() => router.push('/company-file/blog/ai/qa-highlights-recap')}
              className="flex items-center text-lg text-blue-400 hover:text-blue-300 transition-colors"
            >
              Next: Day 10 - Q&A or Highlights (Recap)
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
