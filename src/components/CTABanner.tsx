"use client";

const CTABanner = () => {
  return (
    <section className="relative py-8 px-6 overflow-hidden" 
             style={{ 
               background: 'linear-gradient(135deg, #FF3B30 0%, #CC2E24 100%)',
               boxShadow: '0 8px 32px rgba(255, 59, 48, 0.3)'
             }}>
      {/* Top blur effect */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm"></div>
      
      {/* Bottom blur effect */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/20 to-transparent backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white"
              style={{ 
                fontFamily: 'var(--font-tourney), sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
            INTERESTED IN COHOSTING AN<br />
            EXCLUSIVE BARBARIKA EVENT?
          </h2>
        </div>
        <button 
          className="px-8 py-3 font-semibold rounded-full whitespace-nowrap transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          style={{
            background: 'rgba(0, 0, 0, 0.2)',
            color: 'white',
            border: '2px solid white',
            backdropFilter: 'blur(10px)',
            fontFamily: 'var(--font-dm-sans), sans-serif'
          }}
        >
          SCHEDULE A CALL
        </button>
      </div>
    </section>
  );
};

export default CTABanner;
