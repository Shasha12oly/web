'use client'

import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16 border-t border-gray-800">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .footer-item {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .footer-link {
          position: relative;
          transition: all 0.3s ease;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #06b6d4;
          transition: width 0.3s ease;
        }

        .footer-link:hover::after {
          width: 100%;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div className="footer-item">
            <h3 className="text-white font-bold text-lg mb-4">KodeHost</h3>
            <p className="text-sm text-gray-400 mb-4">
              Premium game hosting, VPS, and bot hosting solutions for gaming communities and developers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="footer-item">
            <h4 className="text-white font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="footer-link hover:text-white transition">Game Server Hosting</Link></li>
              <li><Link href="#" className="footer-link hover:text-white transition">VPS Hosting</Link></li>
              <li><Link href="#" className="footer-link hover:text-white transition">Bot Hosting</Link></li>
              <li><Link href="#" className="footer-link hover:text-white transition">Cloud Infrastructure</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-item">
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="footer-link hover:text-white transition">About Us</Link></li>
              <li><Link href="#" className="footer-link hover:text-white transition">Blog</Link></li>
              <li><Link href="#" className="footer-link hover:text-white transition">Careers</Link></li>
              <li><Link href="#" className="footer-link hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-item">
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:kodehost2025@gmail.com" className="hover:text-white transition">kodehost2025@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+919876543210" className="hover:text-white transition">+91 98765 43210</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Gurugram, Haryana, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 KodeHost. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="footer-link hover:text-white transition">Privacy Policy</Link>
              <Link href="#" className="footer-link hover:text-white transition">Terms of Service</Link>
              <Link href="#" className="footer-link hover:text-white transition">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
