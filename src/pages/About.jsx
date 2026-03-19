import { Users, Target, Award, Heart } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '50K+', label: 'Happy Customers', icon: Users },
    { number: '10K+', label: 'Professional Drivers', icon: Award },
    { number: '2M+', label: 'Rides Completed', icon: Target },
    { number: '98%', label: 'Satisfaction Rate', icon: Heart },
  ];

  const values = [
    {
      title: 'Safety First',
      description: 'We prioritize the safety of our passengers and drivers with advanced security features and continuous training programs.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Reliability',
      description: 'Count on us to get you where you need to be, every time. Our fleet is well-maintained and our drivers are vetted professionals.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Affordability',
      description: 'Quality service at competitive prices. We believe everyone deserves access to safe, reliable transportation.',
      color: 'from-blue-400 to-blue-500',
    },
    {
      title: 'Community',
      description: 'We are committed to supporting the communities we serve through local partnerships and environmental initiatives.',
      color: 'from-amber-500 to-amber-600',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            About OnlineCab
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're revolutionizing urban transportation by making cab services accessible, affordable, and safe for everyone.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                At OnlineCab, our mission is to provide safe, reliable, and affordable transportation solutions that connect communities and improve lives.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                We leverage cutting-edge technology to create a seamless experience for both passengers and drivers, ensuring every ride is a positive one.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                We believe in sustainable growth and are committed to environmental responsibility through our eco-friendly vehicle initiatives.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="h-80 bg-gradient-to-br from-primary via-blue-400 to-secondary flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🚕</div>
                  <p className="text-xl font-semibold">Moving Forward Together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.color} mb-4`} />
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-primary">Why Choose OnlineCab?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Fast & Efficient', desc: 'Average pickup time of 3 minutes or less' },
              { icon: '🛡️', title: 'Secure & Safe', desc: '24/7 monitoring and emergency support' },
              { icon: '💰', title: 'Best Prices', desc: 'Transparent pricing with no hidden charges' },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-orange-50 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-primary mb-2 text-base">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
