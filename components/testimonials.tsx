'use client'

import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Shashank Sharma',
      role: 'Game Server Owner',
      content: 'Hostzy has been incredible for our gaming community. The uptime is rock solid and support is always there when we need them.',
      rating: 5,
    },
    {
      name: 'Dharamveer Kumar',
      role: 'Discord Bot Developer',
      content: 'Best bot hosting service I\'ve used. Reliable, affordable, and the dashboard is super intuitive. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Ashin V Phillip',
      role: 'VPS User',
      content: 'The performance is outstanding. My website loads incredibly fast and I haven\'t experienced any downtime in months.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-400">
            See what our customers have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-gray-800/50 rounded-lg border border-gray-700"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6">
                "{testimonial.content}"
              </p>

              <div>
                <p className="font-bold text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
