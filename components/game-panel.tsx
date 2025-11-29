'use client'

import { Check } from 'lucide-react'

export default function GamePanel() {
  const features = [
    'Custom Server Control Options',
    'Easy to Use and Modern Server File Manager',
    'Server Domain Setup, Plugin Installer, Mod Installer & Version Changer',
    'One Click Server Installation, Egg Changer',
    'Game Server Settings Configuration',
  ]

  return (
    <section className="py-20 bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Panel Image */}
          <div className="relative">
            <img 
              src="/ptero-panel.webp" 
              alt="PteroX Control Panel" 
              className="rounded-lg border border-gray-700 shadow-2xl w-full h-auto"
            />

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg blur-xl -z-10"></div>
          </div>

          {/* Right - Features */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful Custom Game Panel
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              KodeHost has it's Own Fork of Pterodactyl Panel. Our Panel is Extremely Modern, Fast, Responsive and has Features to Cater All Your Needs.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-cyan-600/20 border border-cyan-500/50 group-hover:bg-cyan-600/40 transition">
                      <Check className="h-4 w-4 text-cyan-400" />
                    </div>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="mt-10 px-8 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white font-bold rounded-lg transition shadow-lg shadow-cyan-500/50">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
