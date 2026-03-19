import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Business Executive',
      image: '👩‍💼',
      rating: 5,
      text: 'OnlineCab has completely changed how I commute. The drivers are professional and the cars are always clean. Highly recommended!',
    },
    {
      name: 'Michael Chen',
      role: 'Student',
      image: '👨‍🎓',
      rating: 5,
      text: 'Great service! The app is super easy to use and the prices are reasonable. Much better than waiting for taxis.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Frequent Traveler',
      image: '👩‍🔬',
      rating: 5,
      text: 'I use OnlineCab almost daily for airport trips. The reliability and safety measures give me peace of mind.',
    },
    {
      name: 'James Wilson',
      role: 'Tech Entrepreneur',
      image: '👨‍💻',
      rating: 5,
      text: 'Love the transparency in pricing and real-time tracking. The customer support is also responsive and helpful.',
    },
    {
      name: 'Priya Patel',
      role: 'Healthcare Professional',
      image: '👩‍⚕️',
      rating: 5,
      text: 'Working late shifts means I need reliable transport. OnlineCab has never let me down. 5 stars all the way!',
    },
    {
      name: 'David Thompson',
      role: 'Marketing Manager',
      image: '👨‍💼',
      rating: 5,
      text: 'Excellent service, professional drivers, and great value for money. I recommend it to all my colleagues.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full opacity-20 blur-3xl translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Loved by <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Thousands</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real reviews from real customers who trust OnlineCab for their daily commute.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-border hover:border-primary relative"
            >
              <div className="absolute top-4 right-4 text-4xl opacity-20">"</div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed italic text-sm">{testimonial.text}</p>

              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <p className="text-gray-600 text-sm">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10K+</div>
            <p className="text-gray-600 text-sm">Active Drivers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-gray-600 text-sm">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2M+</div>
            <p className="text-gray-600 text-sm">Rides Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
