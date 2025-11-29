'use client'

export default function MinecraftHero() {
  return (
    <section className="relative py-8 overflow-hidden bg-gray-950">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url(/minecraft-hero-bg.webp)' }}
      ></div>

      {/* Dotted Pattern Overlay */}
      <img
        src="/minecraft-hero-dot.png"
        alt="Minecraft dots pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Create your Dream
              <span className="text-cyan-400"> Minecraft server</span>
              {' '}today!
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Anyone can create his own Minecraft server easily. Change server configurations, change server version (Vanilla, Snapshot, Spigot, Paper, Forge, Modded, Paper, Spigot...), change server egg or install plugins, install mods, change server icon or upload your own server icon with our advanced hosting tool. KodeHost has lots of TOP features!
            </p>
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition transform hover:scale-105">
              Order now
            </button>
          </div>

          {/* Right - Minecraft Character and Blocks */}
          <div className="relative h-48 flex items-center justify-center">
            {/* TNT Block - Top Left */}
            <img
              src="/tnt-block.png"
              alt="TNT Block"
              className="absolute top-0 left-0 w-20 h-20 animate-bounce"
              style={{ animationDelay: '0s' }}
            />

            {/* Steve Character - Center */}
            <img
              src="/steve.png"
              alt="Steve Character"
              className="relative w-40 h-40 object-contain drop-shadow-2xl"
            />

            {/* TNT Block - Bottom Right */}
            <img
              src="/tnt-block.png"
              alt="TNT Block"
              className="absolute bottom-0 right-0 w-20 h-20 animate-bounce"
              style={{ animationDelay: '0.5s' }}
            />

            {/* Decorative Blocks */}
            <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-green-600 rounded opacity-70 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-blue-600 rounded opacity-70 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
