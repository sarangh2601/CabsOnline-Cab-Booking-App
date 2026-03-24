import { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, Users, Car } from 'lucide-react';
import BookingForm from './BookingForm.';

export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('Hero-bg.jpg')" }}
      ></div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue/60 via-black/70 to-yellow/90"></div>

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200/30 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-200/30 blur-3xl rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT - BOOKING */}
          <BookingForm />

          {/* RIGHT - HERO */}
          <div className="hidden md:flex justify-center items-center">
            <div className="w-full max-w-2xl">
              <div className="relative group">

                {/* Background Glow Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-yellow-600/30 rounded-3xl rotate-6 transition duration-500 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-yellow-600/30 to-blue-600/30 rounded-3xl -rotate-6 transition duration-500 group-hover:scale-105"></div>

                {/* Main Card */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-10 flex flex-col items-center space-y-6 border border-gray-100 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

                  {/* IMAGE */}
                  <img
                    src="tct-1.png"
                    alt="Cab Service"
                    className="w-56 md:w-64 object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2"
                  />

                  {/* Title */}
                  <div className="text-center transition duration-300 group-hover:translate-y-[-2px]">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Premium Ride Experience
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Fast • Safe • Reliable
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 w-full text-center">
                    <div className="transition duration-300 group-hover:-translate-y-1">
                      <p className="text-lg font-bold text-blue-600">500+</p>
                      <p className="text-xs text-gray-500">Drivers</p>
                    </div>

                    <div className="transition duration-300 group-hover:-translate-y-1">
                      <p className="text-lg font-bold text-yellow-500">4.9★</p>
                      <p className="text-xs text-gray-500">Rating</p>
                    </div>

                    <div className="transition duration-300 group-hover:-translate-y-1">
                      <p className="text-lg font-bold text-green-500">24/7</p>
                      <p className="text-xs text-gray-500">Support</p>
                    </div>
                  </div>

                  {/* Progress UI */}
                  <div className="space-y-2 w-full">
                    <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-2 bg-blue-600/40 rounded-full w-5/6 transition-all duration-500 group-hover:w-full"></div>
                    <div className="h-2 bg-yellow-500/40 rounded-full w-4/5 transition-all duration-500 group-hover:w-5/6"></div>
                  </div>

                  {/* Feature Chips */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Instant Booking", "Verified Drivers", "Live Tracking"].map((item, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}