import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-yellow-50 p-6 mt-12 font-sans">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-yellow-400 text-white px-6 py-4 rounded-xl mb-8 shadow-lg max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold">Review Your Booking</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {/* LEFT */}
        <div className="md:col-span-2 space-y-6">

          {/* Trip */}
          <div className="bg-white p-6 rounded-3xl shadow-xl">
            <h3 className="text-xl font-semibold">
              {bookingData.pickupLocation} → {bookingData.dropoffLocation} ({bookingData.tripType})
            </h3>

            <p className="text-gray-600 mt-2">
              Car: {selectedCar.name}
            </p>

            <p className="text-gray-600 mt-1">
              Date: {bookingData.date} | Time: {bookingData.time}
            </p>
          </div>

          {/* Contact */}
          <div className="bg-white p-6 rounded-3xl shadow-xl">
            <h3 className="text-xl font-semibold mb-4">
              Contact Details
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="border p-3 rounded-xl" />
              <input type="text" placeholder="Mobile" className="border p-3 rounded-xl" />
              <input type="email" placeholder="Email" className="border p-3 rounded-xl" />
              <input type="text" placeholder="Pickup Location" className="border p-3 rounded-xl" />
              <input type="text" placeholder="Drop Location" className="border p-3 rounded-xl md:col-span-2" />
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="bg-white p-6 rounded-3xl shadow-xl">

          <h3 className="text-xl font-semibold mb-4">Payment</h3>

          <div className="space-y-3">

            <label className="flex justify-between border p-4 rounded-xl">
              <div>
                <input type="radio" checked={paymentOption === "zero"} onChange={() => setPaymentOption("zero")} />
                Book at zero
              </div>
              ₹0
            </label>

            <label className="flex justify-between border p-4 rounded-xl">
              <div>
                <input type="radio" checked={paymentOption === "part"} onChange={() => setPaymentOption("part")} />
                Part Pay
              </div>
              ₹{Math.round(selectedCar.price * 0.25)}
            </label>

            <label className="flex justify-between border p-4 rounded-xl">
              <div>
                <input type="radio" checked={paymentOption === "full"} onChange={() => setPaymentOption("full")} />
                Full Pay
              </div>
              ₹{selectedCar.price}
            </label>

          </div>

          {/* Coupon */}
          <div className="mt-4 flex gap-2">
            <input
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Coupon"
              className="border p-2 rounded w-full"
            />
            <button className="bg-blue-600 text-white px-4 rounded">
              Apply
            </button>
          </div>

          <button className="mt-6 w-full bg-orange-500 text-white py-3 rounded-xl">
            PROCEED
          </button>
        </div>

      </div>
    </div>
  );
}