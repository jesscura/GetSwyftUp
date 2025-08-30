import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your SwyftUp account in minutes with just your basic information and identity verification.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Get Your Card",
      description: "Receive your virtual SwyftUp card instantly and add it to your Apple Wallet or Google Wallet.",
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Start Transacting",
      description: "Send, receive, and manage your money globally with zero hassle. Enjoy seamless digital payments.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    }
  ]

  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            How <span className="text-gradient">SwyftUp</span> Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Getting started with SwyftUp is simple. Follow these three easy steps to revolutionize your payment experience.
          </p>
        </div>

        {/* Steps for Individuals */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-8 sm:mb-12">For Individuals & Digital Nomads</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection line - hide on mobile */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2 z-0"></div>
                )}
                
                <div className="relative bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-300 mb-4">{step.number}</div>
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps for Businesses */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-8 sm:mb-12">For Businesses</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-300 mb-4">01</div>
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Setup Business Account</h4>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Register your business and verify your documents for enhanced features and higher limits.</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-300 mb-4">02</div>
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Add Employees</h4>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Invite your team members and set up their SwyftUp cards for streamlined payroll management.</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow text-center sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl font-bold text-gray-300 mb-4">03</div>
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Automate Payroll</h4>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Schedule automatic payments, track expenses, and generate reports with our powerful business tools.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg sm:text-xl opacity-90 mb-6 px-2">Join thousands of Filipinos who are already experiencing the future of payments.</p>
            <button className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors min-h-[48px]">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks