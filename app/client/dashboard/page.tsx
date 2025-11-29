'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { LogOut, Settings, CreditCard, Ticket } from 'lucide-react'
import { useAuth } from '@/context/auth-context'

export default function ClientDashboard() {
  const router = useRouter()
  const { user, logout, loading } = useAuth()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/client')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900">
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

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      {/* Header */}
      <nav className="bg-gray-800/50 backdrop-blur border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center bg-cyan-600 rounded-full">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="font-bold text-xl text-white">KodeHost</span>
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-gray-300">Welcome, <span className="font-bold text-cyan-400">{user.name}</span></span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Manage your services and account</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="card-hover bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6 animate-fade-in-up">
            <div className="text-cyan-400 mb-2">
              <CreditCard size={24} />
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Active Services</h3>
            <p className="text-3xl font-bold text-white">0</p>
          </div>

          <div className="card-hover bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6 animate-fade-in-up">
            <div className="text-green-400 mb-2">
              <CreditCard size={24} />
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Account Balance</h3>
            <p className="text-3xl font-bold text-white">₹0.00</p>
          </div>

          <div className="card-hover bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6 animate-fade-in-up">
            <div className="text-yellow-400 mb-2">
              <Ticket size={24} />
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Open Tickets</h3>
            <p className="text-3xl font-bold text-white">0</p>
          </div>

          <div className="card-hover bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6 animate-fade-in-up">
            <div className="text-purple-400 mb-2">
              <Settings size={24} />
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Account Status</h3>
            <p className="text-3xl font-bold text-white text-green-400">Active</p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-12 animate-fade-in-up">
          <h2 className="text-2xl font-bold text-white mb-6">Your Services</h2>
          <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-8 text-center">
            <p className="text-gray-400 mb-4">You don't have any active services yet.</p>
            <Link
              href="/"
              className="inline-block px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-lg transition"
            >
              Browse Plans
            </Link>
          </div>
        </div>

        {/* Recent Invoices */}
        <div className="animate-fade-in-up">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Invoices</h2>
          <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-8 text-center">
            <p className="text-gray-400">No invoices yet.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
