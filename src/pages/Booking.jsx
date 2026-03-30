import React from "react";
import BookingForm from "../components/BookingForm.";

export default function Booking() {
  return (
    <div className="py-10 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-gray-100 font-sans flex flex-col">

      {/* INFO / TAGLINE */}
      <div className="max-w-3xl mx-auto text-center mt-12 px-4">
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

      {/* FORM + CAR SECTION */}
      <div className="max-w-7xl mx-auto mt-12 px-4 w-full flex flex-col lg:flex-row gap-8">

        {/* LEFT - FORM */}
        <div className="w-full lg:w-1/2 rounded-2xl shadow-2xl p-8">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center drop-shadow-md">
            Book Your Ride
          </h3>
          <BookingForm />
        </div>

        {/* RIGHT - CAR IMAGE */}
        <div className="w-full lg:w-1/2 hidden lg:flex justify-center items-center">
          <div className="overflow-hidden transform hover:scale-105 transition-transform duration-500 p-6 flex justify-center items-center">
            <img
              src="/tct-1.png"
              alt="Premium Car"
              className="w-[100%] h-auto max-w-md object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

