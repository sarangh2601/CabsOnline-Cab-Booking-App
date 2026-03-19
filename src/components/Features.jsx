import { Shield, Zap, Users, MapPin, CreditCard, HeadphonesIcon } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Safe & Verified',
      description: 'All drivers are thoroughly verified and background checked for your safety.',
      color: 'from-primary to-blue-500',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get a ride in minutes with our optimized matching algorithm.',
      color: 'from-orange-400 to-orange-600',
    },
    {
      icon: Users,
      title: 'Professional Drivers',
      description: 'Experienced and courteous drivers trained in customer service.',
      color: 'from-primary to-secondary',
    },
    {
      icon: MapPin,
      title: 'Real-time Tracking',
      description: 'Track your driver in real-time with live GPS updates.',
      color: 'from-blue-400 to-primary',
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
      color: 'from-purple-400 to-primary',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">OnlineCab</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience premium transportation with cutting-edge technology, trust, and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-border hover:border-primary hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className={`inline-block p-4 bg-gradient-to-br ${feature.color} rounded-xl mb-4 transform group-hover:scale-110 transition-transform`}>
                  <IconComponent className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
