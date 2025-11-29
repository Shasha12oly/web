'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import MinecraftPricing from '@/components/minecraft-pricing'

export default function MinecraftPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navigation />

      <style>{`
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>

      {/* Hero with Video Background */}
      <section className="relative overflow-hidden h-96 w-screen -ml-4 -mr-4 -mb-8 flex items-center justify-center">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/minecraft-games-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Minecraft Server Hosting
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-100">
              High-performance Minecraft servers with instant setup, DDoS protection, mod support, and 24/7 support
            </p>
          </div>
        </div>
      </section>

      {/* Minecraft Pricing */}
      <MinecraftPricing />

      {/* CTA - Improved Promo Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-cyan-700 via-blue-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: 'radial-gradient(circle at 80% 20%, #00eaff33 0%, transparent 70%)' }} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Create your <span className="bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">Dream Minecraft Server</span> today!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-cyan-100 mb-6 max-w-2xl">
            Anyone can create their own Minecraft server easily. Change server configs, version (Vanilla, Spigot, Forge, Modded, etc.), install plugins or mods, and upload your own server icon—all with our advanced tool. KodeHost has tons of top features!
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-cyan-100 mb-8 w-full max-w-xl mx-auto text-sm sm:text-base">
            <li className="flex items-center gap-2"><span className="text-green-400">✔</span> Instant setup & easy config</li>
            <li className="flex items-center gap-2"><span className="text-green-400">✔</span> Mod/plugin support (Forge, Paper, Spigot...)</li>
            <li className="flex items-center gap-2"><span className="text-green-400">✔</span> Upload your own server icon</li>
            <li className="flex items-center gap-2"><span className="text-green-400">✔</span> 24/7 expert support & DDoS protection</li>
          </ul>
          <a href="#minecraft-pricing" className="inline-block px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 text-gray-900 shadow-lg hover:scale-105 transition-transform">
            Order now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
