'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Server, Zap, Lock, BarChart3, Headphones, Globe, Check, DollarSign, IndianRupee } from 'lucide-react'

export default function VpsPage() {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR')
  const exchangeRate = 0.012

  const convertPrice = (inrPrice: number) => {
    if (currency === 'INR') return `₹${inrPrice}`
    return `$${(inrPrice * exchangeRate).toFixed(2)}`
  }

  const animationStyles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fade-in-up {
      animation: fadeInUp 0.8s ease-out forwards;
    }

    .delay-100 {
      animation-delay: 0.1s;
    }
  `;
  const features = [
    { icon: Zap, title: 'High Performance', description: 'Latest generation processors and SSD storage' },
    { icon: Lock, title: 'Full Root Access', description: 'Complete control over your server' },
    { icon: BarChart3, title: 'Scalable Resources', description: 'Upgrade anytime as you grow' },
    { icon: Headphones, title: '24/7 Support', description: 'Expert support team available' },
    { icon: Globe, title: 'Global Network', description: 'Multiple data centers worldwide' },
    { icon: Server, title: 'Managed & Unmanaged', description: 'Choose what works for you' },
  ]

  const plans = [
    {
      name: 'Starter VPS',
      price: 399,
      specs: ['1 vCPU', '2GB RAM', '50GB SSD', '1TB Bandwidth'],
      highlighted: false,
    },
    {
      name: 'Professional VPS',
      price: 799,
      specs: ['2 vCPU', '4GB RAM', '100GB SSD', '2TB Bandwidth'],
      highlighted: true,
    },
    {
      name: 'Enterprise VPS',
      price: 1599,
      specs: ['4 vCPU', '8GB RAM', '250GB SSD', '5TB Bandwidth'],
      highlighted: false,
    },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navigation />

      <style>{animationStyles}</style>

      {/* Hero with Image Background */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/vps-bg.webp)' }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              VPS Hosting
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-100">
              Powerful virtual private servers with full root access, 99.9% uptime, and enterprise-grade performance
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            VPS Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <Icon className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              VPS Plans
            </h2>
            
            {/* Currency Toggle */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setCurrency('INR')}
                className={`flex items-center gap-2 px-6 py-2 rounded-lg font-bold transition ${
                  currency === 'INR'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                <IndianRupee size={18} />
                INR (₹)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`flex items-center gap-2 px-6 py-2 rounded-lg font-bold transition ${
                  currency === 'USD'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                <DollarSign size={18} />
                USD ($)
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-xl border transition-all duration-300 ${
                  plan.highlighted
                    ? 'border-blue-500 bg-white dark:bg-gray-800 shadow-xl dark:shadow-blue-500/20 transform scale-105'
                    : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    {convertPrice(plan.price)}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    /month
                  </span>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-bold transition mb-8 ${
                    plan.highlighted
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </button>

                <div className="space-y-4">
                  {plan.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="text-green-500 flex-shrink-0" size={20} />
                      <span className="text-gray-700 dark:text-gray-300">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Deploy Your VPS Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get instant access to powerful virtual servers with full control
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition">
            Get Started Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
