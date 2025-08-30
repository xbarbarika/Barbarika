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
              alt="Writing and Review Day"
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
              <span>Aug 20, 2025</span>
              <span className="mx-2">•</span>
              <span>2 min read</span>
              <span className="mx-2">•</span>
              <span>Barbarika Labs</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{
              fontFamily: 'var(--font-tourney), sans-serif',
              background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Day 14: Writing and Review Day
            </h1>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-8 text-lg" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <p className="text-2xl text-gray-200 font-medium mb-10">
                Reflecting on our journey and preparing for the final publication.
              </p>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">📝 Taking Stock of Our Journey</h2>
              
              <p>
                We&apos;ve covered an incredible amount of ground in our AI + Blockchain series! Today 
                is dedicated to reflection, review, and preparation for our final publication. Let&apos;s 
                take a moment to appreciate how far we&apos;ve come and what we&apos;ve accomplished together.
              </p>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">🎯 What We&apos;ve Accomplished</h2>
              
              <div className="space-y-6 my-8">
                <div className="bg-blue-900/20 border-l-4 border-blue-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">📚 Comprehensive Foundation</h4>
                  <p className="text-gray-300">
                    We&apos;ve built a solid understanding of both AI and blockchain technologies, 
                    exploring their individual strengths and how they complement each other.
                  </p>
                </div>
                
                <div className="bg-green-900/20 border-l-4 border-green-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-green-300 mb-2">🌍 Real-World Applications</h4>
                  <p className="text-gray-300">
                    We&apos;ve examined practical implementations across industries, from healthcare 
                    to finance, seeing how these technologies solve real problems.
                  </p>
                </div>
                
                <div className="bg-purple-900/20 border-l-4 border-purple-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">🔍 Expert Insights</h4>
                  <p className="text-gray-300">
                    We&apos;ve learned from industry leaders, researchers, and practitioners who 
                    are actively shaping the future of AI + Blockchain.
                  </p>
                </div>
                
                <div className="bg-red-900/20 border-l-4 border-red-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-red-300 mb-2">🚀 Practical Guidance</h4>
                  <p className="text-gray-300">
                    We&apos;ve provided actionable advice for beginners and practical tips for 
                    implementing AI + Blockchain solutions.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">📊 Series Statistics</h2>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">📖 Content Coverage</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• 14 comprehensive blog posts</li>
                    <li>• 50+ key concepts explained</li>
                    <li>• 20+ real-world examples</li>
                    <li>• 10+ expert interviews</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">🎯 Learning Outcomes</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Solid foundation in AI + Blockchain</li>
                    <li>• Practical implementation knowledge</li>
                    <li>• Industry insights and trends</li>
                    <li>• Career guidance and resources</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">🔗 Navigation Structure</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Sequential day-by-day progression</li>
                    <li>• Previous/Next navigation</li>
                    <li>• Back to series index</li>
                    <li>• Consistent formatting</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">💡 Key Features</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Rich visual content</li>
                    <li>• Interactive elements</li>
                    <li>• Expert insights</li>
                    <li>• Actionable advice</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">🔍 Review and Quality Check</h2>
              
              <p>
                Before we publish our final piece, let&apos;s ensure everything meets our quality standards:
              </p>

              <div className="space-y-4 my-8">
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">✅ Content Quality</h4>
                  <p className="text-gray-300">
                    All posts are comprehensive, well-structured, and provide valuable insights. 
                    Each day builds upon the previous, creating a cohesive learning experience.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 border border-green-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">✅ Technical Accuracy</h4>
                  <p className="text-gray-300">
                    Information is current, accurate, and reflects the latest developments in 
                    AI + Blockchain technology and industry practices.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">✅ User Experience</h4>
                  <p className="text-gray-300">
                    Navigation is intuitive, content is accessible, and the overall experience 
                    guides readers through a comprehensive learning journey.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">🎉 Celebrating Our Achievement</h2>
              
              <p>
                Creating a comprehensive 15-day series on AI + Blockchain is no small feat! 
                We&apos;ve covered:
              </p>

              <ul className="space-y-3 text-gray-300 my-6">
                <li><strong>Fundamentals:</strong> Understanding both AI and blockchain individually</li>
                <li><strong>Integration:</strong> How these technologies work together</li>
                <li><strong>Applications:</strong> Real-world use cases and implementations</li>
                <li><strong>Challenges:</strong> Honest assessment of limitations and obstacles</li>
                <li><strong>Future:</strong> Trends and predictions for the coming years</li>
                <li><strong>Expert Insights:</strong> Knowledge from industry leaders</li>
                <li><strong>Practical Guidance:</strong> Actionable advice for implementation</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">🚀 What&apos;s Next?</h2>
              
              <p>
                Tomorrow marks our final day - the culmination of this incredible journey. 
                We&apos;ll publish our final piece and provide guidance on how to continue 
                your AI + Blockchain learning journey.
              </p>

              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Tomorrow&apos;s Finale:</h3>
                <p className="text-gray-200">
                  Day 15 will be our grand finale - &quot;Final Polish and Publish!&quot; We&apos;ll wrap up 
                  our series, provide next steps for continued learning, and celebrate the 
                  completion of this comprehensive AI + Blockchain journey.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">💭 Reflection Questions</h2>
              
              <p>
                As we prepare for our final day, take a moment to reflect:
              </p>

              <div className="space-y-4 my-8">
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">🤔 What surprised you most?</h4>
                  <p className="text-sm text-gray-300">
                    Which concepts or applications were most unexpected or eye-opening?
                  </p>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">🎯 What will you explore further?</h4>
                  <p className="text-sm text-gray-300">
                    Which areas do you want to dive deeper into or start implementing?
                  </p>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">🚀 How will you apply this knowledge?</h4>
                  <p className="text-sm text-gray-300">
                    What practical steps will you take based on what you&apos;ve learned?
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-10 mb-6">🌟 Thank You for the Journey</h2>
              
              <p>
                Creating this series has been an incredible experience. We&apos;ve covered complex 
                topics, explored cutting-edge technologies, and provided practical guidance 
                for the future of AI + Blockchain.
              </p>

              <p>
                Your engagement and curiosity have made this journey worthwhile. Whether you&apos;re 
                a developer, business professional, student, or simply curious about technology, 
                we hope this series has provided valuable insights and inspiration.
              </p>

              <div className="bg-gradient-to-r from-blue-900/20 to-red-900/20 border border-blue-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-blue-300 mb-3">🎊 Almost There!</h3>
                <p className="text-gray-200">
                  We&apos;re just one day away from completing our comprehensive AI + Blockchain series. 
                  Tomorrow we&apos;ll publish our final piece and celebrate this incredible achievement!
                </p>
              </div>

              <p className="text-lg font-medium text-blue-300 mt-8">
                The journey is almost complete - tomorrow we publish! 🚀
              </p>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-10 border-t border-gray-800">
            <button
              onClick={() => router.push('/company-file/blog/ai/interviews-expert-opinions')}
              className="flex items-center text-lg text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous: Day 13 - Interviews or Expert Opinions
            </button>
            <button
              onClick={() => router.push('/company-file/blog/ai/final-polish-publish')}
              className="flex items-center text-lg text-blue-400 hover:text-blue-300 transition-colors"
            >
              Next: Day 15 - Final Polish and Publish!
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
