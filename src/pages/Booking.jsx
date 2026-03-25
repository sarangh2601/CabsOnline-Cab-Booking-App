import React, { useState, useEffect } from "react";
import { MapPin, Clock, Trash2 } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function BookingDashboard() {
  const location = useLocation();
  const { bookingData, selectedCar, paidAmount } = location.state || {};

  const [bookings, setBookings] = useState([]);
  const [activeSection, setActiveSection] = useState("upcoming");

  // Add booking if it doesn't exist
  useEffect(() => {
    if (bookingData && selectedCar) {
      const isDuplicate = bookings.some(
        (b) =>
          b.pickup === bookingData.pickupLocation &&
          b.drop === bookingData.dropoffLocation &&
          b.date === bookingData.date &&
          b.carName === selectedCar.name
      );

      if (!isDuplicate) {
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
    }
  }, [bookingData, selectedCar, paidAmount, bookings]);

  const cancelBooking = (id) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: "canceled" } : b))
    );
  };

  // Filter bookings based on selected section
  const filteredBookings = bookings.filter((b) =>
    activeSection === "upcoming"
      ? b.status === "upcoming"
      : activeSection === "recent"
      ? b.status === "recent"
      : b.status === "history" || b.status === "canceled"
  );

  const statusColors = {
    upcoming: "bg-blue-100 text-blue-800",
    recent: "bg-green-100 text-green-800",
    history: "bg-gray-100 text-gray-700",
    canceled: "bg-red-100 text-red-700 line-through",
  };

  return (
    <div className="min-h-screen flex bg-gray-50 mt-10">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Dashboard</h1>
        <nav className="flex flex-col gap-4">
          {["upcoming", "recent", "history"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`flex items-center px-4 py-3 rounded-lg font-semibold transition-all ${
                activeSection === section
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Bookings
        </h2>

        {filteredBookings.length === 0 ? (
          <p className="text-gray-500 text-lg mt-10">
            No bookings found in this section.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {filteredBookings.map((b) => (
              <div
                key={b.id}
                className="bg-white rounded-2xl shadow-lg p-5 flex flex-col justify-between transition-transform duration-300 hover:scale-105"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{b.carName}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[b.status]}`}
                  >
                    {b.status.charAt(0).toUpperCase() + b.status.slice(1)}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <p className="flex items-center gap-2 text-gray-700">
                    <MapPin size={16} className="text-blue-500" />
                    {b.pickup} → {b.drop}
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <Clock size={16} className="text-blue-500" />
                    {b.date} | {b.time}
                  </p>
                  <p className="text-gray-900 font-semibold text-lg mt-2">
                    ₹{b.price}
                  </p>
                </div>

                {/* Cancel Button */}
                {b.status === "upcoming" && (
                  <button
                    onClick={() => cancelBooking(b.id)}
                    className="mt-4 w-full flex justify-center items-center gap-2 px-3 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
                  >
                    <Trash2 size={16} /> Cancel Booking
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}