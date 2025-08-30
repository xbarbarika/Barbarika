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
              alt="Challenges and Limitations"
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
              <span>Aug 13, 2025</span>
              <span className="mx-2">•</span>
              <span>4 min read</span>
              <span className="mx-2">•</span>
              <span>Barbarika Labs</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900" style={{
              fontFamily: 'var(--font-tourney), sans-serif'
            }}>
              Day 7: Challenges and Limitations
            </h1>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-8 text-lg" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <p className="text-2xl text-gray-800 font-medium mb-10">
                Understanding the obstacles and constraints in AI + Blockchain adoption.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">The Reality Check</h2>
              
              <p>
                While AI + Blockchain offers incredible potential, it&apos;s important to understand the challenges 
                and limitations. Every technology has trade-offs, and being aware of these helps us make better 
                decisions and build more realistic expectations.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Technical Challenges</h2>
              
              <div className="space-y-6 my-8">
                <div className="bg-gray-50 border-l-4 border-gray-400 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Scalability Issues</h4>
                  <p className="text-gray-700">
                    Blockchain networks can struggle with high transaction volumes, while AI models require 
                    massive computational resources. Combining both can create performance bottlenecks.
                  </p>
                </div>
                
                <div className="bg-gray-50 border-l-4 border-gray-400 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Interoperability Problems</h4>
                  <p className="text-gray-700">
                    Different blockchain networks and AI systems often don&apos;t communicate well together, 
                    requiring complex integration solutions.
                  </p>
                </div>
                
                <div className="bg-gray-50 border-l-4 border-gray-400 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Data Quality Issues</h4>
                  <p className="text-gray-700">
                    AI is only as good as its training data. If blockchain data is incomplete or inaccurate, 
                    AI decisions will be flawed.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Economic Limitations</h2>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">High Implementation Costs</h4>
                  <p className="text-sm text-gray-700">
                    Developing and deploying AI + Blockchain solutions requires significant investment 
                    in technology, talent, and infrastructure.
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Long ROI Timeline</h4>
                  <p className="text-sm text-gray-700">
                    The benefits of AI + Blockchain often take years to materialize, requiring 
                    patience and sustained investment.
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Uncertain Market Demand</h4>
                  <p className="text-sm text-gray-700">
                    Many AI + Blockchain applications are still experimental, making it difficult 
                    to predict market adoption and revenue.
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Maintenance Costs</h4>
                  <p className="text-sm text-gray-700">
                    Ongoing costs for system updates, security patches, and performance optimization 
                    can be substantial over time.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Regulatory and Legal Hurdles</h2>
              
              <div className="space-y-4 my-8">
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Unclear Regulations</h4>
                  <p className="text-gray-700">
                    Many countries lack clear regulations for AI and blockchain, creating uncertainty 
                    about compliance requirements and legal risks.
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Cross-Border Complexity</h4>
                  <p className="text-gray-700">
                    Different jurisdictions have different rules, making global AI + Blockchain 
                    applications legally complex and expensive to implement.
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Liability Issues</h4>
                  <p className="text-gray-700">
                    When AI makes decisions based on blockchain data, determining responsibility 
                    for errors or failures becomes legally complex.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Human and Social Challenges</h2>
              
              <div className="space-y-4 my-8">
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Skills Gap</h4>
                  <p className="text-gray-700">
                    There&apos;s a severe shortage of professionals who understand both AI and blockchain, 
                    making it difficult to find qualified talent.
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Resistance to Change</h4>
                  <p className="text-gray-700">
                    Organizations and individuals often resist adopting new technologies, especially 
                    when they disrupt existing workflows and power structures.
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Privacy Concerns</h4>
                  <p className="text-gray-700">
                    While blockchain provides transparency, this can conflict with privacy requirements, 
                    especially in regulated industries like healthcare and finance.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Future Limitations</h2>
              
              <p>
                Looking ahead, we also face some fundamental limitations:
              </p>

              <ul className="space-y-3 text-gray-700 my-6">
                <li><strong>Computational Limits:</strong> Current hardware may not be sufficient for advanced AI + Blockchain applications</li>
                <li><strong>Energy Constraints:</strong> Both technologies are energy-intensive, raising sustainability concerns</li>
                <li><strong>Centralization Pressure:</strong> Market forces may push toward centralized solutions, defeating decentralization goals</li>
                <li><strong>Innovation Plateau:</strong> We may reach limits in what AI + Blockchain can achieve together</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Overcoming Challenges</h2>
              
              <p>
                While these challenges are real, they're not insurmountable. Many are being addressed through:
              </p>

              <ul className="space-y-3 text-gray-700 my-6">
                <li><strong>Layer 2 Solutions:</strong> Scaling solutions for blockchain networks</li>
                <li><strong>Federated Learning:</strong> AI training that preserves privacy</li>
                <li><strong>Regulatory Sandboxes:</strong> Safe environments for testing new approaches</li>
                <li><strong>Industry Standards:</strong> Common frameworks for interoperability</li>
                <li><strong>Education Programs:</strong> Training the next generation of professionals</li>
              </ul>

              <div className="bg-gray-50 border border-gray-200 p-6 my-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Tomorrow&apos;s Preview:</h3>
                <p className="text-gray-700">
                  Despite these challenges, progress continues rapidly. Tomorrow we&apos;ll explore recent 
                  developments and news in the AI + Blockchain space to see how these obstacles are being overcome.
                </p>
              </div>

              <p className="text-lg font-medium text-gray-800 mt-8">
                Understanding challenges helps us build better solutions!
              </p>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-10 border-t border-gray-300">
            <button
              onClick={() => router.push('/company-file/blog/ai/benefits-businesses-society')}
              className="flex items-center text-lg text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous: Day 6 - Benefits for Businesses and Society
            </button>
            <button
              onClick={() => router.push('/company-file/blog/ai/recent-developments-news')}
              className="flex items-center text-lg text-gray-600 hover:text-gray-800 transition-colors"
            >
              Next: Day 8 - Recent Developments and News
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
