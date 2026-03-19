import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="sm:pt-10! md:pt-20!  pb-12 bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-100 rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              ✨ Book Your Ride in Seconds
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Your Journey, <span className="bg-gradient-to-r from-blue-800 to-[#F59E0B] bg-clip-text text-transparent">Our Priority</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Safe, reliable, and affordable rides at your fingertips. Experience the future of urban transportation with our advanced booking system and trusted drivers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-800 to-[#F59E0B] text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm">
                Book a Ride Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="px-8 py-4 border-2 border-blue-800 text-blue-800 font-bold rounded-xl hover:bg-blue-800 hover:text-white transition-all duration-300 text-sm">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-blue-800">50K+</div>
                <div className="text-sm text-gray-600">Active Riders</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-800">10K+</div>
                <div className="text-sm text-gray-600">Trusted Drivers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-800">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-800/10 to-[#F59E0B]/10 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-[#F59E0B]/10 to-blue-800/10 rounded-3xl -rotate-6"></div>

              <div className="absolute inset-4 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center p-10 space-y-6">
                <div className="flex items-center justify-center">
                  <img src="tct-1.png" alt="" />
                </div>
                <h3 className="text-2xl font-bold text-center">Premium Rides</h3>
                <div className="space-y-2 w-full">
                  <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-2 bg-blue-800/30 rounded-full w-5/6"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-4/5"></div>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-blue-800 to-[#F59E0B] text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm">
                  Request Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}