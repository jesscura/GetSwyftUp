import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Freelance Graphic Designer",
      company: "Digital Nomad",
      image: "M",
      content: "SwyftUp has completely changed how I receive payments from my international clients. No more waiting weeks for bank transfers!",
      rating: 5
    },
    {
      name: "Juan Rodriguez",
      role: "CEO",
      company: "TechStart Inc.",
      image: "J",
      content: "Managing payroll for our remote team has never been easier. SwyftUp's business features are exactly what we needed.",
      rating: 5
    },
    {
      name: "Anna Lim",
      role: "Content Creator",
      company: "@annacreates",
      image: "A",
      content: "The Apple Wallet integration is seamless! I can receive brand partnership payments instantly and use them immediately.",
      rating: 5
    },
    {
      name: "Miguel Chen",
      role: "Operations Manager", 
      company: "Global Solutions PH",
      image: "M",
      content: "The compliance features and BSP regulation give us confidence. Our accounting team loves the detailed reporting.",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            What Our Users <span className="text-gradient">Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Don't just take our word for it. Here's what real users are saying about their SwyftUp experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow">
              {/* Rating */}
              <div className="flex justify-center sm:justify-start space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed text-center sm:text-left">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center sm:justify-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.image}
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</div>
                  <div className="text-blue-600 text-xs sm:text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-2">50K+</div>
              <div className="text-blue-100 text-xs sm:text-sm">Happy Users</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-2">₱2B+</div>
              <div className="text-blue-100 text-xs sm:text-sm">Total Processed</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-2">190+</div>
              <div className="text-blue-100 text-xs sm:text-sm">Countries Supported</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100 text-xs sm:text-sm">Uptime</div>
            </div>
          </div>
        </div>

        {/* Beta Tester Quote */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border-l-4 border-blue-600">
              <svg className="w-8 h-8 text-blue-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              <blockquote className="text-lg sm:text-2xl text-gray-700 font-medium mb-6 leading-relaxed px-2">
                "As a beta tester, I've watched SwyftUp evolve into something truly special. They've solved real problems that Filipinos face with international payments."
              </blockquote>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  R
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Rico Valdez</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Beta Tester & Tech Influencer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials