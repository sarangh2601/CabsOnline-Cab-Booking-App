import React from "react";

export default function CallToAction() {
  return (
    <section className="relative w-full h-[55vh] md:h-[60vh] flex items-center overflow-hidden">

      {/* Background Image */}
      <img
        src="CallToAction.jpg"
        alt="Premium Cab Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/80"></div>

      {/* Glow Layer (Premium Touch) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-yellow-500/20"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Glass Card */}
          <div className="backdrop-blur-xs bg-white/10 border border-white/20 rounded-3xl px-6 md:px-12 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">

            {/* LEFT → TEXT */}
            <div className="text-left max-w-xl space-y-5 text-white">

              {/* Badge */}
              <div className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs tracking-wide">
                Get Started Today
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Book Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
                  First Ride
                </span>{" "}
                Now
              </h2>

              {/* Description */}
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                Experience safe, reliable, and premium transportation with trusted drivers,
                instant booking, and smooth journeys every time you travel.
              </p>
            </div>

            {/* RIGHT → BUTTON */}
            <div className="flex-shrink-0">
              <button className="relative px-16 py-3 bg-gradient-to-r from-blue-600 to-yellow-500 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">

                {/* Shine Effect */}
                <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-20 transition"></span>

                Book Now →
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}