import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Calendar, Clock, Users } from "lucide-react";

const BookingForm = () => {
  const navigate = useNavigate();

  const [tripType, setTripType] = useState("oneway");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [time, setTime] = useState("");

  // Generate 15-min interval time slots
  const generateTimeSlots = () => {
    const times = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 15) {
        const hour = h % 12 || 12;
        const ampm = h < 12 ? "AM" : "PM";
        const minute = m.toString().padStart(2, "0");
        times.push(`${hour}:${minute} ${ampm}`);
      }
    }
    return times;
  };
  const timeSlots = generateTimeSlots();

  // Set default date & time
  useEffect(() => {
    const now = new Date();
    setDate(now.toISOString().split("T")[0]);
    const minutes = Math.floor(now.getMinutes() / 15) * 15;
    const hour = now.getHours() % 12 || 12;
    const ampm = now.getHours() < 12 ? "AM" : "PM";
    setTime(`${hour}:${minutes.toString().padStart(2, "0")} ${ampm}`);
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      tripType,
      pickupLocation,
      dropoffLocation: tripType !== "local" ? dropoffLocation : null,
      city: tripType === "local" ? city : null,
      date,
      time,
      returnDate: tripType === "round" ? returnDate : null,
    };

    // Navigate to SelectCar page with booking data
    navigate("/select-car", { state: { bookingData: data } });
  };

  return (
    <>
      {/* LEFT - BOOKING */}
      <div className="w-full">
        <form
          className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-6 sm:p-8 space-y-6"
          onSubmit={handleSubmit}
        >
          {/* Tabs */}
          <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
            {["oneway", "round", "local"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setTripType(type)}
                className={`flex-1 py-2.5 text-sm sm:text-base rounded-lg font-semibold transition-all duration-300
                ${
                  tripType === type
                    ? "bg-gradient-to-r from-blue-600 to-yellow-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-white"
                }`}
              >
                {type === "oneway"
                  ? "One Way"
                  : type === "round"
                  ? "Round Trip"
                  : "Local"}
              </button>
            ))}
          </div>

          {/* Inputs */}
          <div className="space-y-4">
            {tripType !== "local" ? (
              <>
                <InputWithIcon
                  icon={<MapPin />}
                  placeholder="Pickup Location"
                  value={pickupLocation}
                  onChange={setPickupLocation}
                />
                <InputWithIcon
                  icon={<MapPin />}
                  placeholder="Drop Location"
                  value={dropoffLocation}
                  onChange={setDropoffLocation}
                />
              </>
            ) : (
              <>
                <InputWithIcon
                  icon={<Users />}
                  placeholder="City"
                  value={city}
                  onChange={setCity}
                />
                <InputWithIcon
                  icon={<MapPin />}
                  placeholder="Pickup Location"
                  value={pickupLocation}
                  onChange={setPickupLocation}
                />
              </>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <InputWithIcon
                icon={<Calendar />}
                type="date"
                value={date}
                onChange={setDate}
              />
              <SelectWithIcon
                icon={<Clock />}
                options={timeSlots}
                value={time}
                onChange={setTime}
              />
            </div>

            {tripType === "round" && (
              <InputWithIcon
                icon={<Calendar />}
                type="date"
                value={returnDate}
                onChange={setReturnDate}
              />
            )}

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-yellow-500 text-white shadow-md hover:shadow-xl hover:scale-[1.02] transition"
            >
              Explore Cabs
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookingForm;

/* INPUT COMPONENT */
function InputWithIcon({ icon, placeholder, value, onChange, type = "text" }) {
  return (
    <div className="relative group">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 group-focus-within:text-yellow-500">
        {icon}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
      />
    </div>
  );
}

/* SELECT COMPONENT */
function SelectWithIcon({ icon, options, value, onChange }) {
  return (
    <div className="relative group">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 group-focus-within:text-yellow-500">
        {icon}
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
      >
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt || "Select"}
          </option>
        ))}
      </select>
    </div>
  );
}