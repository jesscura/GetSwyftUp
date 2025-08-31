import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-2xl font-bold">SwyftUp</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Revolutionizing payments for Filipinos. The first company in the Philippines to issue cards connected to Apple Wallet and Google Wallet.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              {/* Social Icons here */}
            </div>
          </div>
          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {/* ...your links here... */}
            </ul>
          </div>
          {/* Support */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {/* ...your support links here... */}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Get the latest updates on new features and product announcements.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-600 text-sm sm:text-base min-h-[48px]"
              />
              <button className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base min-h-[48px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <div className="text-gray-400 text-xs sm:text-sm">
              © 2024 SwyftUp. All rights reserved. Licensed by the Bangko Sentral ng Pilipinas.
            </div>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors py-2">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors py-2">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors py-2">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors py-2">Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
