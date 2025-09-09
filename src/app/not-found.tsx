import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center max-w-2xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-8xl font-bold mb-4" style={{ 
            fontFamily: 'var(--font-tourney), sans-serif',
            color: '#FF3B30',
            textShadow: '0 4px 20px rgba(255, 59, 48, 0.3)'
          }}>
            OOPS!
          </h1>
          <h2 className="text-3xl font-semibold mb-6" style={{ 
            fontFamily: 'var(--font-dm-sans), sans-serif',
            color: '#ffffff'
          }}>
            This page seems to have vanished into the digital void
          </h2>
        </div>
        
        <p className="text-lg text-white/80 mb-12 leading-relaxed" style={{ 
          fontFamily: 'var(--font-numans), sans-serif',
          lineHeight: '1.6'
        }}>
          Don&apos;t worry, even the best explorers sometimes take a wrong turn. 
          Let&apos;s get you back on track to discover amazing Web3 opportunities.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            style={{
              background: 'rgba(255, 59, 48, 0.1)',
              color: '#FF3B30',
              border: '2px solid #FF3B30',
              backdropFilter: 'blur(10px)',
              fontFamily: 'var(--font-dm-sans), sans-serif'
            }}
          >
            Return to Home
          </Link>
          
          <div className="text-sm text-white/60 mt-6" style={{ 
            fontFamily: 'var(--font-dm-sans), sans-serif'
          }}>
            Or explore our <Link href="/events" className="text-red-400 hover:text-red-300 transition-colors">Events</Link> or <Link href="/services" className="text-red-400 hover:text-red-300 transition-colors">Services</Link>
          </div>
        </div>
      </div>
    </div>
  );
} 