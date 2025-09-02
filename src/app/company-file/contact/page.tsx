'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';
import { Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    workEmail: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    // TODO: Implement form submission logic
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
        <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 xl:px-24">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-2" style={{ 
              fontFamily: 'var(--font-tourney), sans-serif',
              background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              lineHeight: '1.2'
            }}>
              Let&apos;s Create Something That Scales.
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto px-2 sm:px-4" style={{ 
              fontFamily: 'var(--font-dm-sans), sans-serif',
              lineHeight: '1.6'
            }}>
              Whether you&apos;re ready to subscribe or just exploring, we&apos;re all ears.
            </p>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-12 xl:px-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl border" style={{
              background: 'rgba(15, 23, 42, 0.5)',
              borderColor: 'rgba(59, 130, 246, 0.2)',
              boxShadow: '0 4px 30px rgba(37, 99, 235, 0.1)',
              backdropFilter: 'blur(10px)'
            }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="fullName" placeholder="Full name" value={formData.fullName} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors" required />
                  <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors" required />
                </div>
                <input type="email" name="workEmail" placeholder="Work Email" value={formData.workEmail} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors" required />
                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleInputChange} rows={6} className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors resize-none" required />
                <button type="submit" className="w-full px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105" style={{
                  background: 'linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)',
                  border: '2px solid rgba(239, 68, 68, 0.3)',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(220, 38, 38, 0.25)'
                }}>Submit</button>
              </form>
            </div>
            <aside className="p-6 sm:p-8 rounded-2xl border h-fit" style={{
              background: 'rgba(15, 23, 42, 0.5)',
              borderColor: 'rgba(239, 68, 68, 0.25)',
              boxShadow: '0 4px 30px rgba(220, 38, 38, 0.1)',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>Or Reach Us</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/80"><Mail className="w-5 h-5 text-red-300" /><span>barbarika.team@gmail.com</span></div>
                <div className="flex items-center gap-3 text-white/80"><Phone className="w-5 h-5 text-red-300" /><span>+91 9326387236</span></div>
              </div>
            </aside>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pb-20 px-4 sm:px-6 lg:px-12 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <a 
              href="/book-demo" 
              className="inline-flex items-center px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105" 
              style={{
                background: 'rgba(255, 59, 48, 0.9)',
                border: '2px solid #FF3B30',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 15px rgba(255, 59, 48, 0.3)'
              }}
            >
              Book a Demo
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
} 