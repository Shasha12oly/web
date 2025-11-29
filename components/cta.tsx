'use client'

import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-700 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-cyan-100 mb-8">
          Join thousands of satisfied customers and launch your server today
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-cyan-600 font-bold rounded hover:bg-gray-100 transition flex items-center justify-center gap-2">
            Get Started Now <ArrowRight size={20} />
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-cyan-600 transition">
            Contact Sales
          </button>
        </div>

        <p className="text-cyan-100 mt-8">
          No credit card required • 24/7 support • 30-day money-back guarantee
        </p>
      </div>
    </section>
  )
}
