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
              alt="Benefits for Businesses and Society"
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
              <span>Aug 12, 2025</span>
              <span className="mx-2">•</span>
              <span>4 min read</span>
              <span className="mx-2">•</span>
              <span>Barbarika Labs</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900" style={{
              fontFamily: 'var(--font-tourney), sans-serif'
            }}>
              Day 6: Benefits for Businesses and Society
            </h1>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-8 text-lg" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <p className="text-2xl text-gray-800 font-medium mb-10">
                Discover how AI + Blockchain creates value for organizations and communities.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">The Value Proposition</h2>
              
              <p>
                Now that we&apos;ve seen real-world examples, let&apos;s dive deeper into the concrete benefits 
                that AI + Blockchain brings to businesses and society. This isn&apos;t just about cool technology 
                — it&apos;s about solving real problems and creating measurable value.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Business Benefits</h2>
              
              <div className="space-y-6 my-8">
                <div className="bg-gray-50 border-l-4 border-gray-400 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Cost Reduction</h4>
                  <p className="text-gray-700">
                    AI automates complex processes while blockchain eliminates intermediaries, reducing 
                    operational costs by 20-40% in many industries.
                  </p>
                </div>
                
                <div className="bg-gray-50 border-l-4 border-gray-400 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Increased Efficiency</h4>
                  <p className="text-gray-700">
                    Automated decision-making and transparent processes reduce delays and improve 
                    overall operational efficiency.
                  </p>
                </div>
                
                <div className="bg-gray-50 border-l-4 border-gray-400 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Enhanced Security</h4>
                  <p className="text-gray-700">
                    Blockchain&apos;s immutability combined with AI&apos;s threat detection creates 
                    robust security systems that are nearly impossible to breach.
                  </p>
                </div>
                
                <div className="bg-gray-50 border-l-4 border-gray-400 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Better Decision Making</h4>
                  <p className="text-gray-700">
                    AI analyzes blockchain-verified data to provide insights that improve strategic 
                    planning and operational decisions.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Societal Benefits</h2>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Healthcare Access</h4>
                  <p className="text-sm text-gray-700">
                    AI-powered diagnostics with blockchain-secured medical records make healthcare 
                    more accessible and affordable worldwide.
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Financial Inclusion</h4>
                  <p className="text-sm text-gray-700">
                    Decentralized financial services powered by AI provide banking access to 
                    billions of unbanked individuals globally.
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Education</h4>
                  <p className="text-sm text-gray-700">
                    AI personalizes learning while blockchain verifies credentials, making 
                    education more accessible and credible.
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Environmental Impact</h4>
                  <p className="text-sm text-gray-700">
                    AI optimizes resource usage while blockchain tracks environmental impact, 
                    helping combat climate change.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Industry-Specific Benefits</h2>
              
              <div className="space-y-4 my-8">
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Manufacturing</h4>
                  <p className="text-gray-700">
                    AI predicts maintenance needs while blockchain tracks supply chain authenticity, 
                    reducing downtime and ensuring quality.
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Retail</h4>
                  <p className="text-gray-700">
                    AI personalizes customer experiences while blockchain ensures product authenticity, 
                    increasing sales and customer trust.
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Banking</h4>
                  <p className="text-gray-700">
                    AI detects fraud while blockchain provides transparent transactions, 
                    reducing financial crime and improving trust.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Measurable Impact</h2>
              
              <p>
                The benefits aren&apos;t just theoretical — they&apos;re measurable:
              </p>

              <ul className="space-y-3 text-gray-700 my-6">
                <li><strong>30-50% reduction</strong> in fraud and errors</li>
                <li><strong>40-60% improvement</strong> in process efficiency</li>
                <li><strong>25-35% cost savings</strong> in operational expenses</li>
                <li><strong>50-70% faster</strong> decision-making processes</li>
                <li><strong>90%+ improvement</strong> in data accuracy and trust</li>
              </ul>

              <div className="bg-gray-50 border border-gray-200 p-6 my-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Tomorrow&apos;s Preview:</h3>
                <p className="text-gray-700">
                  While the benefits are impressive, every technology has challenges and limitations. 
                  Tomorrow we&apos;ll explore the obstacles and constraints in AI + Blockchain adoption 
                  to give you a complete picture.
                </p>
              </div>

              <p className="text-lg font-medium text-gray-800 mt-8">
                The benefits are real, measurable, and already transforming industries!
              </p>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-10 border-t border-gray-300">
            <button
              onClick={() => router.push('/company-file/blog/ai/real-world-applications')}
              className="flex items-center text-lg text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous: Day 5 - Real-World Examples
            </button>
            <button
              onClick={() => router.push('/company-file/blog/ai/challenges-limitations')}
              className="flex items-center text-lg text-gray-600 hover:text-gray-800 transition-colors"
            >
              Next: Day 7 - Challenges and Limitations
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
