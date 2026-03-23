import { Shield, Zap, Users, MapPin, CreditCard, HeadphonesIcon } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Safe & Verified',
      description: 'All drivers are thoroughly verified and background checked for your safety.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get a ride in minutes with our optimized matching algorithm.',
      color: 'from-orange-400 to-yellow-500',
    },
    {
      icon: Users,
      title: 'Professional Drivers',
      description: 'Experienced and courteous drivers trained in customer service.',
      color: 'from-blue-400 to-yellow-500',
    },
    {
      icon: MapPin,
      title: 'Real-time Tracking',
      description: 'Track your driver in real-time with live GPS updates.',
      color: 'from-blue-600 to-blue-300',
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment',
      description: 'Multiple payment options including card, digital wallets, and cash.',
      color: 'from-green-400 to-emerald-600',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock customer support available whenever you need help.',
      color: 'from-purple-400 to-blue-300',
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-yellow-50">

      <div className="max-w-6xl mx-auto">

        {/* PREMIUM HEADING */}
        <div className="mb-16 text-center">

          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold mb-4">
            Why Choose Us
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Experience the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
              Best Ride Service
            </span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Enjoy safe, fast, and reliable rides powered by smart technology and trusted drivers.
          </p>

          <div className="mt-5 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >

                {/* Icon */}
                <div
                  className={`inline-flex p-4 bg-gradient-to-br ${feature.color} rounded-xl mb-4 shadow-md`}
                >
                  <IconComponent className="text-white" size={20} />
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}