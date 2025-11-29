'use client'

import { Check, Zap, DollarSign, IndianRupee } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

type Region = 'IN' | 'GLOBAL' | 'US';

export default function MinecraftPricing() {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [region, setRegion] = useState<Region>('IN');

  const exchangeRate = 0.012 // 1 INR = 0.012 USD

  const convertPrice = (inrPrice: number) => {
    if (currency === 'INR') return `₹${inrPrice}`
    return `$${(inrPrice * exchangeRate).toFixed(2)}`
  }

  const regionIcons: Record<Region, string> = {
    IN: '/assets/in.png',
    GLOBAL: '/assets/global.png',
    US: '/assets/us.png',
  };

  const regionLabels: Record<Region, string> = {
    IN: 'India',
    GLOBAL: 'Global',
    US: 'USA',
  };

  const plans = [
    {
      name: 'Coal Plan',
      image: '/plans/coal.png',
      region: 'IN',
      price: 199,
      period: '/month',
      tag: 'A steal!',
      specs: [
        { icon: '💾', label: 'RAM', value: '4 GB' },
        { icon: '⚙️', label: 'CPU', value: '1 vCore' },
        { icon: '📦', label: 'Disk', value: '10 GB' },
        { icon: '🛡️', label: 'Allocations', value: '1x DDoS' },
        { icon: '🗄️', label: 'Database', value: '1x' },
        { icon: '💾', label: 'Backup', value: '1x' },
      ],
      highlighted: false,
    },
    {
      name: 'Stone Plan',
      image: '/plans/stone.png',
      region: 'GLOBAL',
      price: 299,
      period: '/month',
      tag: 'A steal!',
      specs: [
        { icon: '💾', label: 'RAM', value: '6 GB' },
        { icon: '⚙️', label: 'CPU', value: '1.5 vCore' },
        { icon: '📦', label: 'Disk', value: '15 GB' },
        { icon: '🛡️', label: 'Allocations', value: '1x DDoS' },
        { icon: '🗄️', label: 'Database', value: '1x' },
        { icon: '💾', label: 'Backup', value: '1x' },
      ],
      highlighted: false,
    },
    {
      name: 'Iron Plan',
      image: '/plans/iron.png',
      region: 'US',
      price: 399,
      period: '/month',
      tag: 'A steal!',
      specs: [
        { icon: '💾', label: 'RAM', value: '8 GB' },
        { icon: '⚙️', label: 'CPU', value: '2 vCore' },
        { icon: '📦', label: 'Disk', value: '20 GB' },
        { icon: '🛡️', label: 'Allocations', value: '2x DDoS' },
        { icon: '🗄️', label: 'Database', value: '2x' },
        { icon: '💾', label: 'Backup', value: '2x' },
      ],
      highlighted: false,
    },
    {
      name: 'Gold Plan',
      image: '/plans/gold.png',
      region: 'IN',
      price: 599,
      period: '/month',
      tag: 'A steal!',
      specs: [
        { icon: '💾', label: 'RAM', value: '12 GB' },
        { icon: '⚙️', label: 'CPU', value: '3 vCore' },
        { icon: '📦', label: 'Disk', value: '30 GB' },
        { icon: '🛡️', label: 'Allocations', value: '2x DDoS' },
        { icon: '🗄️', label: 'Database', value: '2x' },
        { icon: '💾', label: 'Backup', value: '2x' },
      ],
      highlighted: true,
    },
    {
      name: 'Diamond Plan',
      image: '/plans/diamond.png',
      region: 'GLOBAL',
      price: 799,
      period: '/month',
      tag: 'A steal!',
      specs: [
        { icon: '💾', label: 'RAM', value: '16 GB' },
        { icon: '⚙️', label: 'CPU', value: '4 vCore' },
        { icon: '📦', label: 'Disk', value: '40 GB' },
        { icon: '🛡️', label: 'Allocations', value: '3x DDoS' },
        { icon: '🗄️', label: 'Database', value: '3x' },
        { icon: '💾', label: 'Backup', value: '3x' },
      ],
      highlighted: false,
    },
    {
      name: 'Emerald Plan',
      image: '/plans/emerald.png',
      region: 'US',
      price: 1199,
      period: '/month',
      tag: 'A steal!',
      specs: [
        { icon: '💾', label: 'RAM', value: '24 GB' },
        { icon: '⚙️', label: 'CPU', value: '6 vCore' },
        { icon: '📦', label: 'Disk', value: '60 GB' },
        { icon: '🛡️', label: 'Allocations', value: '4x DDoS' },
        { icon: '🗄️', label: 'Database', value: '4x' },
        { icon: '💾', label: 'Backup', value: '4x' },
      ],
      highlighted: false,
    },
    {
      name: 'Netherite Plan',
      image: '/plans/netherite.png',
      region: 'IN',
      price: 1599,
      period: '/month',
      tag: 'A steal!',
      specs: [
        { icon: '💾', label: 'RAM', value: '32 GB' },
        { icon: '⚙️', label: 'CPU', value: '8 vCore' },
        { icon: '📦', label: 'Disk', value: '80 GB' },
        { icon: '🛡️', label: 'Allocations', value: '5x DDoS' },
        { icon: '🗄️', label: 'Database', value: '5x' },
        { icon: '💾', label: 'Backup', value: '5x' },
      ],
      highlighted: false,
    },
    {
      name: 'Custom Plan',
      image: '/plans/custom.webp',
      region: 'GLOBAL',
      price: 'Contact Us',
      period: 'Custom Pricing',
      tag: 'Enterprise',
      specs: [
        { icon: '💾', label: 'RAM', value: 'Custom' },
        { icon: '⚙️', label: 'CPU', value: 'Custom' },
        { icon: '📦', label: 'Disk', value: 'Custom' },
        { icon: '🛡️', label: 'Allocations', value: 'Custom DDoS' },
        { icon: '🗄️', label: 'Database', value: 'Custom' },
        { icon: '💾', label: 'Backup', value: 'Custom' },
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="minecraft-pricing" className="py-20 bg-gray-950 border-t border-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1550px' }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Minecraft Hosting Plans
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Choose the perfect plan for your Minecraft server
          </p>

          {/* Currency Toggle */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={() => setCurrency('INR')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition ${
                currency === 'INR'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <IndianRupee size={20} />
              INR (₹)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition ${
                currency === 'USD'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <DollarSign size={20} />
              USD ($)
            </button>
          </div>
          {/* Region Selector */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {(['IN', 'GLOBAL', 'US'] as Region[]).map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`flex flex-col items-center focus:outline-none ${region === r ? 'ring-2 ring-cyan-400 rounded-lg' : ''}`}
              >
                <Image src={regionIcons[r]} alt={regionLabels[r]} width={32} height={32} className="w-8 h-8 mb-1 rounded-full border border-gray-700 bg-white object-contain" />
                <span className="text-xs text-gray-300">{regionLabels[r]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {plans.filter(plan => plan.region === region).map((plan, index) => (
            <div
              key={index}
              className={`relative group rounded-lg border transition-all duration-300 overflow-hidden ${
                plan.highlighted
                  ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 shadow-xl shadow-cyan-500/20'
                  : 'border-gray-700 bg-gray-800/50 hover:border-cyan-500/50'
              }`}
            >
              {/* Highlighted Badge */}
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white py-2 text-center text-sm font-bold z-10">
                  ⭐ MOST POPULAR
                </div>
              )}

              <div className="p-6">
                {/* Plan Image */}
                <div className="mb-6 h-32 flex items-center justify-center">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="h-full object-contain group-hover:scale-110 transition-transform duration-300 bg-transparent"
                    style={{ backgroundColor: 'transparent' }}
                  />
                </div>

                {/* Plan Name with Region Icon */}
                <h3 className="text-2xl font-bold text-white mb-2 text-center flex items-center justify-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-700 mr-2">
                    <Image
                      src={regionIcons[plan.region as Region]}
                      alt={regionLabels[plan.region as Region]}
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain rounded-full"
                    />
                  </span>
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-cyan-400 mb-1">
                    {typeof plan.price === 'number' ? convertPrice(plan.price) : plan.price}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {plan.period}
                  </div>
                  <div className="text-cyan-300 text-xs font-semibold mt-2 bg-cyan-500/20 py-1 px-3 rounded-full inline-block">
                    {plan.tag}
                  </div>
                </div>

                {/* Specs */}
                <div className="space-y-3 mb-6">
                  {plan.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-lg">{spec.icon}</span>
                      <div className="flex-1">
                        <div className="text-gray-400 text-sm">{spec.label}</div>
                        <div className="text-white font-semibold">{spec.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-bold transition duration-300 flex items-center justify-center gap-2 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white shadow-lg shadow-cyan-500/50'
                      : 'bg-cyan-600 hover:bg-cyan-700 text-white'
                  }`}
                >
                  <Zap size={18} />
                  Order now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 p-8 bg-gray-800/50 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">What's Included in Every Plan?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="text-cyan-400" size={24} />
                <span className="text-gray-300">99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-cyan-400" size={24} />
                <span className="text-gray-300">24/7 Expert Support</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-cyan-400" size={24} />
                <span className="text-gray-300">DDoS Protection</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="text-cyan-400" size={24} />
                <span className="text-gray-300">Instant Setup</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-cyan-400" size={24} />
                <span className="text-gray-300">Free Backups</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-cyan-400" size={24} />
                <span className="text-gray-300">Mod Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
