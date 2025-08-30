'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Service() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('web3');

  const web3Services = [
    {
      title: 'dApp Development',
      description: 'Full-stack decentralized applications with seamless wallet integration and on/off-chain data management.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      features: ['Smart Contracts', 'Wallet Integration', 'DeFi Protocols', 'NFT Marketplaces']
    },
    {
      title: 'Smart Contracts',
      description: 'Secure, audited smart contracts built with Solidity and Rust, complete with comprehensive test suites.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      features: ['Solidity', 'Rust', 'Security Audits', 'Gas Optimization']
    },
    {
      title: 'DeFi & NFTs',
      description: 'Advanced DeFi protocols including AMMs, staking mechanisms, and comprehensive NFT ecosystems.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      features: ['AMMs', 'Staking', 'ERC20/721/1155', 'Marketplaces']
    },
    {
      title: 'Wallet & Auth',
      description: 'Seamless wallet integration with WalletConnect, social login, and multi-chain authentication.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: ['WalletConnect', 'Social Login', 'MPC', 'Multi-chain']
    },
    {
      title: 'L2 Scaling',
      description: 'Optimized Layer 2 solutions with gas-aware UX for Ethereum, Polygon, and Arbitrum.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: ['Optimism', 'Arbitrum', 'Polygon', 'Gas Optimization']
    },
    {
      title: 'Data Indexing',
      description: 'Custom blockchain data indexing with The Graph and analytics dashboards for real-time insights.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: ['The Graph', 'Custom Indexers', 'Analytics', 'Real-time Data']
    }
  ];

  const mobileServices = [
    {
      title: 'Cross-Platform Apps',
      description: 'Native-quality mobile applications built with React Native and Flutter for iOS and Android.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      features: ['React Native', 'Flutter', 'Native Modules', 'iOS/Android']
    },
    {
      title: 'Performance & UX',
      description: 'Optimized mobile experiences with 60fps interactions, offline-first architecture, and background sync.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: ['60fps Performance', 'Offline-first', 'Background Sync', 'Smooth UX']
    },
    {
      title: 'Secure Wallets',
      description: 'Embedded wallet solutions with advanced key management and biometric authentication.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: ['Embedded Wallets', 'Key Management', 'Biometric Auth', 'Security']
    },
    {
      title: 'Native Integrations',
      description: 'Deep device integration including push notifications, deep linking, payments, and AR capabilities.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      features: ['Push Notifications', 'Deep Linking', 'Payments', 'AR/VR']
    },
    {
      title: 'CI/CD & QA',
      description: 'Automated build pipelines, comprehensive testing, and streamlined release management.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: ['Automated Builds', 'Testing', 'Release Pipelines', 'Quality Assurance']
    },
    {
      title: 'Store Readiness',
      description: 'Complete app store optimization and compliance for successful App Store and Play Store launches.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      features: ['App Store', 'Play Store', 'Compliance', 'Launch Support']
    }
  ];

  const technologies = [
    'Solidity', 'Rust', 'TypeScript', 'React Native', 'Flutter', 'WalletConnect', 'Ethers.js', 'Wagmi', 'Hardhat', 'Foundry', 'The Graph', 'IPFS/Pinata', 'Expo', 'Fastlane'
  ];

  const caseStudies = [
    {
      title: 'DeFi Protocol Platform',
      description: 'Built a complete DeFi protocol with AMM, staking, and yield farming capabilities, achieving $50M+ TVL within 6 months.',
      category: 'DeFi',
      metrics: ['$50M+ TVL', '6 months', '99.9% uptime']
    },
    {
      title: 'Cross-Platform Wallet App',
      description: 'Developed a secure mobile wallet supporting 10+ blockchains with biometric authentication and seamless dApp integration.',
      category: 'Mobile',
      metrics: ['10+ chains', '100K+ users', '4.8★ rating']
    },
    {
      title: 'NFT Marketplace',
      description: 'Created a high-performance NFT marketplace with real-time bidding, royalty distribution, and multi-chain support.',
      category: 'NFTs',
      metrics: ['1M+ NFTs', 'Real-time bidding', 'Multi-chain']
    }
  ];

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
                  Web3 & Mobile Development
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
                  Build What
                </span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold" style={{
                  fontFamily: 'var(--font-tourney), sans-serif',
                  color: 'white',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}>
                  Doesn't Exist Yet
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto" style={{
                fontFamily: 'var(--font-numans), sans-serif'
              }}>
                From trustless protocols to buttery-smooth apps, we craft products that feel like magic and scale like engineering.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link href="/book-demo">
                  <button className="group px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 relative overflow-hidden" style={{
                    background: '#FF3B30',
                    color: 'white',
                    fontFamily: 'var(--font-dm-sans), sans-serif'
                  }}>
                    <span className="relative z-10">Book Discovery Call</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </Link>
                <div className="inline-flex p-1 rounded-2xl bg-black/40 border border-white/20 backdrop-blur-md">
                  <button 
                    onClick={() => setActiveTab('web3')} 
                    className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      activeTab === 'web3' 
                        ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                    style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                  >
                    Web3
                  </button>
                  <button 
                    onClick={() => setActiveTab('mobile')} 
                    className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      activeTab === 'mobile' 
                        ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                    style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                  >
                    Mobile
                  </button>
                </div>
              </div>
              
              {/* Feature Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{
                    background: 'rgba(255, 59, 48, 0.1)',
                    border: '2px solid rgba(255, 59, 48, 0.3)'
                  }}>
                    <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>Security First</h3>
                  <p className="text-white/70 text-sm" style={{ fontFamily: 'var(--font-numans), sans-serif' }}>Enterprise-grade security with comprehensive audits</p>
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
                  <p className="text-white/70 text-sm" style={{ fontFamily: 'var(--font-numans), sans-serif' }}>Optimized performance for real-world applications</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{
                    background: 'rgba(255, 59, 48, 0.1)',
                    border: '2px solid rgba(255, 59, 48, 0.3)'
                  }}>
                    <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>Custom Built</h3>
                  <p className="text-white/70 text-sm" style={{ fontFamily: 'var(--font-numans), sans-serif' }}>Tailored solutions for your specific needs</p>
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
              {activeTab === 'web3' ? 'Web3 Development Services' : 'Mobile Development Services'}
            </h2>
            <p 
              className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto"
              style={{
                fontFamily: 'var(--font-numans), sans-serif',
                lineHeight: '1.6'
              }}
            >
              {activeTab === 'web3' 
                ? 'On-chain power. Off-the-charts UX.' 
                : 'Native feel. Cross-platform speed.'
              }
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {(activeTab === 'web3' ? web3Services : mobileServices).map((service, index) => {
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
                        {React.cloneElement(service.icon, { 
                          className: "w-6 h-6 text-white group-hover:text-red-400 transition-colors duration-300" 
                        })}
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

      {/* Technologies Section */}
      <div className="w-full bg-white/5 backdrop-blur-sm py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#ff965d] via-white to-[#a63ffd]">
            Technologies We Use
          </h2>
          <p className="text-lg text-white/70 text-center mb-20 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build secure, scalable, and innovative Web3 and mobile solutions.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white transition-all duration-300"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  fontFamily: 'var(--font-numans), sans-serif'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="w-full bg-white/5 backdrop-blur-sm py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="text-sm font-semibold text-pink-400 tracking-wide uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                Success Stories
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent" style={{ fontFamily: 'Epilogue, sans-serif' }}>
              Client Success Stories
            </h2>
            <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Real Web3 and mobile projects we've delivered for our clients, showcasing our expertise and innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  minHeight: '320px'
                }}
              >
                {/* Hover Effects */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 59, 48, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: '#FF3B30',
                        color: 'white',
                        fontFamily: 'var(--font-dm-sans), sans-serif'
                      }}
                    >
                      {study.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300 leading-tight" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                    {study.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/80 group-hover:text-white/90 leading-relaxed mb-4 flex-1 text-base" style={{ fontFamily: 'var(--font-numans), sans-serif' }}>
                    {study.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {study.metrics.map((metric, idx) => (
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
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
              Ready to Build Something People Haven't Seen Before?
            </h2>
            <p 
              className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
              style={{
                fontFamily: 'var(--font-numans), sans-serif'
              }}
            >
              We combine protocol engineering with product craft. Let's turn your idea into a product your users rave about.
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
                  Book Demo
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