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
              alt="Introduction to AI + Blockchain"
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
              <span>Aug 7, 2025</span>
              <span className="mx-2">•</span>
              <span>2 min read</span>
              <span className="mx-2">•</span>
              <span>Barbarika Labs</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{
              fontFamily: 'var(--font-tourney), sans-serif',
              background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Day 1: Introduction and Basics
            </h1>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-6" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <p className="text-xl text-gray-200 font-medium mb-8">
                Welcome to the Journey! Starting something new can be exciting — and sometimes a bit overwhelming.
              </p>

              <p>
                In the coming days, we&apos;ll break down the fascinating world of Artificial Intelligence (AI) and Blockchain, 
                not only as individual technologies but as a powerful combination shaping the future. This first post is all 
                about understanding what our journey will look like and how you, even as a beginner, can confidently explore 
                these topics.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">What Are We Doing on Day 1?</h2>
              
              <p>
                Today, we focus on two things:
              </p>

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 my-8">
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>Getting curious:</strong> We&apos;ll start by asking, &quot;What is AI?&quot; and &quot;What is Blockchain?&quot; in the simplest terms.</li>
                  <li>• <strong>Planning ahead:</strong> We&apos;ll create a roadmap for our blog series, so you always know what&apos;s coming next.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">What is Artificial Intelligence (AI)?</h2>
              
              <p>
                Think of AI as teaching computers to learn, adapt, and make decisions — just like people do! AI is behind 
                everyday things, from online shopping recommendations and virtual assistants (like Siri and Alexa) to self-driving cars. 
                The goal of AI is to help machines recognize patterns and solve problems, making life easier and work faster.
              </p>

              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-green-300 mb-3">Example:</h3>
                <p className="text-gray-300">
                  Imagine Netflix suggesting movies you might like. That&apos;s AI, learning your tastes and offering up choices.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">What is Blockchain?</h2>
              
              <p>
                Blockchain is more like a super-secure online notebook. But instead of one person controlling it, lots of people 
                share the same copy. Once something is written in this notebook (the &quot;blockchain&quot;), nobody can change or erase it. 
                This makes it nearly tamper-proof. It&apos;s the technology behind digital coins like Bitcoin, but it&apos;s useful far beyond that!
              </p>

              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Example:</h3>
                <p className="text-gray-300">
                  If you transfer money to a friend using blockchain, the transaction is recorded in a way that everyone can see, 
                  and nobody can secretly change it.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Are These Technologies Important Together?</h2>
              
              <p>
                AI is great at crunching massive amounts of data, but it needs data that&apos;s trustworthy. Blockchain keeps data 
                safe and reliable. Together, they can make systems that are both smart and secure. We&apos;ll explore this partnership 
                in detail throughout the series!
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Blog Roadmap</h2>
              
              <p>
                Here&apos;s the journey we&apos;ll take over the next 15 days:
              </p>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 my-8">
                <ol className="space-y-2 text-gray-300">
                  <li>1. Introduction and Basics (Today)</li>
                  <li>2. Deep Dive: What is AI?</li>
                  <li>3. Deep Dive: What is Blockchain?</li>
                  <li>4. Why Combine AI and Blockchain?</li>
                  <li>5. Real-World Examples</li>
                  <li>6. Benefits for Businesses and Society</li>
                  <li>7. Challenges and Limitations</li>
                  <li>8. Recent Developments and News</li>
                  <li>9. Future Trends</li>
                  <li>10. Q&A or Highlights (Recap)</li>
                  <li>11. Practical Tips for Beginners</li>
                  <li>12. Case Studies</li>
                  <li>13. Interviews or Expert Opinions</li>
                  <li>14. Writing and Review Day</li>
                  <li>15. Final Polish and Publish!</li>
                </ol>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Wrap Up</h2>
              
              <p>
                Congratulations you&apos;ve just taken the first step! Keep following as we unravel these technologies together, 
                always using simple words, relatable stories, and real-life examples. Got questions about AI or blockchain already? 
                Drop them in the comments, and I&apos;ll be sure to include answers in upcoming posts!
              </p>

              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Next Up:</h3>
                <p className="text-gray-200">
                  Tomorrow, we&apos;ll make AI even simpler. Stay tuned!
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4 my-8">
                <h4 className="font-semibold text-white mb-2">Keywords:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-900/50 text-blue-300">AI</span>
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-green-900/50 text-green-300">Blockchain</span>
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-purple-900/50 text-purple-300">Blockchain Technology</span>
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-yellow-900/50 text-yellow-300">Technology</span>
                </div>
              </div>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-800">
            <div className="text-gray-500">
              Previous: Series Start
            </div>
            <button
              onClick={() => router.push('/company-file/blog/ai/AI-deep-dive')}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Next: Day 2 - Deep Dive: What is AI?
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
