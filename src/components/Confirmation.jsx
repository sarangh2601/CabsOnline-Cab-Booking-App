import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  CheckCircle,
  MapPin,
  Calendar,
  Car,
  IndianRupee,
  Phone,
  Mail,
  ShieldCheck,
  Headphones,
  ChevronRight,
} from "lucide-react";

export default function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  const { bookingData, selectedCar, paymentOption } = location.state || {};

  // POST booking to backend on component mount
  useEffect(() => {
    if (bookingData && selectedCar) {
      const payload = {
        pickupLocation: bookingData.pickupLocation,
        dropoffLocation: bookingData.dropoffLocation,
        date: bookingData.date,
        time: bookingData.time,
        carName: selectedCar.name,
        fare: selectedCar.price,
        paymentOption: paymentOption,
        status: "Pending",
      };

      // Replace '1' with actual logged-in user ID if available
      const userId = bookingData.userId || 1;

      axios
        .post(`http://localhost:8080/api/bookings/assign/${userId}`, payload)
        .then((res) => {
          console.log("Booking saved successfully:", res.data);
        })
        .catch((err) => {
          console.error("Error saving booking:", err);
        });
    }
  }, [bookingData, selectedCar, paymentOption]);

  if (!bookingData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-6 lg:p-8 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-4 sm:p-6">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600" size={32} />
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Booking Confirmed 🎉
              </h1>
            </div>

            <button
              onClick={() =>
                navigate("/login", {
                  state: { bookingData, selectedCar, paymentOption },
                })
              }
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2 rounded-lg border-2 border-blue-500 text-blue-600 font-medium bg-white hover:bg-blue-50 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <span>Check Booking</span>
              <ChevronRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Info */}
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Your booking from <b>{bookingData.pickupLocation}</b> to{" "}
            <b>{bookingData.dropoffLocation}</b> is confirmed.
          </p>

          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            You will receive driver details shortly before your pickup time.
          </p>

          {/* Booking Details */}
          <div className="border rounded-xl overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-3 font-semibold text-sm sm:text-base">
              YOUR BOOKING DETAILS
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 text-gray-700 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <MapPin />
                <span className="break-words">
                  <b>Route:</b> {bookingData?.pickupLocation} → {bookingData?.dropoffLocation}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar />
                <span>
                  <b>Date:</b> {bookingData.date} | {bookingData.time}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Car />
                <span>
                  <b>Car:</b> {selectedCar?.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <IndianRupee />
                <span>
                  <b>Fare:</b> ₹{selectedCar?.price}
                </span>
              </div>

              <div>
                <b>Payment:</b> {paymentOption}
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <h2 className="font-semibold text-gray-800 mb-2">Important Notes</h2>
            <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
              <li>Driver details will be shared before pickup time.</li>
              <li>Please be ready at least 10 minutes before pickup.</li>
              <li>Extra charges may apply for additional stops or waiting.</li>
              <li>Keep your phone reachable for driver communication.</li>
            </ul>
          </div>

          {/* Button */}
          <button
            onClick={() => navigate("/")}
            className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl text-sm sm:text-base"
          >
            Book Another Ride
          </button>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-white rounded-3xl shadow-lg p-4 sm:p-6 space-y-6 border border-gray-100">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Quick Info</h2>
            <p className="text-sm text-gray-500">Everything you need for your trip</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Headphones size={18} className="text-blue-600" />
              </div>
              <p className="text-sm text-gray-700 font-medium">24x7 Customer Support</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-50 rounded-lg">
                <Car size={18} className="text-green-600" />
              </div>
              <p className="text-sm text-gray-700 font-medium">Clean & Sanitized Cars</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-50 rounded-lg">
                <ShieldCheck size={18} className="text-purple-600" />
              </div>
              <p className="text-sm text-gray-700 font-medium">Verified Drivers</p>
            </div>
          </div>

          <div className="border-t pt-5">
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Track Booking</h3>
            <p className="text-sm text-gray-500">
              Manage your ride and track driver details easily from dashboard.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-5 border border-blue-100">
            <h3 className="font-semibold text-blue-700 mb-4 text-sm">Need Help?</h3>

            <div className="space-y-3">
              <a
                href="tel: +91 72630 08668"
                className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <Phone size={18} className="text-blue-500" />
                <div>
                  <p className="text-xs text-gray-500">Call Us</p>
                  <p className="font-semibold text-sm text-gray-800">+91 72630 08668</p>
                </div>
              </a>

              <a
                href="mailto:support@CabsOnline.com"
                className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <Mail size={18} className="text-blue-500" />
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-semibold text-sm text-gray-800">support@CabsOnline.com</p>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}