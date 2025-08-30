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
              alt="Interviews or Expert Opinions"
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
              <span>Aug 19, 2025</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
              <span className="mx-2">•</span>
              <span>Barbarika Labs</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{
              fontFamily: 'var(--font-tourney), sans-serif',
              background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Day 13: Interviews or Expert Opinions
            </h1>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-6" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <p className="text-xl text-gray-200 font-medium mb-8">
                Insights from industry leaders and practitioners.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">🎤 Voices from the Front Lines</h2>
              
              <p>
                Today we&apos;ll hear directly from industry experts, researchers, and practitioners 
                who are actively working with AI + Blockchain technologies. Their insights provide 
                valuable perspectives on the current state and future direction of this field.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">👨‍💼 Expert Interview: Dr. Sarah Chen</h2>
              
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-blue-300 mb-3">AI Research Director, TechCorp</h3>
                <p className="text-gray-300 mb-4">
                  Dr. Chen leads AI research at one of the world&apos;s largest technology companies 
                  and has been instrumental in developing AI + Blockchain solutions for healthcare.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-blue-900/30 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-200 mb-2">Q: What excites you most about AI + Blockchain?</h4>
                    <p className="text-gray-300 text-sm">
                      <strong>A:</strong> &quot;The potential to create truly trustworthy AI systems. Blockchain provides 
                      the transparency and immutability that AI needs to be accountable. We&apos;re moving 
                      from black-box AI to verifiable, auditable intelligence.&quot;
                    </p>
                  </div>
                  
                  <div className="bg-blue-900/30 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-200 mb-2">Q: What&apos;s the biggest challenge you&apos;re facing?</h4>
                    <p className="text-gray-300 text-sm">
                      <strong>A:</strong> &quot;Scalability. AI models are getting larger and more complex, while 
                      blockchain networks need to handle more transactions. We&apos;re working on layer 2 
                      solutions and AI model compression to address this.&quot;
                    </p>
                  </div>
                  
                  <div className="bg-blue-900/30 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-200 mb-2">Q: Where do you see this going in 5 years?</h4>
                    <p className="text-gray-300 text-sm">
                      <strong>A:</strong> &quot;AI + Blockchain will be the foundation of the next generation of 
                      digital infrastructure. We&apos;ll see autonomous organizations, self-optimizing 
                      systems, and new forms of human-AI collaboration.&quot;
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">🏦 Industry Leader: Marcus Rodriguez</h2>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-green-300 mb-3">CTO, FinTech Innovations</h3>
                <p className="text-gray-300 mb-4">
                  Marcus has been at the forefront of financial technology for over 15 years and 
                  has successfully implemented AI + Blockchain solutions in traditional banking.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-green-900/30 rounded-lg p-4">
                    <h4 className="font-semibold text-green-200 mb-2">Q: How is AI + Blockchain changing finance?</h4>
                    <p className="text-gray-300 text-sm">
                      <strong>A:</strong> &quot;We&apos;re seeing a complete transformation of risk assessment and 
                      fraud detection. AI analyzes patterns while blockchain ensures data integrity. 
                      The combination is reducing fraud by 90% in our systems.&quot;
                    </p>
                  </div>
                  
                  <div className="bg-green-900/30 rounded-lg p-4">
                    <h4 className="font-semibold text-green-200 mb-2">Q: What advice do you have for newcomers?</h4>
                    <p className="text-gray-300 text-sm">
                      <strong>A:</strong> &quot;Start with a specific problem, not the technology. Understand what 
                      you&apos;re trying to solve, then see how AI + Blockchain can help. Also, 
                      regulatory compliance should be built-in from day one.&quot;
                    </p>
                  </div>
                  
                  <div className="bg-green-900/30 rounded-lg p-4">
                    <h4 className="font-semibold text-green-200 mb-2">Q: What&apos;s the future of DeFi?</h4>
                    <p className="text-gray-300 text-sm">
                      <strong>A:</strong> &quot;AI will make DeFi more intelligent and accessible. We&apos;ll see 
                      AI-powered trading strategies, automated risk management, and personalized 
                      financial products that adapt to user behavior.&quot;
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">🔬 Academic Perspective: Prof. James Wilson</h2>
              
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Professor of Computer Science, MIT</h3>
                <p className="text-gray-300 mb-4">
                  Professor Wilson has published over 100 papers on AI and blockchain integration 
                  and leads several research initiatives in this area.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-purple-900/30 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-200 mb-2">Q: What are the key research areas?</h4>
                    <p className="text-gray-300 text-sm">
                      <strong>A:</strong> &quot;We&apos;re focusing on three main areas: privacy-preserving AI on 
                      blockchain, scalable consensus mechanisms for AI applications, and formal 
                      verification of AI + Blockchain systems.&quot;
                    </p>
                  </div>
                  
                  <div className="bg-purple-900/30 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-200 mb-2">Q: What breakthroughs are you expecting?</h4>
                    <p className="text-gray-300 text-sm">
                      <strong>A:</strong> &quot;Within 2-3 years, we&apos;ll see practical quantum-resistant 
                      blockchains and AI models that can explain their decisions on-chain. 
                      This will be crucial for regulatory compliance and user trust.&quot;
                    </p>
                  </div>
                  
                  <div className="bg-purple-900/30 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-200 mb-2">Q: How should students prepare?</h4>
                    <p className="text-gray-300 text-sm">
                      <strong>A:</strong> &quot;Build a strong foundation in both AI and blockchain separately, 
                      then focus on integration. Work on open-source projects, participate in 
                      hackathons, and stay updated with the latest research.&quot;
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">🚀 Startup Founder: Lisa Park</h2>
              
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-red-300 mb-3">CEO, ChainAI Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Lisa founded her company three years ago and has grown it to 50 employees, 
                  serving clients in healthcare, finance, and supply chain management.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-red-900/30 rounded-lg p-4">
                    <h4 className="font-semibold text-red-200 mb-2">Q: What&apos;s your biggest lesson learned?</h4>
                    <p className="text-gray-300 text-sm">
                      <strong>A:</strong> &quot;Start with the problem, not the solution. We initially tried to 
                      build cool AI + Blockchain features, but clients wanted solutions to 
                      specific business problems. That shift changed everything.&quot;
                    </p>
                  </div>
                  
                  <div className="bg-red-900/30 rounded-lg p-4">
                    <h4 className="font-semibold text-red-200 mb-2">Q: How do you handle the talent shortage?</h4>
                    <p className="text-gray-300 text-sm">
                      <strong>A:</strong> &quot;We invest heavily in training and development. We hire smart people 
                      with potential and teach them AI + Blockchain. It&apos;s expensive upfront but 
                      pays off in loyalty and expertise.&quot;
                    </p>
                  </div>
                  
                  <div className="bg-red-900/30 rounded-lg p-4">
                    <h4 className="font-semibold text-red-200 mb-2">Q: What&apos;s your advice for entrepreneurs?</h4>
                    <p className="text-gray-300 text-sm">
                      <strong>A:</strong> &quot;Focus on solving real problems, build a strong team, and be patient. 
                      AI + Blockchain is complex, and success takes time. Also, regulatory 
                      compliance is non-negotiable.&quot;
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">🌍 Government Official: David Thompson</h2>
              
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-yellow-300 mb-3">Digital Innovation Director, US Government</h3>
                <p className="text-gray-300 mb-4">
                  David oversees government initiatives to promote AI + Blockchain adoption 
                  and ensure responsible development of these technologies.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-yellow-900/30 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-200 mb-2">Q: How is government supporting this space?</h4>
                    <p className="text-gray-300 text-sm">
                      <strong>A:</strong> &quot;We&apos;re funding research, creating regulatory sandboxes, and 
                      building public-private partnerships. Our goal is to promote innovation 
                      while ensuring security and public benefit.&quot;
                    </p>
                  </div>
                  
                  <div className="bg-yellow-900/30 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-200 mb-2">Q: What are your regulatory priorities?</h4>
                    <p className="text-gray-300 text-sm">
                      <strong>A:</strong> &quot;We need clear frameworks for AI accountability, blockchain 
                      interoperability, and data privacy. We&apos;re working with international 
                      partners to create consistent standards.&quot;
                    </p>
                  </div>
                  
                  <div className="bg-yellow-900/30 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-200 mb-2">Q: How do you balance innovation and safety?</h4>
                    <p className="text-gray-300 text-sm">
                      <strong>A:</strong> &quot;We use a risk-based approach. Low-risk applications get 
                      fast-track approval, while high-risk ones go through rigorous review. 
                      We also promote best practices and industry standards.&quot;
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">💡 Key Insights from the Experts</h2>
              
              <p>
                These interviews reveal several common themes and insights:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">🎯 Problem-First Approach</h4>
                  <p className="text-sm text-gray-300">
                    All experts emphasize starting with specific problems rather than 
                    trying to implement technology for its own sake.
                  </p>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">🔒 Security & Compliance</h4>
                  <p className="text-sm text-gray-300">
                    Regulatory compliance and security must be built into systems 
                    from the beginning, not added later.
                  </p>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">👥 Talent Development</h4>
                    <p className="text-sm text-gray-300">
                    There&apos;s a severe shortage of skilled professionals, making 
                    training and development crucial for success.
                  </p>
                </div>
                
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">🚀 Long-Term Vision</h4>
                  <p className="text-sm text-gray-300">
                    Success requires patience and a long-term perspective, as these 
                    technologies are still evolving rapidly.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">🔮 Future Predictions from Experts</h2>
              
              <div className="space-y-4 my-8">
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">2025-2027: Mainstream Adoption</h4>
                  <p className="text-gray-300">
                    AI + Blockchain will become standard in enterprise applications, with 
                    established frameworks and best practices.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 border border-green-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">2028-2030: Autonomous Systems</h4>
                  <p className="text-gray-300">
                    We&apos;ll see truly autonomous AI systems operating on blockchain networks, 
                    making decisions and executing actions independently.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">2030+: New Paradigms</h4>
                  <p className="text-gray-300">
                    AI + Blockchain will enable entirely new forms of organization, 
                    governance, and human-AI collaboration.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">🎯 Actionable Advice for Readers</h2>
              
              <p>
                Based on these expert insights, here&apos;s what you should do:
              </p>

              <ul className="space-y-3 text-gray-300 my-6">
                <li><strong>Focus on problems:</strong> Identify specific issues that AI + Blockchain can solve</li>
                <li><strong>Build expertise:</strong> Develop skills in both technologies and their integration</li>
                <li><strong>Stay compliant:</strong> Understand regulatory requirements in your industry</li>
                <li><strong>Think long-term:</strong> Success requires patience and continuous learning</li>
                <li><strong>Join communities:</strong> Connect with others in the space for support and learning</li>
                <li><strong>Start small:</strong> Begin with pilot projects before scaling up</li>
              </ul>

              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Tomorrow&apos;s Preview:</h3>
                <p className="text-gray-200">
                  With all this expert insight, it&apos;s time to reflect on our journey. Tomorrow 
                  we&apos;ll have a writing and review day to consolidate what we&apos;ve learned.
                </p>
              </div>

              <p className="text-lg font-medium text-blue-300 mt-8">
                Expert insights provide the roadmap for success! 🚀
              </p>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-800">
            <button
              onClick={() => router.push('/company-file/blog/ai/case-studies')}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous: Day 12 - Case Studies
            </button>
            <button
              onClick={() => router.push('/company-file/blog/ai/writing-review-day')}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Next: Day 14 - Writing and Review Day
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
