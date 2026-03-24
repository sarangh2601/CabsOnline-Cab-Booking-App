import { useState } from 'react';
import { MapPin, Calendar, Users, Clock, Phone, Mail } from 'lucide-react';
import BookingForm from '../components/BookingForm.';

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
      {/* FULL WIDTH HEADER */}
      <div className="relative w-screen h-[30vh] min-h-[300px] overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src="FAQ.jpg" // replace with your image
          alt="Cab Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Book Your <span className="text-yellow-400">Ride</span>
          </h1>
          <p className="text-gray-200 mt-4 text-lg md:text-xl">
            Fast, reliable & premium cab service
          </p>
        </div>

      </div>

      {/* Booking Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto ">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Booking Form */}
           <BookingForm/>

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
                  <a href="mailto:support@CabsOnline.com" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <Mail size={18} className="text-primary flex-shrink-0" />
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
      </div>
    </div>
  );
}
