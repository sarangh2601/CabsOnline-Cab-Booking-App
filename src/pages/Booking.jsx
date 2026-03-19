import { useState } from 'react';
import { MapPin, Calendar, Users, Clock, Phone, Mail } from 'lucide-react';

export default function Booking() {
  const [bookingData, setBookingData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: '1',
    rideType: 'economy',
  });

  const [bookingStep, setBookingStep] = useState(0);
  const [bookedRide, setBookedRide] = useState(null);

  const rideTypes = [
    { id: 'economy', name: 'Economy', price: '$5.99', icon: '🚗', desc: 'Budget-friendly option' },
    { id: 'comfort', name: 'Comfort', price: '$8.99', icon: '🚙', desc: 'More spacious & comfortable' },
    { id: 'premium', name: 'Premium', price: '$12.99', icon: '🚕', desc: 'Luxury experience' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
  };

  const handleBooking = () => {
    if (bookingData.pickup && bookingData.dropoff && bookingData.date && bookingData.time) {
      setBookedRide({
        ...bookingData,
        bookingId: 'OC' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        estimatedFare: rideTypes.find(r => r.id === bookingData.rideType)?.price,
      });
      setBookingStep(2);
    }
  };

  const resetBooking = () => {
    setBookingData({
      pickup: '',
      dropoff: '',
      date: '',
      time: '',
      passengers: '1',
      rideType: 'economy',
    });
    setBookingStep(0);
    setBookedRide(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">Book Your Ride</h1>
          <p className="text-gray-600 text-lg">Safe, reliable, and affordable transportation in just a few taps</p>
        </div>
      </div>

      {/* Booking Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              {bookingStep === 0 ? (
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
                  <h2 className="text-2xl font-bold text-primary mb-8">Where are you going?</h2>

                  {/* Pickup Location */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Location</label>
                    <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg focus-within:border-primary focus-within:ring-2 focus-within:ring-blue-100">
                      <MapPin size={20} className="text-primary flex-shrink-0" />
                      <input
                        type="text"
                        name="pickup"
                        value={bookingData.pickup}
                        onChange={handleInputChange}
                        placeholder="Enter pickup location"
                        className="flex-1 outline-none text-sm bg-transparent"
                      />
                    </div>
                  </div>

                  {/* Dropoff Location */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Dropoff Location</label>
                    <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg focus-within:border-primary focus-within:ring-2 focus-within:ring-blue-100">
                      <MapPin size={20} className="text-secondary flex-shrink-0" />
                      <input
                        type="text"
                        name="dropoff"
                        value={bookingData.dropoff}
                        onChange={handleInputChange}
                        placeholder="Enter dropoff location"
                        className="flex-1 outline-none text-sm bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    {/* Date */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                      <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg focus-within:border-primary focus-within:ring-2 focus-within:ring-blue-100">
                        <Calendar size={20} className="text-primary flex-shrink-0" />
                        <input
                          type="date"
                          name="date"
                          value={bookingData.date}
                          onChange={handleInputChange}
                          className="flex-1 outline-none text-sm bg-transparent"
                        />
                      </div>
                    </div>

                    {/* Time */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Time</label>
                      <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg focus-within:border-primary focus-within:ring-2 focus-within:ring-blue-100">
                        <Clock size={20} className="text-accent flex-shrink-0" />
                        <input
                          type="time"
                          name="time"
                          value={bookingData.time}
                          onChange={handleInputChange}
                          className="flex-1 outline-none text-sm bg-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Passengers */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Passengers</label>
                    <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg focus-within:border-primary focus-within:ring-2 focus-within:ring-blue-100">
                      <Users size={20} className="text-primary flex-shrink-0" />
                      <select
                        name="passengers"
                        value={bookingData.passengers}
                        onChange={handleInputChange}
                        className="flex-1 outline-none text-sm bg-transparent"
                      >
                        {[1, 2, 3, 4, 5, 6].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Continue Button */}
                  <button
                    onClick={() => setBookingStep(1)}
                    className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
                  >
                    Select Ride Type
                  </button>
                </div>
              ) : bookingStep === 1 ? (
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
                  <h2 className="text-2xl font-bold text-primary mb-8">Choose Your Ride</h2>

                  <div className="space-y-4 mb-8">
                    {rideTypes.map(ride => (
                      <div
                        key={ride.id}
                        onClick={() => setBookingData(prev => ({ ...prev, rideType: ride.id }))}
                        className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${
                          bookingData.rideType === ride.id
                            ? 'border-primary bg-blue-50'
                            : 'border-gray-200 hover:border-primary hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span className="text-3xl">{ride.icon}</span>
                            <div>
                              <p className="font-bold text-gray-800 text-base">{ride.name}</p>
                              <p className="text-sm text-gray-500">{ride.desc}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg text-primary">{ride.price}</p>
                            <p className="text-xs text-gray-500">per ride</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setBookingStep(0)}
                      className="flex-1 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleBooking}
                      className="flex-1 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-200">
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4">✓</div>
                    <h2 className="text-2xl font-bold text-green-600 mb-2">Booking Confirmed!</h2>
                    <p className="text-gray-600">Your ride is on the way</p>
                  </div>

                  {bookedRide && (
                    <div className="space-y-4 mb-8">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Booking ID</p>
                        <p className="font-bold text-primary text-lg">{bookedRide.bookingId}</p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-xs text-gray-500 mb-1">Estimated Fare</p>
                          <p className="font-bold text-primary text-lg">{bookedRide.estimatedFare}</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-xs text-gray-500 mb-1">Ride Type</p>
                          <p className="font-bold text-primary text-lg capitalize">{bookedRide.rideType}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={resetBooking}
                    className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                  >
                    Book Another Ride
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Current Booking Summary */}
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-bold text-primary mb-4 text-base">Booking Summary</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs">From</p>
                    <p className="font-semibold text-gray-800">{bookingData.pickup || 'Not selected'}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">To</p>
                    <p className="font-semibold text-gray-800">{bookingData.dropoff || 'Not selected'}</p>
                  </div>
                  {bookingData.date && (
                    <div>
                      <p className="text-gray-500 text-xs">Date & Time</p>
                      <p className="font-semibold text-gray-800">{bookingData.date} at {bookingData.time || '--:--'}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <h3 className="font-bold text-primary mb-4 text-base">Need Help?</h3>
                <div className="space-y-3">
                  <a href="tel:1234567890" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <Phone size={18} className="text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Call Us</p>
                      <p className="font-semibold text-sm text-gray-800">+1 (234) 567-890</p>
                    </div>
                  </a>
                  <a href="mailto:support@onlinecab.com" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <Mail size={18} className="text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="font-semibold text-sm text-gray-800">support@onlinecab.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
