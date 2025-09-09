import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/background.jpeg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>
      
      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-20 lg:pb-24">
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-3xl lg:max-w-2xl xl:max-w-3xl mb-8 sm:mb-12 lg:mb-0">
          <div className="relative inline-block mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                style={{
                  color: 'white',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  lineHeight: '1.1',
                  textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                  position: 'relative',
                  display: 'inline-block',
                  padding: '0.5rem 1.5rem',
                  border: '3px solid #FF3B30',
                  borderRadius: '1rem',
                  background: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(10px)'
                }}
            >
              <span 
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                style={{
                  fontFamily: 'var(--font-tourney), sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontVariationSettings: '"wdth" 100',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
              >
                Your Technology Partner for
              </span>
              <span 
                className="block text-xl sm:text-2xl md:text-3xl mt-3"
                style={{
                  fontFamily: 'var(--font-press-start-2p), monospace',
                  fontWeight: 400,
                  lineHeight: '1.4',
                  letterSpacing: '-0.5px'
                }}
              >
                Web, SaaS, Blockchain, and AI Innovation
              </span>
            </h1>
          </div>
          
          <div className="relative z-20 mb-10 max-w-2xl mx-auto lg:mx-0">
            <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed"
               style={{
                 fontFamily: 'var(--font-numans), sans-serif',
                 lineHeight: '1.6',
                 textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                 fontWeight: 400,
                 position: 'relative',
                 zIndex: 20
               }}
            >
              We design and develop powerful digital products that help businesses innovate, scale, and stay ahead in a fast-changing world
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
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
                Get Started
              </button>
            </Link>
            <Link href="/company-file/about">
              <button 
                className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                style={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  color: 'white',
                  border: '2px solid #4776E6',
                  backdropFilter: 'blur(10px)'
                }}
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
        
        {/* Floating Image - Enhanced Size */}
        <div className="relative w-full max-w-[90%] sm:max-w-lg lg:max-w-2xl xl:max-w-3xl mt-6 sm:mt-10 lg:mt-0 mx-auto lg:mx-0">
          <div className="relative w-full h-64 sm:h-80 md:h-[450px] lg:h-[600px] xl:h-[650px]">
            {/* Main Image - Responsive */}
            <div className="relative w-full h-full p-2 sm:p-3 md:p-4">
              <div className="relative w-full h-full">
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255, 240, 180, 0.15) 0%, transparent 60%)',
                    filter: 'blur(8px)',
                    transform: 'scale(1.08)',
                    opacity: 0.5
                  }}
                />
                <Image
                  src="/floating.png"
                  alt="Floating Icon"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 50vw"
                  style={{
                    filter: 'drop-shadow(0 2px 6px rgba(255, 240, 180, 0.08))',
                    animation: 'float 8s ease-in-out infinite',
                    transform: 'scale(1.05)'
                  }}
                />
              </div>
            </div>
            
            {/* Subtle Highlight - Only on larger screens */}
            <div className="hidden md:block absolute inset-0 overflow-hidden">
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 60%)',
                  borderRadius: '50%',
                  filter: 'blur(12px)'
                }}
              ></div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-purple-500/20 blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-orange-500/20 blur-3xl"></div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-50">
        {[
          { width: 8.26, height: 5.76, left: 93.35, top: 22.34, color: '202, 34, 234', opacity: 0.44, duration: 11.34, delay: 3.21 },
          { width: 6.91, height: 7.80, left: 19.42, top: 53.35, color: '202, 34, 234', opacity: 0.30, duration: 13.50, delay: 2.96 },
          { width: 12.45, height: 8.92, left: 67.23, top: 15.67, color: '255, 143, 78', opacity: 0.35, duration: 9.87, delay: 1.45 },
          { width: 7.33, height: 9.18, left: 45.12, top: 78.91, color: '202, 34, 234', opacity: 0.28, duration: 14.23, delay: 4.12 },
          { width: 9.67, height: 6.54, left: 82.45, top: 65.23, color: '255, 143, 78', opacity: 0.42, duration: 8.76, delay: 0.89 },
          { width: 5.89, height: 11.23, left: 23.67, top: 41.56, color: '202, 34, 234', opacity: 0.31, duration: 12.45, delay: 2.34 },
          { width: 10.12, height: 7.89, left: 56.78, top: 29.45, color: '255, 143, 78', opacity: 0.38, duration: 10.67, delay: 1.78 },
          { width: 8.45, height: 9.67, left: 89.12, top: 71.23, color: '202, 34, 234', opacity: 0.33, duration: 11.89, delay: 3.45 },
          { width: 6.78, height: 8.34, left: 34.56, top: 87.12, color: '255, 143, 78', opacity: 0.29, duration: 13.12, delay: 2.67 },
          { width: 11.23, height: 6.78, left: 76.89, top: 38.45, color: '202, 34, 234', opacity: 0.36, duration: 9.34, delay: 1.23 },
          { width: 7.56, height: 10.45, left: 12.34, top: 62.78, color: '255, 143, 78', opacity: 0.41, duration: 12.78, delay: 3.89 },
          { width: 9.23, height: 8.12, left: 58.67, top: 16.34, color: '202, 34, 234', opacity: 0.27, duration: 14.56, delay: 2.12 },
          { width: 8.67, height: 7.45, left: 91.23, top: 84.67, color: '255, 143, 78', opacity: 0.39, duration: 10.23, delay: 1.56 },
          { width: 6.34, height: 9.89, left: 41.78, top: 45.23, color: '202, 34, 234', opacity: 0.32, duration: 13.67, delay: 4.23 },
          { width: 10.78, height: 6.23, left: 73.45, top: 52.89, color: '255, 143, 78', opacity: 0.37, duration: 8.45, delay: 0.67 },
          { width: 7.89, height: 11.12, left: 25.67, top: 73.45, color: '202, 34, 234', opacity: 0.30, duration: 12.34, delay: 2.89 },
          { width: 9.45, height: 7.67, left: 64.12, top: 31.78, color: '255, 143, 78', opacity: 0.35, duration: 11.45, delay: 1.34 },
          { width: 8.12, height: 8.89, left: 87.56, top: 59.12, color: '202, 34, 234', opacity: 0.28, duration: 13.89, delay: 3.67 },
          { width: 6.67, height: 9.34, left: 38.23, top: 26.67, color: '255, 143, 78', opacity: 0.43, duration: 9.78, delay: 1.89 },
          { width: 11.67, height: 7.23, left: 69.78, top: 81.45, color: '202, 34, 234', opacity: 0.34, duration: 10.89, delay: 2.45 }
        ].map((element, i) => (
          <div 
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${element.width}px`,
              height: `${element.height}px`,
              left: `${element.left}%`,
              top: `${element.top}%`,
              background: `rgba(${element.color}, ${element.opacity})`,
              animation: `float ${element.duration}s linear infinite`,
              animationDelay: `${element.delay}s`,
              opacity: 0.7
            }}
          ></div>
        ))}
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full mt-1"></div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(10px) translateX(-10px);
          }
          75% {
            transform: translateY(-10px) translateX(10px);
          }
        }
      `}</style>
    </section>
  );
}
