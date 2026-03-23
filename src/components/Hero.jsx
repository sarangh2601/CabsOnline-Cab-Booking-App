import { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, Users, Car } from 'lucide-react';

export default function Hero() {
  const [tripType, setTripType] = useState('oneway');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [time, setTime] = useState('');
  const [carType, setCarType] = useState('');

  const generateTimeSlots = () => {
    const times = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 15) {
        const hour = h % 12 || 12;
        const ampm = h < 12 ? 'AM' : 'PM';
        const minute = m.toString().padStart(2, '0');
        times.push(`${hour}:${minute} ${ampm}`);
      }
    }
    return times;
  };

  const timeSlots = generateTimeSlots();

  useEffect(() => {
    const now = new Date();
    setDate(now.toISOString().split('T')[0]);

    const minutes = Math.floor(now.getMinutes() / 15) * 15;
    const hour = now.getHours() % 12 || 12;
    const ampm = now.getHours() < 12 ? 'AM' : 'PM';

    setTime(`${hour}:${minutes.toString().padStart(2, '0')} ${ampm}`);
  }, []);

  return (
    <section className="w-full min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-yellow-50 relative overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200/30 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-200/30 blur-3xl rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT - BOOKING */}
          <div className="w-full">
            <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-6 sm:p-8 space-y-6">

              {/* Tabs */}
              <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
                {['oneway', 'round', 'local'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setTripType(type)}
                    className={`flex-1 py-2.5 text-sm sm:text-base rounded-lg font-semibold transition-all duration-300
                    ${tripType === type
                        ? 'bg-gradient-to-r from-blue-600 to-yellow-500 text-white shadow-md'
                        : 'text-gray-600 hover:bg-white'
                      }`}
                  >
                    {type === 'oneway' ? 'One Way' : type === 'round' ? 'Round Trip' : 'Local'}
                  </button>
                ))}
              </div>

              {/* Inputs */}
              <div className="space-y-4">

                {(tripType !== 'local') ? (
                  <>
                    <InputWithIcon icon={<MapPin />} placeholder="Pickup Location" value={pickupLocation} onChange={setPickupLocation} />
                    <InputWithIcon icon={<MapPin />} placeholder="Drop Location" value={dropoffLocation} onChange={setDropoffLocation} />
                  </>
                ) : (
                  <>
                    <InputWithIcon icon={<Users />} placeholder="City" value={city} onChange={setCity} />
                    <InputWithIcon icon={<MapPin />} placeholder="Pickup Location" value={pickupLocation} onChange={setPickupLocation} />
                  </>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <InputWithIcon icon={<Calendar />} type="date" value={date} onChange={setDate} />
                  <SelectWithIcon icon={<Clock />} options={timeSlots} value={time} onChange={setTime} />
                </div>

                {tripType === 'round' && (
                  <InputWithIcon icon={<Calendar />} type="date" value={returnDate} onChange={setReturnDate} />
                )}

                <SelectWithIcon
                  icon={<Car />}
                  options={['', 'Sedan', 'SUV', 'Hatchback', 'Minivan', 'Luxury']}
                  value={carType}
                  onChange={setCarType}
                />

                {/* Button */}
                <button className="w-full py-3.5 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-yellow-500 text-white shadow-md hover:shadow-xl hover:scale-[1.02] transition">
                  Confirm Booking
                </button>

              </div>
            </div>
          </div>

          {/* RIGHT - HERO */}
          <div className="hidden md:flex justify-center items-center">
            <div className="w-full max-w-2xl">

              <div className="relative group">

                {/* Background Glow Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-yellow-600/10 rounded-3xl rotate-6 transition duration-500 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-yellow-600/10 to-blue-600/10 rounded-3xl -rotate-6 transition duration-500 group-hover:scale-105"></div>

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

/* INPUT COMPONENT */
function InputWithIcon({ icon, placeholder, value, onChange, type = 'text' }) {
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
            {opt || 'Select'}
          </option>
        ))}
      </select>
    </div>
  );
}