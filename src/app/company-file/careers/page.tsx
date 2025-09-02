'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';

export default function Careers() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [isVisible, setIsVisible] = useState(false);

  const openRoles = [
    {
      title: 'Performance Marketing Lead',
      department: 'Marketing',
      type: 'Full-time'
    },
    {
      title: 'Brand Strategist',
      department: 'Strategy',
      type: 'Full-time'
    },
    {
      title: 'Social Media Manager',
      department: 'Marketing',
      type: 'Full-time'
    },
    {
      title: 'Growth Analyst',
      department: 'Analytics',
      type: 'Full-time'
    },
    {
      title: 'Content Copywriter',
      department: 'Content',
      type: 'Full-time'
    }
  ];

  useEffect(() => {
    // Screen size detection
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setScreenSize('mobile');
      } else if (width <= 768) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    setIsVisible(true);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Removed older inline style helpers; layout now uses themed Tailwind + inline styles per section

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Navbar onMenuClick={() => setMenuOpen(true)} />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="w-full relative overflow-hidden">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/90 to-red-900/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-red-500/5" />
        </div>

        {/* Hero Section */}
        <section className={`relative px-4 sm:px-6 lg:px-12 xl:px-24 ${screenSize === 'mobile' ? 'pt-24' : screenSize === 'tablet' ? 'pt-28' : 'pt-32'} pb-12 sm:pb-16`}>
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-2" style={{ 
              fontFamily: 'var(--font-tourney), sans-serif',
              background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              lineHeight: '1.2'
            }}>
              Build With Us. Market the Future.
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4" style={{ 
              fontFamily: 'var(--font-dm-sans), sans-serif',
              lineHeight: '1.6'
            }}>
              Join a fully remote team shaping the next era of marketing. We don&apos;t chase trends — we set them.
            </p>
            <button 
              onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)',
                border: '2px solid rgba(239, 68, 68, 0.3)',
                color: 'white',
                boxShadow: '0 4px 15px rgba(220, 38, 38, 0.25)'
              }}
            >
              See open roles
            </button>
          </div>
        </section>

        {/* Why Work at Barbarika */}
        <section className={`pt-8 sm:pt-10 pb-12 sm:pb-16 px-6 sm:px-12 lg:px-24 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" style={{
                fontFamily: 'var(--font-tourney), sans-serif',
                color: 'white',
                textTransform: 'uppercase',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)'
              }}>
                Why Work at Barbarika?
              </h2>
              <p className="text-white/80 text-base sm:text-lg max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                A culture built on curiosity, impact, and autonomy.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[ 
                { icon: '🔥', title: '100% Remote' },
                { icon: '🌍', title: 'Global Culture' },
                { icon: '🧠', title: 'Weekly Learning Credits' },
                { icon: '⏱️', title: 'Async + Flexible Hours' },
                { icon: '🚀', title: 'Real Client Impact' },
                { icon: '🤝', title: 'Collaborative Growth' },
                { icon: '📈', title: 'Career Acceleration' },
                { icon: '🎯', title: 'Outcome Focused' }
              ].map((item, index) => (
                <div key={index} className="p-5 sm:p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1" style={{
                  background: 'rgba(15, 23, 42, 0.5)',
                  borderColor: 'rgba(59, 130, 246, 0.2)',
                  boxShadow: '0 4px 30px rgba(37, 99, 235, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-white/90 font-semibold" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section id="open-roles" className={`py-12 sm:py-16 px-6 sm:px-12 lg:px-24 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12" style={{
              fontFamily: 'var(--font-tourney), sans-serif',
              background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Open Roles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {openRoles.map((role, index) => (
                <div key={index} className="p-6 rounded-xl border group transition-all duration-300 hover:-translate-y-1" style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  borderColor: 'rgba(239, 68, 68, 0.25)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 group-hover:text-red-300" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                    {role.title}
                  </h3>
                  <p className="text-white/70 text-sm" style={{ fontFamily: 'var(--font-numans), sans-serif' }}>{role.department} • {role.type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20 px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/80 text-base sm:text-lg mb-6" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              Don&apos;t see a role that fits? We&apos;re always excited to meet exceptional talent.
            </p>
            <a href="/company-file/contact" className="inline-flex items-center px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105" style={{
              background: 'rgba(255, 59, 48, 0.9)',
              border: '2px solid #FF3B30',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 15px rgba(255, 59, 48, 0.3)'
            }}>
              Contact Us
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
} 