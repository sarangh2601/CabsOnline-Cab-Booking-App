import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MapPin, Clock, Trash2 } from "lucide-react";

export default function Booking() {
  const location = useLocation();
  const { bookingData, selectedCar, paymentOption, paidAmount } = location.state || {};

  const [bookings, setBookings] = useState([]);
  const [tab, setTab] = useState("upcoming");

  useEffect(() => {
    if (bookingData && selectedCar) {
      const newBooking = {
        id: Date.now(),
        pickup: bookingData.pickupLocation,
        drop: bookingData.dropoffLocation,
        date: bookingData.date,
        time: bookingData.time,
        tripType: bookingData.tripType,
        carName: selectedCar.name,
        price: paidAmount || selectedCar.price,
        status: "upcoming",
      };
      setBookings((prev) => [newBooking, ...prev]);
    }
  }, [bookingData, selectedCar, paidAmount]);

  const cancelBooking = (id) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: "canceled" } : b))
    );
  };

  const filteredBookings = bookings.filter((b) =>
    tab === "upcoming"
      ? b.status === "upcoming"
      : tab === "recent"
      ? b.status === "recent"
      : b.status === "history" || b.status === "canceled"
  );

  const statusColors = {
    upcoming: "bg-blue-100 text-blue-700",
    recent: "bg-green-100 text-green-700",
    history: "bg-gray-100 text-gray-700",
    canceled: "bg-red-100 text-red-700 line-through",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-yellow-50 p-4 sm:p-6">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        Booking Details
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {["upcoming", "recent", "history"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-6 py-2 rounded-2xl font-semibold transition-all duration-300 ${
              tab === t
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                : "bg-white text-gray-600 border border-gray-200 hover:shadow-md hover:scale-105"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Booking Cards */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
        {filteredBookings.length === 0 && (
          <p className="text-center text-gray-500 col-span-full mt-10">
            No bookings found in this section.
          </p>
        )}

        {filteredBookings.map((b) => (
          <div
            key={b.id}
            className="relative bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-105"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-gray-800">{b.carName}</h2>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[b.status]}`}
              >
                {b.status.charAt(0).toUpperCase() + b.status.slice(1)}
              </span>
            </div>

            {/* Details */}
            <div className="space-y-2">
              <p className="text-gray-600 flex items-center gap-2">
                <MapPin size={16} />
                {b.pickup} → {b.drop}
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <Clock size={16} />
                {b.date} | {b.time}
              </p>
              <p className="text-gray-800 font-semibold text-lg mt-2">
                ₹{b.price}
              </p>
            </div>

            {/* Cancel Button */}
            {b.status === "upcoming" && (
              <button
                onClick={() => cancelBooking(b.id)}
                className="mt-5 w-full flex justify-center items-center gap-2 px-4 py-2 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition"
              >
                <Trash2 size={16} /> Cancel Booking
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}