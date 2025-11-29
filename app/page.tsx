'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import MinecraftHero from '@/components/minecraft-hero'
import Services from '@/components/services'
import GlobalNetwork from '@/components/global-network'
import CategoryPricing from '@/components/category-pricing'
import GamePanel from '@/components/game-panel'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <Hero />
      <Services />
      <GlobalNetwork />
      <CategoryPricing />
      <MinecraftHero />
      <GamePanel />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
