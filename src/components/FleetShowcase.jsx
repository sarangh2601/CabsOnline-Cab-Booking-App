import { Users, Zap, DollarSign } from 'lucide-react';

export default function FleetShowcase() {
  const fleet = [
    {
      name: 'Economy',
      emoji: '🚗',
      capacity: '4 Passengers',
      description: 'Budget-friendly option for solo travelers and small groups.',
      price: '$2.50/km',
      features: ['AC & Comfort', 'Phone Charger', 'WiFi', 'Professional Driver'],
      color: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Comfort',
      emoji: '🚙',
      capacity: '5 Passengers',
      description: 'Premium experience with extra legroom and modern amenities.',
      price: '$4.50/km',
      features: ['Premium AC', 'Phone Charger', 'WiFi', 'Water Bottle', 'Professional Driver'],
      color: 'from-primary to-secondary',
      featured: true,
    },
    {
      name: 'Premium',
      emoji: '🚕',
      capacity: '4 Passengers',
      description: 'Luxury rides for executives and special occasions.',
      price: '$7.50/km',
      features: ['Luxury AC', 'Premium Seating', 'Phone Charger', 'WiFi', 'Refreshments', 'Concierge Service'],
      color: 'from-orange-400 to-orange-600',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Premium Fleet</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect ride for your journey with our diverse vehicle options.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {fleet.map((car, index) => (
            <div
              key={index}
              className={`relative group rounded-3xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                car.featured ? 'md:scale-105 md:col-span-1' : ''
              }`}
            >
              <div className={`bg-gradient-to-br ${car.color} rounded-3xl p-8 h-full text-white shadow-lg hover:shadow-2xl transition-all`}>
                {car.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm">
                    ⭐ Most Popular
                  </div>
                )}

                <div className="text-6xl mb-4">{car.emoji}</div>

                <h3 className="text-3xl font-bold mb-2">{car.name}</h3>
                <p className="text-white/90 mb-6 leading-relaxed text-sm">{car.description}</p>

                <div className="flex items-center gap-2 mb-6 bg-white/20 px-4 py-2 rounded-lg w-fit text-sm">
                  <Users size={20} />
                  <span className="font-semibold">{car.capacity}</span>
                </div>

                <div className="mb-6">
                  <p className="text-white/80 text-sm">Starting at</p>
                  <p className="text-3xl font-bold">{car.price}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {car.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 text-sm ${
                  car.featured
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}>
                  Book {car.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Zap className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-foreground">Quick Booking</h4>
            </div>
            <p className="text-gray-600 text-sm">Get a ride in less than 2 minutes with our streamlined booking process.</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <DollarSign className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-foreground">Transparent Pricing</h4>
            </div>
            <p className="text-gray-600 text-sm">No hidden charges. Know your fare before you book.</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Users className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-foreground">Verified Drivers</h4>
            </div>
            <p className="text-gray-600 text-sm">All our drivers are background-checked for your safety.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
