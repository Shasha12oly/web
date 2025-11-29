'use client'

import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const handleGetStarted = () => {
    const pricingSection = document.getElementById('category-pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-transparent to-transparent"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-blue-500"/>
        </svg>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                Premium Hosting, Powered for Performance
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Experience next-level VPS and Minecraft servers designed for speed, stability, and reliability. Whether you're building projects or running massive worlds, we deliver zero lag, instant setup, and 24/7 expert support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={handleGetStarted} className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded transition flex items-center justify-center gap-2 w-fit">
                Get started <ArrowRight size={18} />
              </button>
              <button className="px-8 py-3 text-cyan-400 hover:text-cyan-300 font-medium transition flex items-center gap-2 w-fit">
                Learn More
              </button>
            </div>

            <p className="text-sm text-gray-400">
                Fast. Secure. Scalable.
            </p>
          </div>

          {/* Right side - Feature cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur hover:border-cyan-500/50 transition">
              <div className="mb-4 text-cyan-400">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.5 1.5H3a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5h14a1.5 1.5 0 001.5-1.5V8.5m-11-5h4m-4 3h8m-8 3h8m-8 3h4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">Instant Setup</h3>
              <p className="text-sm text-gray-400">Get your server running in under 60 seconds</p>
            </div>

            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur hover:border-cyan-500/50 transition">
              <div className="mb-4 text-cyan-400">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.5 5.5a2 2 0 014 0v1a2 2 0 01-4 0v-1zm10 0a2 2 0 014 0v1a2 2 0 01-4 0v-1zm-5 8a1 1 0 100-2 1 1 0 000 2z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">DDoS Protection</h3>
              <p className="text-sm text-gray-400">Enterprise-grade security for your servers</p>
            </div>

            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur hover:border-cyan-500/50 transition">
              <div className="mb-4 text-cyan-400">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 100-2 1 1 0 000 2z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">99.9% Uptime</h3>
              <p className="text-sm text-gray-400">Reliable hosting with guaranteed availability</p>
            </div>

            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur hover:border-cyan-500/50 transition">
              <div className="mb-4 text-cyan-400">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-400">Expert help whenever you need it</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
