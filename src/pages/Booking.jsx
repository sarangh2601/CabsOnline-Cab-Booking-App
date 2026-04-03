import React from "react";
import BookingForm from "../components/BookingForm.";
import Hero from "../components/Hero";

export default function Booking() {
  return (
    <div className="pt-10 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-gray-100 font-sans flex flex-col">

      {/* INFO / TAGLINE */}
      <div className="max-w-3xl mx-auto text-center mt-12 px-4 py-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold mb-4 animate-pulse">
          Premium Experience
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-3 drop-shadow-lg">
          Simple & Transparent Booking
        </h2>
        <p className="text-gray-300 mb-6 text-sm sm:text-base">
          Enter your trip details below and select your ride. Enjoy professional drivers, clean vehicles, and clear pricing.
        </p>
        <p className="text-gray-400 text-sm">
          Need help?{" "}
          <span className="text-yellow-400 underline cursor-pointer hover:text-yellow-300 transition-colors">
            Contact Support
          </span>
        </p>
      </div>

      <Hero/>
    </div>
  );
}

