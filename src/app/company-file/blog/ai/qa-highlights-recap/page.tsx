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
              alt="Q&A or Highlights (Recap)"
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
              <span>Aug 16, 2025</span>
              <span className="mx-2">•</span>
              <span>3 min read</span>
              <span className="mx-2">•</span>
              <span>Barbarika Labs</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{
              fontFamily: 'var(--font-tourney), sans-serif',
              background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Day 10: Q&A or Highlights (Recap)
            </h1>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-8 text-lg" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <p className="text-2xl text-gray-200 font-medium mb-10">
                A comprehensive review and answers to common questions.
              </p>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">🎯 Journey Recap: What We&apos;ve Learned</h2>
              
              <p>
                We&apos;ve covered a lot of ground in our AI + Blockchain journey! Let&apos;s take a moment 
                to reflect on the key insights and answer some common questions that have emerged.
              </p>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">📚 Key Takeaways from Our Journey</h2>
              
              <div className="space-y-6 my-8">
                <div className="bg-blue-900/20 border-l-4 border-blue-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">Day 1-3: Foundation Building</h4>
                  <p className="text-gray-300">
                    We established that AI is about intelligent decision-making, blockchain provides 
                    trust and transparency, and together they create powerful synergies.
                  </p>
                </div>
                
                <div className="bg-green-900/20 border-l-4 border-green-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-green-300 mb-2">Day 4-5: Synergy & Examples</h4>
                  <p className="text-gray-300">
                    We explored how AI + Blockchain complement each other and saw real-world 
                    applications already transforming industries.
                  </p>
                </div>
                
                <div className="bg-purple-900/20 border-l-4 border-purple-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">Day 6-7: Benefits & Challenges</h4>
                  <p className="text-gray-300">
                    We examined concrete benefits like cost reduction and efficiency, while 
                    honestly addressing technical and regulatory challenges.
                  </p>
                </div>
                
                <div className="bg-red-900/20 border-l-4 border-red-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-red-300 mb-2">Day 8-9: News & Future</h4>
                  <p className="text-gray-300">
                    We caught up on recent developments and explored exciting future trends 
                    that will shape the next decade.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">❓ Frequently Asked Questions</h2>
              
              <div className="space-y-6 my-8">
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">Q: Is AI + Blockchain just a buzzword?</h4>
                  <p className="text-gray-300">
                    <strong>A:</strong> No! While the term is popular, the combination is already delivering 
                    real value. Companies are seeing 20-40% cost reductions and significant efficiency 
                    improvements in production environments.
                  </p>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">Q: How long until this becomes mainstream?</h4>
                  <p className="text-gray-300">
                    <strong>A:</strong> We&apos;re already seeing mainstream adoption in finance and healthcare. 
                    Expect widespread enterprise adoption within 2-3 years, with consumer applications 
                    following shortly after.
                  </p>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Q: What skills do I need to work in this field?</h4>
                  <p className="text-gray-300">
                    <strong>A:</strong> Focus on understanding both technologies individually first. Learn 
                    Python for AI, Solidity for blockchain, and study how they integrate. Soft skills 
                    like problem-solving and adaptability are equally important.
                  </p>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">Q: Are there job opportunities in this space?</h4>
                  <p className="text-gray-300">
                    <strong>A:</strong> Absolutely! The demand for AI + Blockchain professionals is growing 
                    300% annually. Roles include developers, consultants, researchers, and business 
                    strategists.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">💡 Key Insights to Remember</h2>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">🔗 Synergy Principle</h4>
                  <p className="text-sm text-gray-300">
                    AI provides intelligence, blockchain provides trust. Together they create 
                    systems that are both smart and secure.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 border border-green-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">⚡ Real Impact</h4>
                  <p className="text-sm text-gray-300">
                    This isn&apos;t theoretical &mdash; real companies are already achieving 
                    measurable results with AI + Blockchain solutions.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">🌍 Global Scale</h4>
                  <p className="text-sm text-gray-300">
                    The impact extends beyond technology to social change, financial inclusion, 
                    and environmental sustainability.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">🎯 Future Focus</h4>
                  <p className="text-sm text-gray-300">
                    The next decade will see AI + Blockchain transform every major industry, 
                    creating new opportunities and challenges.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">🚀 What&apos;s Next for You?</h2>
              
              <p>
                Now that you have a solid foundation, consider these next steps:
              </p>

              <ul className="space-y-3 text-gray-300 my-6">
                <li><strong>Deepen Your Knowledge:</strong> Choose one area (AI or blockchain) to specialize in</li>
                <li><strong>Build Something:</strong> Create a simple project combining both technologies</li>
                <li><strong>Join Communities:</strong> Connect with others in the AI + Blockchain space</li>
                <li><strong>Stay Updated:</strong> Follow industry news and developments</li>
                <li><strong>Apply Your Learning:</strong> Look for opportunities to use this knowledge in your work</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">🎉 Congratulations!</h2>
              
              <p>
                You&apos;ve completed a comprehensive journey through the fascinating world of AI + Blockchain! 
                You now understand not just what these technologies are, but how they work together, 
                their real-world applications, and their future potential.
              </p>

              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Tomorrow&apos;s Preview:</h3>
                <p className="text-gray-200">
                  Ready to put your knowledge into action? Tomorrow we&apos;ll provide practical tips 
                  for beginners who want to start working with AI + Blockchain technologies.
                </p>
              </div>

              <p className="text-lg font-medium text-blue-300 mt-8">
                Knowledge is power, and you now have the power to shape the future! 🌟
              </p>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-10 border-t border-gray-800">
            <button
              onClick={() => router.push('/company-file/blog/ai/future-trends')}
              className="flex items-center text-lg text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous: Day 9 - Future Trends
            </button>
            <button
              onClick={() => router.push('/company-file/blog/ai/practical-tips-beginners')}
              className="flex items-center text-lg text-blue-400 hover:text-blue-300 transition-colors"
            >
              Next: Day 11 - Practical Tips for Beginners
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
