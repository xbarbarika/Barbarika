'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function GenAIService() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-white min-h-screen" style={{ backgroundColor: '#000000' }}>
      <div className="relative z-10">
        <Navbar onMenuClick={() => setMenuOpen(true)} />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-20 animate-pulse" style={{ background: 'linear-gradient(45deg, #FF3B30, #FF6B6B)' }}></div>
            <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full opacity-15 animate-bounce" style={{ background: 'linear-gradient(135deg, #FF3B30, #8B5CF6)', animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full opacity-10 animate-pulse" style={{ background: 'linear-gradient(225deg, #FF3B30, #EC4899)', animationDelay: '2s' }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header Badge */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full mb-6" style={{
                background: 'rgba(255, 59, 48, 0.1)',
                border: '1px solid rgba(255, 59, 48, 0.3)',
                backdropFilter: 'blur(10px)'
              }}>
                <span className="w-2 h-2 rounded-full mr-2" style={{ background: '#FF3B30' }}></span>
                <span className="text-sm font-semibold text-white/90 tracking-wide uppercase" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                  AI & Machine Learning
                </span>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="text-center max-w-5xl mx-auto">
              {/* Title */}
              <h1 className="mb-8">
                <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4" style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #FF3B30 50%, #FFFFFF 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  lineHeight: '1.1'
                }}>
                  Build AI Models
                </span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold" style={{
                  fontFamily: 'var(--font-tourney), sans-serif',
                  color: 'white',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}>
                  Faster & Smarter
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto" style={{
                fontFamily: 'var(--font-numans), sans-serif'
              }}>
                The AI race is on, and you need to push boundaries to win. Boost ROI, mitigate risk, and launch high-performing models faster with our comprehensive AI solutions.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link href="/book-demo">
                  <button className="group px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 relative overflow-hidden" style={{
                    background: '#FF3B30',
                    color: 'white',
                    fontFamily: 'var(--font-dm-sans), sans-serif'
                  }}>
                    <span className="relative z-10">Talk to AI Expert</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </Link>
                <Link href="#solutions">
                  <button className="group px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105" style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    fontFamily: 'var(--font-dm-sans), sans-serif'
                  }}>
                    Explore Solutions
                  </button>
                </Link>
              </div>
              
              {/* Feature Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{
                    background: 'rgba(255, 59, 48, 0.1)',
                    border: '2px solid rgba(255, 59, 48, 0.3)'
                  }}>
                    <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>AI Innovation</h3>
                  <p className="text-white/70 text-sm" style={{ fontFamily: 'var(--font-numans), sans-serif' }}>Cutting-edge AI solutions with human-in-the-loop expertise</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{
                    background: 'rgba(255, 59, 48, 0.1)',
                    border: '2px solid rgba(255, 59, 48, 0.3)'
                  }}>
                    <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>Lightning Fast</h3>
                  <p className="text-white/70 text-sm" style={{ fontFamily: 'var(--font-numans), sans-serif' }}>Accelerated model development and deployment</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{
                    background: 'rgba(255, 59, 48, 0.1)',
                    border: '2px solid rgba(255, 59, 48, 0.3)'
                  }}>
                    <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>Enterprise Ready</h3>
                  <p className="text-white/70 text-sm" style={{ fontFamily: 'var(--font-numans), sans-serif' }}>Secure, scalable solutions for enterprise needs</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#000000' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6"
              style={{
                color: 'white',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}
            >
              Comprehensive AI & LLM Solutions
            </h2>
            <p 
              className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto"
              style={{
                fontFamily: 'var(--font-numans), sans-serif',
                lineHeight: '1.6'
              }}
            >
              With over 15 years of industry experience, our AI solutions help you build more accurate GenAI and LLMs—faster.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Model Validation & Fact Checking',
                description: 'Our data experts review your model&apos;s responses for accuracy, identify errors, and rewrite responses to improve performance.',
                features: ['Response accuracy validation', 'Error identification', 'Automated workflow', 'Quality assurance']
              },
              {
                title: 'Instruction Following',
                description: 'Assess how well your Gen AI model understands, interprets, and executes instructions with compliance analysis.',
                features: ['Compliance assessment', 'Response analysis', 'Model optimization', 'Detailed reporting']
              },
              {
                title: 'Preference Ranking',
                description: 'Improve model output quality through feedback loops and RLHF with domain expertise across industries.',
                features: ['Quality ranking', 'RLHF implementation', 'Domain expertise', 'Feedback optimization']
              },
              {
                title: 'Content Generation & Captioning',
                description: 'Scale captioning for various modalities with accuracy verification and hallucination prevention.',
                features: ['Multi-modal captioning', 'Content verification', 'Error reduction', 'Hallucination prevention']
              },
              {
                title: 'Creative Writing & Prompt Engineering',
                description: 'Create new prompts and responses with chain-of-thought reasoning for clear rationale.',
                features: ['Custom prompts', 'Response optimization', 'Chain-of-thought', 'Domain content']
              },
              {
                title: 'Synthetic Data Creation',
                description: 'Create synthetic datasets with human-in-the-loop approach for highest quality and accuracy.',
                features: ['Custom datasets', 'Quality validation', 'Domain generation', 'Human oversight']
              }
            ].map((service, index) => {
              const isActive = index < 2; // Mark first 2 services as active
              
              // Define marketing-style gradient backgrounds for each card
              const cardBackgrounds = [
                'linear-gradient(135deg, rgba(255, 59, 48, 0.1) 0%, rgba(20, 20, 20, 0.9) 50%, rgba(0, 0, 0, 0.95) 100%)', // Red to dark
                'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(20, 20, 20, 0.9) 50%, rgba(0, 0, 0, 0.95) 100%)', // Purple to dark
                'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(20, 20, 20, 0.9) 50%, rgba(0, 0, 0, 0.95) 100%)', // Green to dark
                'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(20, 20, 20, 0.9) 50%, rgba(0, 0, 0, 0.95) 100%)', // Blue to dark
                'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(20, 20, 20, 0.9) 50%, rgba(0, 0, 0, 0.95) 100%)', // Orange to dark
                'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(20, 20, 20, 0.9) 50%, rgba(0, 0, 0, 0.95) 100%)', // Pink to dark
              ];
              
              const hoverGradients = [
                'linear-gradient(135deg, rgba(255, 59, 48, 0.2) 0%, rgba(255, 59, 48, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)',
                'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)',
                'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(34, 197, 94, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)',
                'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)',
                'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(245, 158, 11, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)',
                'linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)',
              ];
              
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                  style={{
                    background: cardBackgrounds[index % cardBackgrounds.length],
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(15px)',
                    minHeight: '300px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {/* Active Badge */}
                  {isActive && (
                    <div 
                      className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: '#FF3B30',
                        color: 'white',
                        fontFamily: 'var(--font-dm-sans), sans-serif'
                      }}
                    >
                      ACTIVE
                    </div>
                  )}
                  
                  {/* Hover Effects */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    style={{
                      background: hoverGradients[index % hoverGradients.length]
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: 'rgba(0, 0, 0, 0.3)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        <svg className="w-6 h-6 text-white group-hover:text-red-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 
                      className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300 leading-tight"
                      style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                    >
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p 
                      className="text-white/80 group-hover:text-white/90 leading-relaxed mb-4 flex-1 text-base"
                      style={{ fontFamily: 'var(--font-numans), sans-serif' }}
                    >
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-full text-sm font-medium text-white/70 group-hover:text-white transition-all duration-300"
                          style={{
                            background: 'rgba(0, 0, 0, 0.3)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)',
                            fontFamily: 'var(--font-numans), sans-serif'
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span
                          className="px-3 py-1.5 rounded-full text-sm font-medium text-white/50 transition-all duration-300"
                          style={{
                            background: 'rgba(0, 0, 0, 0.2)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            fontFamily: 'var(--font-numans), sans-serif'
                          }}
                        >
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#000000' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{
                color: 'white',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}
            >
              Ready to Transform Your Business with AI?
            </h2>
            <p 
              className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
              style={{
                fontFamily: 'var(--font-numans), sans-serif'
              }}
            >
              Let&apos;s discuss how our AI solutions can drive growth, reduce costs, and give you a competitive edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-demo">
                <button 
                  className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  style={{
                    background: 'rgba(0, 0, 0, 0.2)',
                    color: 'white',
                    border: '2px solid #FF3B30',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  Start Your AI Journey
                </button>
              </Link>
              <Link href="/company-file/contact">
                <button 
                  className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  style={{
                    background: 'rgba(0, 0, 0, 0.2)',
                    color: 'white',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
      
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-up-delay {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-up-delay-2 {
          from { 
            opacity: 0; 
            transform: translateY(40px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-slide-up-delay {
          animation: slide-up-delay 0.8s ease-out 0.2s both;
        }
        
        .animate-slide-up-delay-2 {
          animation: slide-up-delay-2 0.8s ease-out 0.4s both;
        }
      `}</style>
    </div>
  );
}
