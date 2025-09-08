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
              alt="Case Studies"
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
              <span>Aug 18, 2025</span>
              <span className="mx-2">•</span>
              <span>6 min read</span>
              <span className="mx-2">•</span>
              <span>Barbarika Labs</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{
              fontFamily: 'var(--font-tourney), sans-serif',
              background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Day 12: Case Studies
            </h1>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-8 text-lg" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <p className="text-2xl text-gray-200 font-medium mb-10">
                In-depth analysis of successful AI + Blockchain implementations.
              </p>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">Learning from Success Stories</h2>
              
              <p>
                Theory is great, but nothing beats real-world examples! Today we&apos;ll dive deep into 
                successful AI + Blockchain implementations to understand how these technologies work 
                together in practice and what makes them successful.
              </p>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">Case Study 1: Healthcare Revolution</h2>
              
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Project: MedChain AI</h3>
                <p className="text-gray-300 mb-4">
                  A consortium of hospitals implemented an AI + Blockchain system for patient data 
                  management and diagnosis assistance.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-200 mb-2">AI Component:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Diagnostic assistance algorithms</li>
                      <li>• Treatment recommendation engine</li>
                      <li>• Risk prediction models</li>
                      <li>• Drug interaction checker</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-200 mb-2">Blockchain Component:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Secure patient data storage</li>
                      <li>• Access control management</li>
                      <li>• Audit trail for all actions</li>
                      <li>• Inter-hospital data sharing</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-blue-900/30 rounded-lg">
                  <h4 className="font-semibold text-blue-200 mb-2">Results:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• 35% improvement in diagnostic accuracy</li>
                    <li>• 40% reduction in administrative costs</li>
                    <li>• 90% patient satisfaction with data control</li>
                    <li>• 60% faster inter-hospital data sharing</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">Case Study 2: Financial Innovation</h2>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-green-300 mb-3">Project: SmartBank AI</h3>
                <p className="text-gray-300 mb-4">
                  A major bank implemented AI + Blockchain for fraud detection and automated 
                  lending decisions.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-200 mb-2">AI Component:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Fraud detection algorithms</li>
                      <li>• Credit risk assessment</li>
                      <li>• Customer behavior analysis</li>
                      <li>• Market trend prediction</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-200 mb-2">Blockchain Component:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Immutable transaction records</li>
                      <li>• Smart contract automation</li>
                      <li>• Transparent audit trails</li>
                      <li>• Cross-border payment optimization</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-green-900/30 rounded-lg">
                  <h4 className="font-semibold text-green-200 mb-2">Results:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• 95% fraud detection accuracy</li>
                    <li>• 50% reduction in false positives</li>
                    <li>• 30% faster loan processing</li>
                    <li>• 25% reduction in operational costs</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">Case Study 3: Supply Chain Transformation</h2>
              
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Project: SupplyChain AI</h3>
                <p className="text-gray-300 mb-4">
                  A global manufacturing company implemented AI + Blockchain for supply chain 
                  optimization and product authenticity verification.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-purple-200 mb-2">AI Component:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Demand forecasting models</li>
                      <li>• Route optimization algorithms</li>
                      <li>• Quality control automation</li>
                      <li>• Predictive maintenance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-200 mb-2">Blockchain Component:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Product tracking from source</li>
                      <li>• Authenticity verification</li>
                      <li>• Supplier performance records</li>
                      <li>• Compliance documentation</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-purple-900/30 rounded-lg">
                  <h4 className="font-semibold text-purple-200 mb-2">Results:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• 45% improvement in demand forecasting</li>
                    <li>• 30% reduction in logistics costs</li>
                    <li>• 100% product authenticity verification</li>
                    <li>• 50% faster compliance reporting</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">Case Study 4: Marketing Innovation</h2>
              
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-red-300 mb-3">Project: AdChain AI</h3>
                <p className="text-gray-300 mb-4">
                  A digital marketing agency implemented AI + Blockchain for personalized 
                  advertising and transparent campaign tracking.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-red-200 mb-2">AI Component:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Customer behavior analysis</li>
                      <li>• Ad performance optimization</li>
                      <li>• Content personalization</li>
                      <li>• ROI prediction models</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-200 mb-2">Blockchain Component:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Transparent ad spend tracking</li>
                      <li>• User consent management</li>
                      <li>• Campaign performance verification</li>
                      <li>• Fair compensation for data sharing</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-red-900/30 rounded-lg">
                  <h4 className="font-semibold text-red-200 mb-2">Results:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• 40% improvement in ad performance</li>
                    <li>• 60% increase in customer engagement</li>
                    <li>• 100% transparency in ad spend</li>
                    <li>• 35% reduction in customer acquisition costs</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">Key Success Factors</h2>
              
              <p>
                Analyzing these case studies reveals common patterns that lead to success:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">Clear Problem Definition</h4>
                  <p className="text-sm text-gray-300">
                    Each successful project started with a specific, well-defined problem 
                    that AI + Blockchain could solve effectively.
                  </p>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">Stakeholder Buy-in</h4>
                  <p className="text-sm text-gray-300">
                    All projects had strong support from key stakeholders, including 
                    management, users, and technical teams.
                  </p>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Security-First Approach</h4>
                  <p className="text-sm text-gray-300">
                    Security and privacy were built into the systems from the beginning, 
                    not added as afterthoughts.
                  </p>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">Measurable Outcomes</h4>
                  <p className="text-sm text-gray-300">
                    Success was defined by concrete, measurable metrics that could 
                    demonstrate value to stakeholders.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">Lessons Learned</h2>
              
              <div className="space-y-4 my-8">
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">Start Small, Scale Smart</h4>
                  <p className="text-gray-300">
                    All successful projects began with pilot programs or limited scope, 
                    then expanded based on proven results and user feedback.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 border border-green-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">User-Centric Design</h4>
                  <p className="text-gray-300">
                    The most successful implementations focused on user experience and 
                    solving real user problems, not just showcasing technology.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Continuous Improvement</h4>
                  <p className="text-gray-300">
                    Successful projects implemented feedback loops and continuous 
                    improvement processes to adapt and evolve over time.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">Common Challenges and Solutions</h2>
              
              <div className="space-y-4 my-8">
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">Performance Issues</h4>
                  <p className="text-gray-300">
                    <strong>Challenge:</strong> AI models can be slow, blockchain networks can be congested<br/>
                    <strong>Solution:</strong> Use layer 2 solutions, optimize AI models, implement caching strategies
                  </p>
                </div>
                
                <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-orange-300 mb-3">Integration Complexity</h4>
                  <p className="text-gray-300">
                    <strong>Challenge:</strong> Connecting AI systems with blockchain networks<br/>
                    <strong>Solution:</strong> Use standardized APIs, implement proper error handling, build robust testing
                  </p>
                </div>
                
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-yellow-300 mb-3">User Adoption</h4>
                  <p className="text-gray-300">
                    <strong>Challenge:</strong> Getting users to adopt new systems<br/>
                    <strong>Solution:</strong> Provide training, ensure intuitive interfaces, demonstrate clear value
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">What These Cases Tell Us</h2>
              
              <p>
                These case studies demonstrate that AI + Blockchain is not just theoretical &mdash; 
                it&apos;s delivering real, measurable value across industries. The key is to:
              </p>

              <ul className="space-y-3 text-gray-300 my-6">
                <li><strong>Focus on solving real problems</strong> rather than just using cool technology</li>
                <li><strong>Start with pilot programs</strong> to prove value before scaling</li>
                <li><strong>Prioritize user experience</strong> and stakeholder buy-in</li>
                <li><strong>Build security and privacy</strong> into the foundation</li>
                <li><strong>Measure and communicate</strong> results clearly</li>
                <li><strong>Plan for continuous improvement</strong> and adaptation</li>
              </ul>

              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Tomorrow&apos;s Preview:</h3>
                <p className="text-gray-200">
                  Ready to hear from the experts? Tomorrow we&apos;ll feature interviews and expert 
                  opinions from industry leaders who are shaping the future of AI + Blockchain.
                </p>
              </div>

              <p className="text-lg font-medium text-blue-300 mt-8">
                Success leaves clues &mdash; learn from those who&apos;ve already achieved it!
              </p>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-10 border-t border-gray-800">
            <button
              onClick={() => router.push('/company-file/blog/ai/practical-tips-beginners')}
              className="flex items-center text-lg text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous: Day 11 - Practical Tips for Beginners
            </button>
            <button
              onClick={() => router.push('/company-file/blog/ai/interviews-expert-opinions')}
              className="flex items-center text-lg text-blue-400 hover:text-blue-300 transition-colors"
            >
              Next: Day 13 - Interviews or Expert Opinions
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
