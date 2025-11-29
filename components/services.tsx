'use client'

import { Gamepad2, Server, Bot, Globe } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Gamepad2,
      title: 'Minecraft Hosting',
      description: 'High-performance Minecraft servers with mod support, DDoS protection, and instant setup.',
      link: '/games',
    },
    {
      icon: Server,
      title: 'VPS Hosting',
      description: 'Powerful virtual private servers with full root access and 99.9% uptime guarantee.',
      link: '/vps',
    },
    {
      icon: Bot,
      title: 'Discord Bot Hosting',
      description: 'Reliable hosting for your Discord bots with instant deployment and 24/7 uptime.',
      link: '/discord',
    },
    {
      icon: Globe,
      title: 'Web Hosting',
      description: 'Scalable web hosting solutions for developers and businesses of all sizes.',
      link: '#webhosting',
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400">
            Choose from our comprehensive range of hosting solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <a
                key={index}
                href={service.link}
                className="group p-6 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg hover:border-cyan-500/50 hover:bg-gray-800/80 transition-all duration-300"
              >
                <div className="mb-4 text-cyan-400 group-hover:text-cyan-300 transition">
                  <Icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {service.description}
                </p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
