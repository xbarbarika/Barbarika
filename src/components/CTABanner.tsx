"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const CTABanner = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="relative py-16 px-6 overflow-hidden" style={{ backgroundColor: '#000000' }} ref={containerRef}>
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          style={{
            translateY: translate,
          }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            <span className="block text-white/90" style={{ 
              fontFamily: 'var(--font-tourney), sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              INTERESTED IN COHOSTING AN
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-bold mt-2 leading-none" style={{
              fontFamily: 'var(--font-tourney), sans-serif',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FF3B30 50%, #FFFFFF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              EXCLUSIVE BARBARIKA EVENT?
            </span>
          </h1>
          <button 
            className="px-8 py-4 font-semibold rounded-full whitespace-nowrap transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:shadow-2xl hover:shadow-red-500/25"
            style={{
              background: 'rgba(0, 0, 0, 0.2)',
              color: 'white',
              border: '2px solid #FF3B30',
              backdropFilter: 'blur(10px)',
              fontFamily: 'var(--font-dm-sans), sans-serif'
            }}
          >
            SCHEDULE A CALL
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
