import { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, Users } from 'lucide-react';

export default function BookingWidget() {
    const [tripType, setTripType] = useState('oneway');

    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [city, setCity] = useState('');

    const [date, setDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [time, setTime] = useState('');
    const [passengers, setPassengers] = useState('1');

    // Generate time slots (15 min)
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
        const formattedTime = `${hour}:${minutes
            .toString()
            .padStart(2, '0')} ${ampm}`;

        setTime(formattedTime);
    }, []);

    const handleBooking = () => {
        alert(`Booking Type: ${tripType}`);
    };

    return (
        <div className="mt-10 mb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white to-blue-50 relative -mt-20 z-20">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-blue-400">
                    <h2 className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-900 via-black to-[#F59E0B] bg-clip-text text-transparent mb-12">
                        Where Do You Want to Go?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 ">

                        {/* LEFT SIDE */}
                        <div className="space-y-4 p-6 shadow-lg">

                            {/* 🔥 Trip Type Tabs - One Line Without Scroll */}
                            <div className="flex w-full gap-2 mb-8">
                                {['oneway', 'round', 'local'].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setTripType(type)}
                                        className={`flex-1 text-center px-2 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-md sm:rounded-lg font-medium sm:font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 border ${tripType === type
                                                ? 'bg-black text-white shadow-md'
                                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                            }`}
                                    >
                                        {type === 'oneway'
                                            ? 'One Way'
                                            : type === 'round'
                                                ? 'Round Trip'
                                                : 'Local'}
                                    </button>
                                ))}
                            </div>


                            {/* One Way & Round Trip */}
                            {(tripType === 'oneway' || tripType === 'round') && (
                                <>
                                    <input
                                        type="text"
                                        placeholder="Pickup Location"
                                        value={pickupLocation}
                                        onChange={(e) => setPickupLocation(e.target.value)}
                                        className="input"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Drop Location"
                                        value={dropoffLocation}
                                        onChange={(e) => setDropoffLocation(e.target.value)}
                                        className="input"
                                    />
                                </>
                            )}

                            {/* Local */}
                            {tripType === 'local' && (
                                <>
                                    <input
                                        type="text"
                                        placeholder="Enter City"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        className="input"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Pickup Location"
                                        value={pickupLocation}
                                        onChange={(e) => setPickupLocation(e.target.value)}
                                        className="input"
                                    />
                                </>
                            )}

                            {/* Date */}
                            <input
                                type="date"
                                value={date}
                                min={new Date().toISOString().split('T')[0]}
                                onChange={(e) => setDate(e.target.value)}
                                className="input"
                            />

                            {/* Return Date (only round) */}
                            {tripType === 'round' && (
                                <input
                                    type="date"
                                    value={returnDate}
                                    onChange={(e) => setReturnDate(e.target.value)}
                                    className="input"
                                />
                            )}

                            {/* Time Dropdown */}
                            <select
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                className="input"
                            >
                                {timeSlots.map((t, i) => (
                                    <option key={i} value={t}>
                                        {t}
                                    </option>
                                ))}
                            </select>

                            {/* Passengers */}
                            <select
                                value={passengers}
                                onChange={(e) => setPassengers(e.target.value)}
                                className="input"
                            >
                                <option value="1">1 Passenger</option>
                                <option value="2">2 Passengers</option>
                                <option value="3">3 Passengers</option>
                                <option value="4">4 Passengers</option>
                                <option value="5">5+ Passengers</option>
                            </select>
                        </div>

                        {/* RIGHT SIDE (UNCHANGED) */}
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 space-y-6">
                                <h3 className="text-2xl font-bold">Booking Summary</h3>

                                <p>Trip Type: {tripType}</p>
                                <p>From: {pickupLocation}</p>
                                <p>To: {dropoffLocation}</p>
                                {tripType === 'local' && <p>City: {city}</p>}
                                <p>Date: {date}</p>
                                {tripType === 'round' && <p>Return: {returnDate}</p>}
                                <p>Time: {time}</p>
                                <p>Passengers: {passengers}</p>

                                <button
                                    onClick={handleBooking}
                                    className="w-full py-4 bg-gradient-to-r from-black to-orange-300 text-white font-bold rounded-xl"
                                >
                                    Confirm & Book Now
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Reusable Tailwind class */}
            <style jsx>{`
        .input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 10px;
          outline: none;
          background-color: #E5F0FF;
        }
      `}</style>
        </div>
    );
}