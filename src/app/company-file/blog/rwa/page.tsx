'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  category: string;
}

const rwaBlogs: BlogPost[] = [
  {
    slug: "rwa-intro",
    title: "Real World Assets: The Beginner's Gateway to the Next Financial Evolution",
    excerpt: "Explore how Real World Assets are transforming finance through blockchain technology and tokenization.",
    date: "Aug 4, 2025",
    author: "Princebhesaniya",
    readTime: "6 min read",
    image: "/bg-1.jpg",
    category: "Finance"
  },
  {
    slug: "rwa-treasury-bond",
    title: "How Priya from Pune Bought a Piece of a US Treasury Bond",
    excerpt: "Discover how blockchain enabled global investment in US Treasury bonds with just $50.",
    date: "Aug 5, 2025",
    author: "Princebhesaniya",
    readTime: "5 min read",
    image: "/bg-2.jpg",
    category: "Finance"
  },
  {
    slug: "rwa-real-world-examples",
    title: "Real World Examples of RWAs: 2024-2025 (From Gold to Green Finance)",
    excerpt: "Explore real-world examples of tokenized assets transforming global finance in 2024-2025.",
    date: "Aug 6, 2025",
    author: "Princebhesaniya",
    readTime: "6 min read",
    image: "/bg-3.jpg",
    category: "Finance"
  },
  {
    slug: "tokenization-made-simple",
    title: "Tokenization Made Simple: How Real Things Become Digital Assets You Can Own",
    excerpt: "A beginner-friendly guide to understanding how real-world assets are transformed into digital tokens.",
    date: "Aug 7, 2025",
    author: "Princebhesaniya",
    readTime: "5 min read",
    image: "/bg-4.jpg",
    category: "Education"
  },
  {
    slug: "blockchain-rwa-backbone",
    title: "Why Blockchain is the Backbone of Real World Assets (RWAs)",
    excerpt: "Understanding the critical role of blockchain technology in enabling the tokenization of real-world assets.",
    date: "Aug 8, 2025",
    author: "Princebhesaniya",
    readTime: "5 min read",
    image: "/bg-5.jpg",
    category: "Technology"
  },
  {
    slug: "fractional-ownership-rwa",
    title: "Owning a Piece of the World: How Fractional Ownership Works in RWAs",
    excerpt: "Discover how fractional ownership is democratizing access to high-value assets through blockchain technology.",
    date: "Aug 9, 2025",
    author: "Princebhesaniya",
    readTime: "7 min read",
    image: "/bg-6.jpg",
    category: "Finance"
  },
  {
    slug: "rwa-platforms-powering-hype",
    title: "Who's Powering RWAs? A Look at the Platforms Behind the Hype",
    excerpt: "Explore the key platforms and infrastructure providers making RWA tokenization possible.",
    date: "Aug 10, 2025",
    author: "Princebhesaniya",
    readTime: "5 min read",
    image: "/bg-7.jpg",
    category: "Technology"
  },
  {
    slug: "rwa-regulations-adoption",
    title: "The Rulebook: Regulations Shaping RWA Adoption",
    excerpt: "Understanding the regulatory landscape and its impact on Real World Asset tokenization.",
    date: "Aug 11, 2025",
    author: "Princebhesaniya",
    readTime: "6 min read",
    image: "/bg-8.jpg",
    category: "Finance"
  },
  {
    slug: "rwa-100m-users",
    title: "How RWAs Could Change Finance for the Next 100 Million Users",
    excerpt: "Let's stop thinking of RWAs as just a crypto play. They're much bigger than that. RWAs have the power to reshape finance for millions of people who've been left out of traditional systems.",
    date: "Aug 12, 2025",
    author: "Princebhesaniya",
    readTime: "6 min read",
    image: "/bg-9.jpg",
    category: "Finance"
  },
  {
    slug: "rwa-first-step-100",
    title: "Your First Step: Trying a Tokenized Asset with Just ₹100",
    excerpt: "All of this sounds exciting. But let's make it real. How can you, sitting at home, actually experience RWAs without risking your life savings? Here's a practical guide.",
    date: "Aug 13, 2025",
    author: "Princebhesaniya",
    readTime: "5 min read",
    image: "/bg-10.jpg",
    category: "Education"
  },
  {
    slug: "rwa-ecosystem-builders",
    title: "Who's Building the RWA Ecosystem? (Platforms + Projects You Should Know)",
    excerpt: "Let's pause for a second. We've been talking a lot about what RWAs are and the kinds of assets being tokenized — real estate, bonds, gold, even carbon credits. But here's the question: Who's actually making all of this happen?",
    date: "Aug 14, 2025",
    author: "Princebhesaniya",
    readTime: "7 min read",
    image: "/bg-1.jpg",
    category: "Technology"
  },
  {
    slug: "rwa-regulatory-maze",
    title: "The Regulatory Maze: What Rules Apply to RWAs?",
    excerpt: "Okay, so far this series has been fun. RWAs sound exciting, futuristic, and honestly a little magical. But let's come back to earth for a second. Here's the uncomfortable truth: finance is one of the most regulated industries in the world.",
    date: "Aug 15, 2025",
    author: "Princebhesaniya",
    readTime: "8 min read",
    image: "/bg-2.jpg",
    category: "Finance"
  },
  {
    slug: "real-estate-tokenized",
    title: "From Rent to Returns: How Real Estate is Getting Tokenized",
    excerpt: "If there's one asset class that has always been considered the 'holy grail' of wealth-building, it's real estate. For centuries, owning property has been a symbol of stability and prosperity.",
    date: "Aug 16, 2025",
    author: "Princebhesaniya",
    readTime: "8 min read",
    image: "/bg-3.jpg",
    category: "Finance"
  },
  {
    slug: "luxury-assets-rwa-world",
    title: "Gold, Art, and Beyond: Luxury Assets in the RWA World",
    excerpt: "When people think of wealth, they often picture gold bars in vaults, Picasso paintings, rare diamonds, or classic cars. These luxury assets have always been reserved for billionaires, sovereign funds, and high-net-worth collectors.",
    date: "Aug 17, 2025",
    author: "Princebhesaniya",
    readTime: "9 min read",
    image: "/bg-4.jpg",
    category: "Finance"
  },
  {
    slug: "rwa-vs-crypto-volatility",
    title: "Stable by Design: RWAs vs. Crypto Volatility",
    excerpt: "One of the biggest criticisms of crypto is volatility. Bitcoin can swing 10% in a day. Meme coins can vanish overnight. RWAs, however, are built on real, tangible value.",
    date: "Aug 18, 2025",
    author: "Princebhesaniya",
    readTime: "8 min read",
    image: "/bg-5.jpg",
    category: "Education"
  },
  {
    slug: "hidden-risks-investing-rwas",
    title: "The Hidden Risks: What You Should Know Before Investing in RWAs",
    excerpt: "RWAs are exciting, but let's not sugarcoat things: there are risks you must know before diving in. 5 Key Risks Regulatory Grey Zones → Are your tokens legally securities? What if laws change?",
    date: "Aug 19, 2025",
    author: "Princebhesaniya",
    readTime: "9 min read",
    image: "/bg-6.jpg",
    category: "Finance"
  },
  {
    slug: "rwa-yields-explained",
    title: "RWA Yields Explained: Where Do the Returns Actually Come From?",
    excerpt: "RWAs aren't just about holding; they can generate returns. But how? Sources of RWA Yields Real Estate Rent Fractional holders get rental income. Bond Interest Treasury bond tokens pay regular yields.",
    date: "Aug 20, 2025",
    author: "Princebhesaniya",
    readTime: "8 min read",
    image: "/bg-7.jpg",
    category: "Finance"
  },
  {
    slug: "cross-border-money-rwas",
    title: "Cross-Border Money Flows Made Simple with RWAs",
    excerpt: "Sending money abroad is often slow, costly, and full of middlemen. RWAs offer a solution: borderless, tokenized assets that anyone can transfer globally.",
    date: "Aug 21, 2025",
    author: "Princebhesaniya",
    readTime: "9 min read",
    image: "/bg-8.jpg",
    category: "Technology"
  },
  {
    slug: "rwas-bridge-banks-defi",
    title: "Can RWAs Bridge Traditional Banks and DeFi?",
    excerpt: "Banks have stability. DeFi has innovation. RWAs might be the bridge that finally connects them. Why? Banks trust real assets. DeFi thrives on tokenization. RWAs bring a 'common language' of value.",
    date: "Aug 22, 2025",
    author: "Princebhesaniya",
    readTime: "10 min read",
    image: "/bg-9.jpg",
    category: "Technology"
  },
  {
    slug: "new-middlemen-rwa",
    title: "Meet the New Middlemen: Custodians, Auditors & Oracles in RWA Space",
    excerpt: "Decentralization doesn't mean no middlemen. RWAs rely on new kinds of middle players: Custodians hold real assets. Auditors verify them. Oracles connect real-world data to blockchain.",
    date: "Aug 23, 2025",
    author: "Princebhesaniya",
    readTime: "8 min read",
    image: "/bg-10.jpg",
    category: "Education"
  },
  {
    slug: "rwa-liquidity-pools-explained",
    title: "The Next Billion-Dollar Market: RWA Liquidity Pools Explained",
    excerpt: "Liquidity pools are where RWAs could become a multi-billion-dollar DeFi market. How It Works Investors deposit RWA tokens. Pools allow trading, lending, and borrowing. Yields are generated from fees and activity.",
    date: "Aug 24, 2025",
    author: "Princebhesaniya",
    readTime: "9 min read",
    image: "/bg-1.jpg",
    category: "Finance"
  },
  {
    slug: "future-of-rwas-2026-beyond",
    title: "The Future of RWAs: Predictions for 2026 and Beyond",
    excerpt: "RWAs are young but growing fast. What might the next years hold? Predictions $10 Trillion Market by 2030 Regulatory Frameworks Mature Bank + DeFi Collaborations Expand Everyday Investors Flood In New Asset Classes Tokenized → carbon credits, patents, even music rights.",
    date: "Aug 25, 2025",
    author: "Princebhesaniya",
    readTime: "10 min read",
    image: "/bg-2.jpg",
    category: "Finance"
  }
];

const RWABlogPage = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const openBlog = (blog: BlogPost) => {
    router.push(`/company-file/blog/rwa/${blog.slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200 relative">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/90 to-red-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-red-500/5" />
      </div>
      
      <Navbar />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <div className="relative">
        <div className="w-full">
          <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 xl:px-24">
            <div className="max-w-6xl mx-auto text-center">
              <button
                onClick={() => router.push('/company-file/blog')}
                className="mb-4 flex items-center text-base text-blue-400 hover:text-blue-300 transition-colors mx-auto"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </button>
              
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2" style={{
                fontFamily: 'var(--font-tourney), sans-serif',
                background: 'linear-gradient(90deg, #3B82F6 0%, #EF4444 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                lineHeight: '1.2',
                wordBreak: 'keep-all',
                hyphens: 'manual',
                overflowWrap: 'break-word',
                whiteSpace: 'normal'
              }}>
                RWA Blog Series
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto mb-6 sm:mb-8 px-2 sm:px-4" style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                lineHeight: '1.6'
              }}>
                Explore how Real World Assets are being tokenized and brought onto blockchain networks.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <section className="relative py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rwaBlogs.map((blog, index) => (
              <div
                key={index}
                className="relative group bg-gray-900/60 rounded-xl overflow-hidden border border-gray-800/60 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/50 hover:scale-[1.02] hover:ring-1 hover:ring-blue-500/30"
                onClick={() => openBlog(blog)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openBlog(blog)}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm text-blue-300 bg-blue-900/50">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 relative z-10">
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <span className="group-hover:text-blue-300 transition-colors">{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-gray-300">{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-200 transition-colors line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span>Read more</span>
                    <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default RWABlogPage;
