import { Users, Target, Award, Heart } from 'lucide-react';

import { ShieldCheck, Clock, Wallet } from 'lucide-react';

import AboutHero from '../components/AboutHero';
import Features from '../components/Features';

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
      description:
        'We prioritize the safety of our passengers and drivers with advanced security features and continuous training programs.',
      color: 'from-blue-600 to-blue-400',
      icon: ShieldCheck,
    },
    {
      title: 'Reliability',
      description:
        'Count on us to get you where you need to be, every time. Our fleet is well-maintained and our drivers are vetted professionals.',
      color: 'from-orange-500 to-orange-400',
      icon: Clock,
    },
    {
      title: 'Affordability',
      description:
        'Quality service at competitive prices. We believe everyone deserves access to safe, reliable transportation.',
      color: 'from-indigo-500 to-blue-500',
      icon: Wallet,
    },
    {
      title: 'Community',
      description:
        'We are committed to supporting the communities we serve through local partnerships and environmental initiatives.',
      color: 'from-amber-500 to-yellow-400',
      icon: Users,
    },
  ];


  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* FULL WIDTH HEADER */}
      <div className="relative w-screen h-[30vh] min-h-[350px] overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src="FAQ.jpg" // replace with your About image
          alt="About CabsOnline"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

          <h1 className="text-4xl md:text-6xl font-bold text-white">
            About <span className="text-yellow-400">CabsOnline</span>
          </h1>

          <p className="text-gray-200 mt-4 text-lg md:text-xl max-w-2xl">
            Delivering safe, reliable, and seamless travel experiences with innovation and trust at our core.
          </p>

        </div>

      </div>

      <AboutHero />


      {/* Mission Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT → CONTENT */}
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent leading-tight">
                Our Mission
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                At <span className="font-semibold text-primary">CabsOnline</span>, our mission is to provide safe, reliable, and affordable transportation solutions that connect communities and improve lives.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                We leverage cutting-edge technology to create a seamless experience for both passengers and drivers, ensuring every ride is smooth and dependable.
              </p>

              <p className="text-gray-600 leading-relaxed text-sm">
                We believe in sustainable growth and are committed to environmental responsibility through eco-friendly initiatives and smarter mobility solutions.
              </p>

              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            </div>

            {/* RIGHT → IMAGE (Hidden on Mobile) */}
            <div className="relative group hidden md:block">

              <img
                src="https://images.unsplash.com/photo-1556122071-e404eaedb77f?q=80&w=1400&auto=format&fit=crop"
                alt="Cab Service"
                className="w-full h-[340px] object-cover rounded-3xl shadow-xl transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 rounded-3xl bg-black/20"></div>

              <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-md">
                <p className="text-xs font-semibold text-gray-800">
                  🚕 Trusted Rides Everyday
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT → IMAGE (Hidden on Mobile) */}
            <div className="relative group hidden md:block">

              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop"
                alt="Future Mobility"
                className="w-full h-[340px] object-cover rounded-3xl shadow-xl transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 rounded-3xl bg-black/20"></div>

              <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-md">
                <p className="text-xs font-semibold text-gray-800">
                  🚀 Future of Mobility
                </p>
              </div>

            </div>

            {/* RIGHT → CONTENT */}
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent leading-tight">
                Our Vision
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                Our vision is to revolutionize urban mobility by creating a smart,
                connected, and sustainable transportation ecosystem for everyone.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                We aim to become a trusted global platform where technology meets
                convenience, delivering seamless travel experiences anytime, anywhere.
              </p>

              <p className="text-gray-600 leading-relaxed text-sm">
                By continuously innovating and adapting, we strive to lead the future
                of transportation with efficiency, safety, and customer satisfaction
                at the core of everything we do.
              </p>

              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </div>

          </div>
        </div>
      </div>

      <Features />

      {/* Stats Section */}
      <div className="relative py-20 w-full overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src="/Stats-bk.jpg" // 👉 your image
            alt="stats background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENT */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {stats.map((stat, idx) => {
              const Icon = stat.icon;

              return (
                <div
                  key={idx}
                  className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
                >

                  {/* LEFT BORDER ANIMATION */}
                  <div className="absolute left-0 top-0 h-0 w-1 bg-gradient-to-b from-blue-500 to-yellow-400 transition-all duration-300 group-hover:h-full rounded-l-2xl"></div>

                  {/* ICON */}
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                      <Icon size={26} className="text-white" />
                    </div>
                  </div>

                  {/* NUMBER */}
                  <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>

                  {/* LABEL */}
                  <div className="text-sm text-gray-300">
                    {stat.label}
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </div>


      {/* Values Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="text-gray-500 text-sm mt-2">
              What drives our service and commitment
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;

              return (
                <div
                  key={idx}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >

                  {/* Icon Box */}
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="text-white w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}
