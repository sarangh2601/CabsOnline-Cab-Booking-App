import { Check } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PremiumPricing() {
  const [selectedRide, setSelectedRide] = useState(null);
  const [distance, setDistance] = useState('');
  const [showBooking, setShowBooking] = useState(false);
  const navigate = useNavigate();

  const rideTypes = [
    {
      id: 'hatchback',
      name: 'Hatchback',
      image: '/WagonR-Img.png', // add your image in /public/rides/
      baseFare: 1200,
      includedKM: 40,
      ratePerKM: 13,
      description: 'Small car for quick city rides',
      features: ['4-seater', 'Air conditioning', 'Professional driver', 'Basic insurance'],
      popular: false,
    },
    {
      id: 'sedan',
      name: 'Sedan',
      image: '/sadan.png',
      baseFare: 1300,
      includedKM: 40,
      ratePerKM: 14,
      description: 'Comfortable sedan for everyday travel',
      features: ['4-seater', 'Air conditioning', 'Professional driver', 'Basic insurance'],
      popular: true,
    },
    {
      id: 'suv',
      name: 'SUV',
      image: '/SUV.png',
      baseFare: 1500,
      includedKM: 40,
      ratePerKM: 16,
      description: 'Spacious SUV for family trips',
      features: ['6-seater', 'Premium interiors', 'Professional driver', 'Enhanced insurance', 'Water & snacks'],
      popular: false,
    },
  ];

  const calculateFare = () => {
    if (!selectedRide || !distance) return 0;
    const extraKM = Math.max(0, distance - selectedRide.includedKM);
    return selectedRide.baseFare + extraKM * selectedRide.ratePerKM;
  };

  const handleBookNow = (ride) => {
    setSelectedRide(ride); // optional, if you still want to store ride
    navigate('/booking'); // replace '/' with your home page route
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-gray-100 font-sans">


      {/* RIDE TYPES */}
      {!showBooking && (
        <div className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 mt-2">
          <div className="max-w-7xl mx-auto">
            {/* PREMIUM RIDE HEADING */}
            <div className="mb-16 text-center">

              {/* Top Badge */}
              <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-600 text-xs font-semibold mb-4">
                Choose Your Ride
              </div>

              {/* Gradient Heading */}
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Experience the{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Perfect Ride
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-gray-300 mt-4 max-w-xl mx-auto">
                Select from our premium fleet and enjoy safe, comfortable, and luxurious journeys.
              </p>

              {/* Gradient underline */}
              <div className="mt-5 h-1 w-24 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {rideTypes.map((ride) => (
                <div
                  key={ride.id}
                  className={`relative rounded-3xl overflow-hidden shadow-2xl transition-transform hover:shadow-2xl hover:shadow-white/60 border border-gray-600 bg-gradient-to-b from-gray-800 to-gray-900 backdrop-blur-md`}
                >
                  {ride.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 text-xs font-bold rounded-bl-lg z-20 shadow-lg">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="p-8">
                    {/* Ride Image */}
                    <img
                      src={ride.image}
                      alt={ride.name}
                      className="w-full h-40 object-cover rounded-2xl mb-4 shadow-lg"
                    />

                    <h3 className="text-3xl font-bold text-yellow-400 mb-2">{ride.name}</h3>
                    <p className="text-gray-300 text-sm mb-6">{ride.description}</p>

                    <h4 className="font-semibold text-gray-200 mb-3 text-sm">Features</h4>
                    <ul className="space-y-2 mb-6">
                      {ride.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                          <Check size={16} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mb-6 grid grid-cols-3 gap-3">
                      <div className="p-3 bg-gray-700 rounded-lg text-center">
                        <p className="text-xs text-gray-400">Base Fare</p>
                        <p className="font-bold text-lg text-yellow-400">₹{ride.baseFare}</p>
                      </div>
                      <div className="p-3 bg-gray-700 rounded-lg text-center">
                        <p className="text-xs text-gray-400">Included KM</p>
                        <p className="font-bold text-base text-yellow-400">{ride.includedKM} km</p>
                      </div>
                      <div className="p-3 bg-gray-700 rounded-lg text-center">
                        <p className="text-xs text-gray-400">Rate per KM</p>
                        <p className="font-bold text-base text-yellow-400">₹{ride.ratePerKM}</p>
                      </div>
                    </div>

                    <button
                      className={`w-full py-3 rounded-xl font-semibold text-sm transition-all shadow-lg hover:shadow-2xl ${ride.popular
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900'
                        : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-gray-900'
                        }`}
                      onClick={() => handleBookNow(ride)}
                    >
                      Book {ride.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}