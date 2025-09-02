'use client';
import React, { useState } from "react";
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';

export default function BookDemoPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    aboutProject: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all fields are filled
    const isFormValid = Object.values(formData).every(value => value.trim() !== '');
    
    if (isFormValid) {
      // Show success popup
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        aboutProject: ''
      });
      
      // Hide success popup after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Navbar onMenuClick={() => setMenuOpen(true)} />
      <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/90 to-red-900/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-red-500/5" />
        </div>
      {/* Desktop Layout */}
      <div className="hidden lg:flex gap-6 items-start justify-center">
        {/* Left Text Section */}
        <div className="w-[732px] h-[558px] rounded-2xl text-white shadow-xl border" style={{ background: 'rgba(15, 23, 42, 0.5)', borderColor: 'rgba(59, 130, 246, 0.2)', backdropFilter: 'blur(10px)' }}>
          <h2 className="text-[32px] font-bold leading-normal mt-[123px] ml-[60px] mb-[24px]" style={{ 
            fontFamily: 'var(--font-tourney), sans-serif',
            background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' 
          }}>
            Ready to Scale Smarter?
          </h2>
          <p className="text-white/80 text-[20px] leading-[28px] ml-[60px] mb-[28px]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            Let&apos;s talk about how we can transform your marketing, without the complexity. Book a quick discovery call to explore:
          </p>
          <ul className="list-disc list-inside space-y-1 text-white/70 text-[17px] ml-[60px] mb-[123px]" style={{ lineHeight: '200%' }}>
            <li>How our subscription model works (and why it beats hiring or outsourcing)</li>
            <li>How we deliver multi-channel marketing, 10x faster than traditional teams</li>
            <li>Real examples tailored to your industry and goals</li>
            <li>A personalized plan recommendation based on your needs</li>
          </ul>
        </div>

        {/* Right Form Section */}
        <div className="relative w-full max-w-[473px] h-[558px] mx-auto">
          {/* Glass Card */}
          <div className="w-full h-full rounded-2xl border" style={{ background: 'rgba(15, 23, 42, 0.6)', borderColor: 'rgba(239, 68, 68, 0.25)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 30px rgba(220, 38, 38, 0.1)' }}>
            <div className="w-full h-full rounded-[11px] p-8 text-white">
              <form className="h-full flex flex-col" onSubmit={handleSubmit}>
                <div className="pt-[45px] space-y-[25px]">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="flex w-[413px] px-3 py-2.5 items-center gap-2.5 bg-transparent border-0 border-b border-b-white/11 focus:outline-none focus:border-b-white/25 transition-all text-white placeholder:text-white/60 placeholder:font-inter placeholder:text-[17px] placeholder:font-normal placeholder:leading-normal"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="flex w-[413px] px-3 py-2.5 items-center gap-2.5 bg-transparent border-0 border-b border-b-white/11 focus:outline-none focus:border-b-white/25 transition-all text-white placeholder:text-white/60 placeholder:font-inter placeholder:text-[17px] placeholder:font-normal placeholder:leading-normal"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Work Email"
                      className="flex w-[413px] px-3 py-2.5 items-center gap-2.5 bg-transparent border-0 border-b border-b-white/11 focus:outline-none focus:border-b-white/25 transition-all text-white placeholder:text-white/60 placeholder:font-inter placeholder:text-[17px] placeholder:font-normal placeholder:leading-normal"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(+91) 00000 00000"
                      className="flex w-[413px] px-3 py-2.5 items-center gap-2.5 bg-transparent border-0 border-b border-b-white/11 focus:outline-none focus:border-b-white/25 transition-all text-white placeholder:text-white/60 placeholder:font-inter placeholder:text-[17px] placeholder:font-normal placeholder:leading-normal"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name="aboutProject"
                      value={formData.aboutProject}
                      onChange={handleInputChange}
                      placeholder="About Project"
                      className="flex w-[413px] px-3 py-2.5 items-center gap-2.5 bg-transparent border-0 border-b border-b-white/11 focus:outline-none focus:border-b-white/25 transition-all resize-none text-white placeholder:text-white/60 placeholder:font-inter placeholder:text-[17px] placeholder:font-normal placeholder:leading-normal h-[41px] overflow-hidden"
                      rows={1}
                      required
                    />
                  </div>
                </div>
                <div className="mt-[50px]">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)',
                      border: '2px solid rgba(239, 68, 68, 0.3)',
                      color: 'white',
                      boxShadow: '0 4px 15px rgba(220, 38, 38, 0.25)'
                    }}
                  >
                    Book a Demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="flex lg:hidden flex-col gap-6 items-center justify-center w-full max-w-md mx-auto">
        {/* Left Text Section - Mobile */}
        <div className="w-full rounded-2xl text-white shadow-2xl p-8 border" style={{ background: 'rgba(15, 23, 42, 0.5)', borderColor: 'rgba(59, 130, 246, 0.2)', backdropFilter: 'blur(10px)' }}>
          <h2 className="text-3xl font-bold leading-tight mb-4 text-center" style={{ 
            fontFamily: 'var(--font-tourney), sans-serif',
            background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' 
          }}>
            Ready to Scale Smarter?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-6 text-center" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            Let&apos;s talk about how we can transform your marketing, without the complexity. Book a quick discovery call to explore:
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-red-700 mt-2 flex-shrink-0"></div>
              <p className="text-white/70 font-inter text-base font-normal leading-relaxed">
                How our subscription model works (and why it beats hiring or outsourcing)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-red-700 mt-2 flex-shrink-0"></div>
              <p className="text-white/70 font-inter text-base font-normal leading-relaxed">
                How we deliver multi-channel marketing, 10x faster than traditional teams
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-red-700 mt-2 flex-shrink-0"></div>
              <p className="text-white/70 font-inter text-base font-normal leading-relaxed">
                Real examples tailored to your industry and goals
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-red-700 mt-2 flex-shrink-0"></div>
              <p className="text-white/70 font-inter text-base font-normal leading-relaxed">
                A personalized plan recommendation based on your needs
              </p>
            </div>
          </div>
        </div>

        {/* Right Form Section - Mobile */}
        <div className="relative w-full">
          {/* Glass Card */}
          <div className="w-full rounded-2xl border" style={{ background: 'rgba(15, 23, 42, 0.6)', borderColor: 'rgba(239, 68, 68, 0.25)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 30px rgba(220, 38, 38, 0.1)' }}>
            <div className="w-full rounded-[11px] p-6 text-white">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="flex w-full px-3 py-3 items-center gap-2.5 bg-transparent border-0 border-b border-b-white/11 focus:outline-none focus:border-b-white/25 transition-all text-white placeholder:text-white/60 placeholder:font-inter placeholder:text-base placeholder:font-normal placeholder:leading-normal"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="flex w-full px-3 py-3 items-center gap-2.5 bg-transparent border-0 border-b border-b-white/11 focus:outline-none focus:border-b-white/25 transition-all text-white placeholder:text-white/60 placeholder:font-inter placeholder:text-base placeholder:font-normal placeholder:leading-normal"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Work Email"
                    className="flex w-full px-3 py-3 items-center gap-2.5 bg-transparent border-0 border-b border-b-white/11 focus:outline-none focus:border-b-white/25 transition-all text-white placeholder:text-white/60 placeholder:font-inter placeholder:text-base placeholder:font-normal placeholder:leading-normal"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(+91) 00000 00000"
                    className="flex w-full px-3 py-3 items-center gap-2.5 bg-transparent border-0 border-b border-b-white/11 focus:outline-none focus:border-b-white/25 transition-all text-white placeholder:text-white/60 placeholder:font-inter placeholder:text-base placeholder:font-normal placeholder:leading-normal"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="aboutProject"
                    value={formData.aboutProject}
                    onChange={handleInputChange}
                    placeholder="About Project"
                    className="flex w-full px-3 py-3 items-center gap-2.5 bg-transparent border-0 border-b border-b-white/11 focus:outline-none focus:border-b-white/25 transition-all resize-none text-white placeholder:text-white/60 placeholder:font-inter placeholder:text-base placeholder:font-normal placeholder:leading-normal h-[50px] overflow-hidden"
                    rows={2}
                    required
                  />
                </div>
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)',
                      border: '2px solid rgba(239, 68, 68, 0.3)',
                      color: 'white',
                      boxShadow: '0 4px 15px rgba(220, 38, 38, 0.25)'
                    }}
                  >
                    Book a Demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Success Popup */}
    {showSuccess && (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div className="rounded-2xl p-8 max-w-sm mx-4 text-center border" style={{ background: 'rgba(15, 23, 42, 0.8)', borderColor: 'rgba(59, 130, 246, 0.25)', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(0,0,0,0.35)' }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border" style={{ background: 'rgba(16,185,129,0.15)', borderColor: 'rgba(16,185,129,0.35)' }}>
            <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>Successful!</h3>
          <p className="text-white/80" style={{ fontFamily: 'var(--font-numans), sans-serif' }}>Your demo request has been submitted successfully. We&apos;ll get back to you soon!</p>
        </div>
      </div>
    )}

    <Footer />
    <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </main>
  );
} 