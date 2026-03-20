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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Animated Blurred Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100 rounded-full opacity-30 blur-3xl animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent animate-gradientText">
              CabsOnline
            </span>
            ?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience premium transportation with cutting-edge technology, trust, and reliability.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/30 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/20 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                {/* Animated Gradient Glow Behind Icon */}
                <div className={`absolute -top-6 -right-6 w-36 h-36 rounded-full bg-gradient-to-br ${feature.color} opacity-30 blur-2xl animate-blob animation-delay-${index * 500}`}></div>

                {/* Icon */}
                <div
                  className={`relative inline-block p-4 bg-gradient-to-br ${feature.color} rounded-xl mb-4 shadow-lg shadow-${feature.color.replace('from-', '').replace('to-', '')}/50 transform transition-transform duration-500 group-hover:scale-95`}
                >
                  <IconComponent className="text-white" size={20} />
                </div>

                {/* Feature Text */}
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Extra CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 30px) scale(0.95); }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes gradientText {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradientText {
          background-size: 200% 200%;
          animation: gradientText 4s ease infinite;
        }
      `}</style>
    </section>
  );
}