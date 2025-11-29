'use client'

import { ArrowRight, Check } from 'lucide-react'
import { useState } from 'react'

export default function CategoryPricing() {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR')

  const exchangeRate = 0.012 // 1 INR = 0.012 USD

  const convertPrice = (inrPrice: number) => {
    if (currency === 'INR') return `₹${inrPrice}`
    return `$${(inrPrice * exchangeRate).toFixed(2)}`
  }

  const categories = [
    {
      name: 'Minecraft Hosting',
      description: 'High-performance Minecraft server hosting for all game modes',
      image: '⛏️',
      startingPrice: 199,
      features: [
        'Instant deployment',
        'DDoS protection',
        '24/7 support',
        'Custom configurations',
        'Mod support',
      ],
      highlighted: false,
    },
    {
      name: 'VPS Hosting',
      description: 'Scalable virtual private servers for applications',
      image: '☁️',
      startingPrice: 599,
      features: [
        'Full root access',
        'SSD storage',
        '99.9% uptime',
        'Multiple OS options',
        'Backup included',
      ],
      highlighted: true,
    },
    {
      name: 'Bot Hosting',
      description: 'Reliable and optimized hosting for Discord and automation bots',
      image: '🤖',
      startingPrice: 267,
      features: [
        'Optimized for Discord & automation bots',
        '99.9% uptime guarantee',
        'Fast SSD storage',
        'Instant setup – get your bot online in seconds',
        'Scalable resources as your bot grows',
      ],
      highlighted: false,
    },
    {
      name: 'Web Hosting',
      description: 'Professional web hosting with high-performance servers and 24/7 support',
      image: '🌐',
      startingPrice: 199,
      features: [
        'SSD storage',
        '99.9% uptime',
        '24/7 support',
        'Free SSL certificate',
        'Daily backups',
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="category-pricing" className="py-20 bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Hosting Plans
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Choose the perfect plan for your needs. All plans include our core features with no hidden fees.
          </p>

          {/* Currency Toggle */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrency('INR')}
              className={`px-6 py-2 rounded-lg font-bold transition ${
                currency === 'INR'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              INR (₹)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-6 py-2 rounded-lg font-bold transition ${
                currency === 'USD'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`relative rounded-lg border overflow-hidden transition-all duration-300 ${
                category.highlighted
                  ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 shadow-xl shadow-cyan-500/20 ring-2 ring-cyan-500/50'
                  : 'border-gray-700 bg-gray-800/50 hover:border-cyan-500/50'
              }`}
            >
              {/* Most Popular Badge */}
              {category.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white py-2 text-center text-sm font-bold z-10">
                  ⭐ MOST POPULAR
                </div>
              )}

              <div className="p-6">
                {/* Category Icon */}
                <div className="text-5xl mb-4 text-center">{category.image}</div>

                {/* Category Name */}
                <h3 className="text-2xl font-bold text-white mb-2 text-center">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm text-center mb-6">
                  {category.description}
                </p>

                {/* Starting Price */}
                <div className="text-center mb-6">
                  <div className="text-sm text-gray-400 mb-1">Starting at</div>
                  <div className="text-3xl font-bold text-cyan-400">
                    {convertPrice(category.startingPrice)}
                  </div>
                  <div className="text-gray-400 text-xs">/month</div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="text-cyan-400 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    className={`w-full py-3 px-4 rounded-lg font-bold transition flex items-center justify-center gap-2 ${
                      category.highlighted
                        ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white shadow-lg shadow-cyan-500/50'
                        : 'bg-cyan-600 hover:bg-cyan-700 text-white'
                    }`}
                  >
                    Order Now
                    <ArrowRight size={18} />
                  </button>
                  <button className="w-full py-2 px-4 rounded-lg font-bold text-cyan-400 border border-cyan-600 hover:bg-cyan-600/10 transition">
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
