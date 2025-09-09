"use client";

import { useState, useEffect } from "react";
import StatsSection from "@/components/StatsSection";
import CTABanner from "@/components/CTABanner";
import PhotoGallery from "@/components/PhotoGallery";
import EventsList from "@/components/EventsList";

export interface EventType {
  id: number;
  date: string;
  day: string;
  time: string;
  title: string;
  organizer: string;
  location: string;
  type: string;
  price: string;
  image: string;
}

const EventsPage = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const backgroundImages = ['/eventbg.jpg', '/tech-bg.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const events: EventType[] = [
    {
      id: 1,
      date: "Sep 22",
      day: "Monday",
      time: "2:00 AM · 11:00 AM GMT+9",
      title: "Korea Blockchain Week Founders & Investors Brunch ✨ (invite only)",
      organizer: "Barbarika",
      location: "Seoul",
      type: "Founders & Investors Brunch ✨",
      price: "$250",
      image: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,anim=false,background=white,quality=75,width=180,height=180/event-covers/bd/5fc977b7-4a1e-4ab7-a59a-e58f688af1ad.png"
    },
    {
      id: 2,
      date: "Sep 22",
      day: "Monday", 
      time: "6:00 AM · 3:00 PM GMT+9",
      title: "Korea Blockchain Week VCs & LPs Cocktail Hour ✨ (invite only)",
      organizer: "Barbarika",
      location: "Seoul",
      type: "VC & LP Event ✨",
      price: "$500",
      image: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,anim=false,background=white,quality=75,width=180,height=180/event-covers/gr/4db407d2-8354-4880-892e-731a72d68235.png"
    },
    {
      id: 3,
      date: "Sep 30",
      day: "Tuesday",
      time: "3:00 AM · 11:00 AM GMT+8",
      title: "Token2049 Singapore Founders & Investors Brunch ✨ (invite only)",
      organizer: "Barbarika",
      location: "Singapore",
      type: "Founders & Investors Brunch ✨",
      price: "$300",
      image: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,anim=false,background=white,quality=75,width=180,height=180/event-covers/aa/52139394-01d5-49b4-9b0a-438b228442ca.png"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      {/* Skip Links */}
      <div className="sr-only">
        <a href="#main-content" className="skip-link">Skip to Content</a>
      </div>

      {/* Hero Section */}
      <main id="main-content" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images with Rotation */}
        <div className="absolute inset-0">
          {backgroundImages.map((bgImage, index) => (
            <div
              key={bgImage}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
                index === currentBgIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${bgImage})`,
              }}
            ></div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="text-right pt-20 pr-20">
              <h2 className="text-6xl font-bold text-white/20 tracking-widest transform rotate-12"
                  style={{ fontFamily: 'var(--font-tourney), sans-serif' }}>
                BARBARIKA
              </h2>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
              style={{
                fontFamily: 'var(--font-tourney), sans-serif',
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textShadow: '0 4px 20px rgba(0,0,0,0.8)',
                position: 'relative',
                display: 'inline-block',
                padding: '1rem 2rem',
                border: '3px solid #FF3B30',
                borderRadius: '1rem',
                background: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)'
              }}>
            BARBARIKA&apos;S EXCLUSIVE<br />
            <span className="text-4xl md:text-6xl mt-4 block" style={{ color: '#FF3B30' }}>
              INVESTOR EVENTS
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
             style={{
               fontFamily: 'var(--font-numans), sans-serif',
               lineHeight: '1.6',
               textShadow: '0 2px 4px rgba(0,0,0,0.8)',
               fontWeight: 400
             }}>
            An exclusive series of events designed to provide Web3 brands with monthly, 
            consistent exposure to the top founders & top investors all around the world.
          </p>
          
          <button 
            className="px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-red-500 hover:border-red-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-red-500/25"
            style={{
              background: 'rgba(0, 0, 0, 0.2)',
              color: 'white',
              border: '2px solid #FF3B30',
              backdropFilter: 'blur(10px)',
              fontFamily: 'var(--font-dm-sans), sans-serif'
            }}
          >
            SPONSOR AN EVENT WITH US
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Banner */}
      <CTABanner />

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Events Section */}
      <section className="py-16 px-6" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto">

          {/* Events List */}
          <EventsList events={events} />

          {/* Load More */}
          <div className="text-center mt-12">
            <button 
              className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-110 hover:bg-red-500 hover:border-red-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-red-500/25"
              style={{
                background: 'rgba(0, 0, 0, 0.2)',
                color: 'white',
                border: '2px solid #FF3B30',
                backdropFilter: 'blur(10px)',
                fontFamily: 'var(--font-dm-sans), sans-serif'
              }}
            >
              View All Events
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />

      {/* Footer */}
      <footer className="py-12 px-6" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4"
                style={{
                  color: '#FF3B30',
                  fontFamily: 'var(--font-tourney), sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
              barbarika
            </h2>
            <div className="text-sm text-white/70"
                 style={{ fontFamily: 'var(--font-numans), sans-serif' }}>
              A leading edge global growth agency
            </div>
          </div>
          <div className="flex justify-center space-x-8 text-sm text-white/70"
               style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            <a href="#" className="hover:text-red-400 transition-colors">About Us</a>
            <a href="#" className="hover:text-red-400 transition-colors">Legal Notice</a>
            <a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-400 transition-colors">Site Map</a>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <div className="fixed bottom-6 right-6">
        <button 
          className="rounded-full w-12 h-12 shadow-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          style={{
            background: 'rgba(0, 0, 0, 0.2)',
            color: 'white',
            border: '2px solid #FF3B30',
            backdropFilter: 'blur(10px)',
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '1.2rem',
            fontWeight: 'bold'
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      </div>
    </div>
  );
};

export default EventsPage;


