import { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, Users, Car } from 'lucide-react';

export default function BookingWidget() {
  const [tripType, setTripType] = useState('oneway');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [time, setTime] = useState('');
  const [carType, setCarType] = useState('');

  // Generate time slots
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

  // Set default date & time
  useEffect(() => {
    const now = new Date();
    const currentDate = now.toISOString().split('T')[0];
    setDate(currentDate);

    const minutes = Math.floor(now.getMinutes() / 15) * 15;
    const hour = now.getHours() % 12 || 12;
    const ampm = now.getHours() < 12 ? 'AM' : 'PM';
    setTime(`${hour}:${minutes.toString().padStart(2, '0')} ${ampm}`);
  }, []);

  const handleBooking = () => {
    alert(`Booking Type: ${tripType}`);
  };

  return (
    <div className="mt-10 mb-10 px-4 sm:px-6 lg:px-8 relative z-20">

       {/* HEADER */}
      <div className="text-center pt-28 pb-12">
        <h1 className="text-5xl font-bold">
          Book Your <span className="text-blue-600">Ride</span>
        </h1>
        <p className="text-gray-500 mt-2">Fast, reliable & premium cab service</p>
      </div> 

      
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-t-4 border-blue-400 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
          
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-900 via-black to-yellow-600 bg-clip-text text-transparent mb-12">
            Where Do You <span className="bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent">Want to Go?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT SIDE - Booking Inputs */}
            <div className="space-y-6 p-6 shadow-lg rounded-2xl bg-white/70">
              
              {/* Trip Type Tabs */}
              <div className="flex w-full gap-3 mb-6">
                {['oneway', 'round', 'local'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setTripType(type)}
                    className={`flex-1 text-center px-4 py-3 rounded-xl font-semibold text-sm md:text-base transition-colors
                      ${tripType === type
                        ? 'bg-gradient-to-r from-blue-500 to-yellow-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {type === 'oneway' ? 'One Way' : type === 'round' ? 'Round Trip' : 'Local'}
                  </button>
                ))}
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 gap-4">
                {(tripType === 'oneway' || tripType === 'round') && (
                  <>
                    <InputWithIcon
                      icon={<MapPin className="text-blue-500" />}
                      placeholder="Pickup Location"
                      value={pickupLocation}
                      onChange={setPickupLocation}
                    />
                    <InputWithIcon
                      icon={<MapPin className="text-yellow-500" />}
                      placeholder="Drop Location"
                      value={dropoffLocation}
                      onChange={setDropoffLocation}
                    />
                  </>
                )}

                {tripType === 'local' && (
                  <>
                    <InputWithIcon
                      icon={<Users className="text-blue-500" />}
                      placeholder="City"
                      value={city}
                      onChange={setCity}
                    />
                    <InputWithIcon
                      icon={<MapPin className="text-yellow-500" />}
                      placeholder="Pickup Location"
                      value={pickupLocation}
                      onChange={setPickupLocation}
                    />
                  </>
                )}

                <InputWithIcon
                  icon={<Calendar className="text-blue-500" />}
                  type="date"
                  value={date}
                  onChange={setDate}
                />

                {tripType === 'round' && (
                  <InputWithIcon
                    icon={<Calendar className="text-yellow-500" />}
                    type="date"
                    value={returnDate}
                    onChange={setReturnDate}
                  />
                )}

                <SelectWithIcon
                  icon={<Clock className="text-blue-500" />}
                  options={timeSlots}
                  value={time}
                  onChange={setTime}
                />

                <SelectWithIcon
                  icon={<Car className="text-yellow-500" />}
                  options={['', 'Sedan', 'SUV', 'Hatchback', 'Minivan', 'Luxury']}
                  value={carType}
                  onChange={setCarType}
                />
              </div>
            </div>

            {/* RIGHT SIDE - Summary */}
            <div className="space-y-6">
              <div className="bg-white/70 rounded-2xl p-8 space-y-6 shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600">Booking Summary</h3>
                <p>Trip Type: <span className="font-semibold">{tripType}</span></p>
                <p>From: <span className="font-semibold">{pickupLocation}</span></p>
                <p>To: <span className="font-semibold">{dropoffLocation}</span></p>
                {tripType === 'local' && <p>City: <span className="font-semibold">{city}</span></p>}
                <p>Date: <span className="font-semibold">{date}</span></p>
                {tripType === 'round' && <p>Return: <span className="font-semibold">{returnDate}</span></p>}
                <p>Time: <span className="font-semibold">{time}</span></p>
                <p>Car Type: <span className="font-semibold">{carType}</span></p>

                <button
                  onClick={handleBooking}
                  className="w-full py-4 bg-black hover:bg-white border-1 hover:text-black hover:border-1 hover:border-black text-white font-bold rounded-2xl transition-all hover:opacity-90"
                >
                  Confirm & Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reusable Tailwind classes */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 12px;
          outline: none;
          background-color: #f5f8ff;
          transition: all 0.3s;
        }
        .input:focus {
          border-color: #facc15;
          box-shadow: 0 0 5px rgba(250, 204, 21, 0.5);
        }
      `}</style>
    </div>
  );
}

// Reusable Input with Icon
function InputWithIcon({ icon, placeholder, value, onChange, type = 'text' }) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white/80 focus:ring-2 focus:ring-yellow-500 focus:outline-none shadow-sm placeholder-gray-500 transition"
      />
    </div>
  );
}

// Reusable Select with Icon
function SelectWithIcon({ icon, options, value, onChange }) {
  return (
    <div className="relative">
      {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</div>}
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white/80 focus:ring-2 focus:ring-yellow-500 focus:outline-none shadow-sm transition"
      >
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt || 'Select Car Type'}
          </option>
        ))}
      </select>
    </div>
  );
}