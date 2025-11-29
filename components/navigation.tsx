'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slideDown 0.5s ease-out forwards;
        }

        .nav-link {
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #06b6d4, #0891b2);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>

      {/* Promo Banner: Only show on main page */}
      {typeof window !== 'undefined' && window.location.pathname === '/' && (
        <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-white text-center py-2 text-sm font-medium animate-slide-down">
          Limited Time Offer: Save 15% on All Plans{' '}
          <span className="bg-white text-cyan-600 px-2 py-1 rounded ml-2 font-bold">KODE15</span>
          <button className="absolute right-4 top-2 text-white hover:text-gray-200">×</button>
        </div>
      )}

      {/* Navigation */}
      <nav className="sticky top-0 z-50 relative overflow-hidden border-b border-gray-800">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="/minecraft-nav-bg.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gray-900/80"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <span className="text-cyan-400 font-bold text-2xl">K</span>
              </div>
              <span className="font-bold text-xl text-white">KodeHost</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="nav-link text-gray-300 hover:text-white transition text-sm font-medium">
                Home
              </Link>
              <Link href="/games" className="nav-link text-gray-300 hover:text-white transition text-sm font-medium">
                Minecraft Hosting
              </Link>
              <Link href="/vps" className="nav-link text-gray-300 hover:text-white transition text-sm font-medium">
                VPS
              </Link>
              <Link href="/discord" className="nav-link text-gray-300 hover:text-white transition text-sm font-medium">
                Discord Bot
              </Link>
              <Link href="#webhosting" className="nav-link text-gray-300 hover:text-white transition text-sm font-medium">
                Web Hosting
              </Link>
              <Link href="#login" className="nav-link text-gray-300 hover:text-white transition text-sm font-medium">
                Login
              </Link>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <a href="/client" className="hidden md:inline-block px-6 py-2 text-white bg-cyan-600 hover:bg-cyan-700 rounded transition font-medium text-sm">
                CLIENT SPACE
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded text-white hover:bg-gray-800"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 border-t border-gray-800">
              <Link href="/" className="block px-4 py-2 text-gray-300 hover:text-white">
                Home
              </Link>
              <Link href="/games" className="block px-4 py-2 text-gray-300 hover:text-white">
                Minecraft Hosting
              </Link>
              <Link href="/vps" className="block px-4 py-2 text-gray-300 hover:text-white">
                VPS
              </Link>
              <Link href="/discord" className="block px-4 py-2 text-gray-300 hover:text-white">
                Discord Bot
              </Link>
              <Link href="#webhosting" className="block px-4 py-2 text-gray-300 hover:text-white">
                Web Hosting
              </Link>
              <Link href="#login" className="block px-4 py-2 text-gray-300 hover:text-white">
                Login
              </Link>
              <a href="/client" className="block w-full mt-4 mx-4 px-4 py-2 text-white bg-cyan-600 hover:bg-cyan-700 rounded transition font-medium text-center">
                CLIENT SPACE
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}