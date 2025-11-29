'use client'

import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$4.99',
      period: '/month',
      description: 'Perfect for small projects',
      features: ['1GB RAM', '20GB Storage', 'DDoS Protection', 'Email Support', '99.9% Uptime'],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '$9.99',
      period: '/month',
      description: 'For growing communities',
      features: ['4GB RAM', '100GB Storage', 'DDoS Protection', 'Priority Support', '99.9% Uptime', 'Custom Domain'],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: '$24.99',
      period: '/month',
      description: 'For large-scale operations',
      features: ['16GB RAM', '500GB Storage', 'DDoS Protection', '24/7 Phone Support', '99.99% Uptime', 'Dedicated IP', 'API Access'],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-lg border transition-all duration-300 ${
                plan.highlighted
                  ? 'border-cyan-500 bg-cyan-500/10 shadow-xl shadow-cyan-500/20 transform md:scale-105'
                  : 'border-gray-700 bg-gray-800/50'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-cyan-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-400 mb-6">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-5xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-gray-400">
                  {plan.period}
                </span>
              </div>

              <button
                className={`w-full py-3 px-6 rounded-lg font-bold transition mb-8 ${
                  plan.highlighted
                    ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                Get Started
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
