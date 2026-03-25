import { Mail, Phone } from "lucide-react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { User, MapPin } from "lucide-react";

export default function ConfirmBooking() {
  const location = useLocation();
  const navigate = useNavigate();

  const { bookingData, selectedCar } = location.state || {};

  const [paymentOption, setPaymentOption] = useState("part");
  const [coupon, setCoupon] = useState("");

  if (!bookingData || !selectedCar) {
    return (
      <div className="text-center mt-20">
        <p>No booking details found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleProceed = () => {
    const paidAmount =
      paymentOption === "zero"
        ? 0
        : paymentOption === "part"
          ? Math.round(selectedCar.price * 0.25)
          : selectedCar.price;

    navigate("/confirmation", {
      state: {
        bookingData,
        selectedCar,
        paymentOption,
      },
    });;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-yellow-50 p-4 sm:p-6 mt-10">
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-3">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-yellow-400 text-white px-6 py-3 rounded-xl shadow-lg">
            <h2 className="text-lg sm:text-2xl font-bold">
              Review Your Booking
            </h2>
          </div>

          {/* Trip Details */}
          <div className="bg-white p-5 rounded-2xl shadow-md border">
            <h3 className="text-lg font-semibold">
              {bookingData.pickupLocation} → {bookingData.dropoffLocation} (
              {bookingData.tripType})
            </h3>
            <p className="text-gray-600 mt-2">
              Car: <b>{selectedCar.name}</b>
            </p>
            <p className="text-gray-600 mt-1">
              Date: {bookingData.date} | Time: {bookingData.time}
            </p>
          </div>

          {/* Contact Details */}
          <div className="relative bg-white/60 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-yellow-400/10 blur-2xl opacity-40 pointer-events-none"></div>

            <h3 className="text-2xl font-bold mb-6 text-gray-800 tracking-wide">
              Contact Details
            </h3>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Name */}
              <div className="relative group">
                <User
                  className="absolute left-3 top-4 text-gray-400 group-focus-within:text-blue-500"
                  size={18}
                />
                <input
                  type="text"
                  placeholder=" "
                  className="w-full pl-10 pr-3 pt-5 pb-2 rounded-xl border border-gray-300 bg-white/70 focus:border-blue-500 focus:ring-2 focus:ring-blue-400/30 outline-none transition duration-300 shadow-sm"
                />
                <label className="absolute left-10 top-2 text-gray-500 text-sm transition-all group-focus-within:text-blue-600 group-focus-within:scale-90 group-focus-within:-translate-y-1">
                  Full Name
                </label>
              </div>

              {/* Mobile */}
              <div className="relative group">
                <Phone
                  className="absolute left-3 top-4 text-gray-400 group-focus-within:text-blue-500"
                  size={18}
                />
                <input
                  type="text"
                  placeholder=" "
                  className="w-full pl-10 pr-3 pt-5 pb-2 rounded-xl border border-gray-300 bg-white/70 focus:border-blue-500 focus:ring-2 focus:ring-blue-400/30 outline-none transition duration-300 shadow-sm"
                />
                <label className="absolute left-10 top-2 text-gray-500 text-sm transition-all group-focus-within:text-blue-600 group-focus-within:scale-90 group-focus-within:-translate-y-1">
                  Mobile Number
                </label>
              </div>

              {/* Email */}
              <div className="relative group md:col-span-2">
                <Mail
                  className="absolute left-3 top-4 text-gray-400 group-focus-within:text-purple-500"
                  size={18}
                />
                <input
                  type="email"
                  placeholder=" "
                  className="w-full pl-10 pr-3 pt-5 pb-2 rounded-xl border border-gray-300 bg-white/70 focus:border-purple-500 focus:ring-2 focus:ring-purple-400/30 outline-none transition duration-300 shadow-sm"
                />
                <label className="absolute left-10 top-2 text-gray-500 text-sm transition-all group-focus-within:text-purple-600 group-focus-within:scale-90 group-focus-within:-translate-y-1">
                  Email Address
                </label>
              </div>

              {/* Pickup */}
              <div className="relative group md:col-span-2">
                <MapPin
                  className="absolute left-3 top-4 text-gray-400 group-focus-within:text-green-500"
                  size={18}
                />
                <input
                  type="text"
                  placeholder=" "
                  className="w-full pl-10 pr-3 pt-5 pb-2 rounded-xl border border-gray-300 bg-white/70 focus:border-green-500 focus:ring-2 focus:ring-green-400/30 outline-none transition duration-300 shadow-sm"
                />
                <label className="absolute left-10 top-2 text-gray-500 text-sm transition-all group-focus-within:text-green-600 group-focus-within:scale-90 group-focus-within:-translate-y-1">
                  Pickup Location
                </label>
              </div>

              {/* Drop */}
              <div className="relative group md:col-span-2">
                <MapPin
                  className="absolute left-3 top-4 text-gray-400 group-focus-within:text-yellow-500"
                  size={18}
                />
                <input
                  type="text"
                  placeholder=" "
                  className="w-full pl-10 pr-3 pt-5 pb-2 rounded-xl border border-gray-300 bg-white/70 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30 outline-none transition duration-300 shadow-sm"
                />
                <label className="absolute left-10 top-2 text-gray-500 text-sm transition-all group-focus-within:text-yellow-600 group-focus-within:scale-90 group-focus-within:-translate-y-1">
                  Drop Location
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5">
          {/* Payment */}
          <div className="bg-white p-5 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-4">Payment Options</h3>

            <div className="space-y-3">
              <label className="flex justify-between items-center border p-3 rounded-xl cursor-pointer hover:bg-gray-50">
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    checked={paymentOption === "zero"}
                    onChange={() => setPaymentOption("zero")}
                  />
                  <span>Book at Zero</span>
                </div>
                ₹0
              </label>

              <label className="flex justify-between items-center border p-3 rounded-xl cursor-pointer hover:bg-gray-50">
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    checked={paymentOption === "part"}
                    onChange={() => setPaymentOption("part")}
                  />
                  <span>Part Pay</span>
                </div>
                ₹{Math.round(selectedCar.price * 0.25)}
              </label>

              <label className="flex justify-between items-center border p-3 rounded-xl cursor-pointer hover:bg-gray-50">
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    checked={paymentOption === "full"}
                    onChange={() => setPaymentOption("full")}
                  />
                  <span>Full Pay</span>
                </div>
                ₹{selectedCar.price}
              </label>
            </div>

            {/* Coupon */}
            <div className="mt-4 flex gap-2">
              <input
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter Coupon"
                className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <button className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700">
                Apply
              </button>
            </div>

            {/* CTA */}
            <button
              className="mt-5 w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg"
              onClick={handleProceed}
            >
              PROCEED
            </button>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <h3 className="font-bold text-blue-600 mb-4 text-base">Need Help?</h3>
            <div className="space-y-3">
              <a
                href="tel:1234567890"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition"
              >
                <Phone size={18} className="text-blue-500" />
                <div>
                  <p className="text-xs text-gray-500">Call Us</p>
                  <p className="font-semibold text-sm text-gray-800">
                    +91 72630 08668
                  </p>
                </div>
              </a>

              <a
                href="mailto:support@CabsOnline.com"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition"
              >
                <Mail size={18} className="text-blue-500" />
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-semibold text-sm text-gray-800">
                    support@CabsOnline.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}