'use client'

import { CheckCircle, Zap, Lock, BarChart3, Headphones, Globe } from 'lucide-react'

export default function Features() {
  const features = [
    { icon: Zap, title: 'Ultra-Fast Performance', description: 'Lightning-fast servers with SSD storage and optimized infrastructure' },
    { icon: Lock, title: 'Enterprise Security', description: 'DDoS protection, firewalls, and advanced security measures' },
    { icon: BarChart3, title: 'Real-time Analytics', description: 'Monitor your server performance with detailed analytics' },
    { icon: Headphones, title: '24/7 Support', description: 'Expert support team available round the clock' },
    { icon: Globe, title: 'Global Locations', description: 'Servers in 50+ locations worldwide for low latency' },
    { icon: CheckCircle, title: '99.9% Uptime SLA', description: 'Guaranteed uptime with compensation for downtime' },
  ]

  return (
    <section id="features" className="py-20 bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Hostzy?
          </h2>
          <p className="text-xl text-gray-400">
            Industry-leading features and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition">
                <Icon className="text-blue-400 mb-4" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
