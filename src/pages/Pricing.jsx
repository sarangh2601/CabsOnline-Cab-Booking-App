import { Check } from 'lucide-react';
import { useState } from 'react';

export default function Pricing() {
  const [billingType, setBillingType] = useState('ride');

  const rideTypes = [
    {
      id: 'economy',
      name: 'Economy',
      icon: '🚗',
      basePrice: '$2.50',
      perKm: '$0.75/km',
      perMin: '$0.10/min',
      description: 'Perfect for solo travelers',
      features: ['4-seater vehicle', 'Air conditioning', 'Professional driver', 'Basic insurance'],
      popular: false,
    },
    {
      id: 'comfort',
      name: 'Comfort',
      icon: '🚙',
      basePrice: '$4.50',
      perKm: '$1.00/km',
      perMin: '$0.15/min',
      description: 'More space and comfort',
      features: ['6-seater vehicle', 'Premium interiors', 'Professional driver', 'Enhanced insurance', 'Water & snacks'],
      popular: true,
    },
    {
      id: 'premium',
      name: 'Premium',
      icon: '🚕',
      basePrice: '$6.50',
      perKm: '$1.50/km',
      perMin: '$0.20/min',
      description: 'Luxury experience',
      features: ['4-seater luxury car', 'Premium interiors', 'Elite drivers', 'Full insurance', 'Complimentary services', 'WiFi available'],
      popular: false,
    },
  ];

  const subscriptionPlans = [
    {
      name: 'Casual',
      price: 'Free',
      period: 'No commitment',
      description: 'Pay as you go',
      features: ['Standard pricing', 'Basic support', 'Booking history', 'Payment options'],
      color: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Regular',
      price: '$29',
      period: '/month',
      description: 'Save 15% on rides',
      features: ['15% discount on all rides', 'Priority support', 'Booking history', 'Multiple payment methods', 'Ride scheduling'],
      color: 'from-orange-400 to-orange-500',
      popular: true,
    },
    {
      name: 'Premium Plus',
      price: '$59',
      period: '/month',
      description: 'Save 25% + benefits',
      features: ['25% discount on all rides', 'VIP support', 'Free cancellation', 'Exclusive deals', 'Unlimited scheduling', 'Loyalty rewards'],
      color: 'from-purple-400 to-purple-500',
    },
  ];

  const faqs = [
    {
      question: 'What is included in the base price?',
      answer: 'The base price covers the driver, vehicle, and initial distance. Additional charges apply based on distance and duration of the ride.',
    },
    {
      question: 'Can I get a discount on multiple rides?',
      answer: 'Yes! Our subscription plans offer discounts ranging from 15% to 25% depending on the plan you choose.',
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept credit cards, debit cards, digital wallets, and cash. You can manage your payment methods in the app.',
    },
    {
      question: 'Is there a cancellation fee?',
      answer: 'Cancellations within 2 minutes are free. After that, a small fee of $1-2 applies. Premium Plus members get free cancellation.',
    },
    {
      question: 'How are taxes calculated?',
      answer: 'Taxes are calculated based on your local jurisdiction and are shown before you confirm your booking.',
    },
    {
      question: 'Do you offer hourly packages?',
      answer: 'Yes! We offer hourly packages for airport runs and city tours. Contact our support team for details.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">Transparent Pricing</h1>
          <p className="text-gray-600 text-lg">No hidden charges. Know exactly what you'll pay before you book.</p>
        </div>
      </div>

      {/* Ride Types Pricing */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Ride Pricing</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {rideTypes.map((ride) => (
              <div
                key={ride.id}
                className={`relative rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-xl border-2 ${
                  ride.popular ? 'border-secondary scale-105 md:scale-110' : 'border-gray-200'
                }`}
              >
                {ride.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-secondary to-orange-600 text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className="bg-white p-8">
                  <div className="text-5xl mb-4">{ride.icon}</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{ride.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{ride.description}</p>

                  <div className="space-y-3 mb-8">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-xs text-gray-500">Base Fare</p>
                      <p className="font-bold text-lg text-primary">{ride.basePrice}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <p className="text-xs text-gray-500">Per KM</p>
                        <p className="font-bold text-base text-primary">{ride.perKm}</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-xs text-gray-500">Per Min</p>
                        <p className="font-bold text-base text-primary">{ride.perMin}</p>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-bold text-gray-800 mb-3 text-sm">Features</h4>
                  <ul className="space-y-2 mb-8">
                    {ride.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all text-sm ${
                    ride.popular
                      ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg'
                      : 'border-2 border-primary text-primary hover:bg-blue-50'
                  }`}>
                    Book {ride.name}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Info */}
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="font-bold text-primary mb-4 text-base">How our pricing works</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: 'Base Fare', desc: 'Starting charge for every ride' },
                { title: 'Distance Charge', desc: 'Per kilometer rate for your route' },
                { title: 'Time Charge', desc: 'Additional charge for wait time' },
              ].map((item, idx) => (
                <div key={idx}>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{item.title}</p>
                  <p className="text-gray-600 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Subscription Plans</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-xl border-2 ${
                  plan.popular ? 'border-secondary md:scale-105' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className={`bg-gradient-to-r ${plan.color} text-white py-2 text-center font-bold text-sm`}>
                    RECOMMENDED
                  </div>
                )}

                <div className="bg-white p-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 text-sm">{plan.period}</span>}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all text-sm ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg'
                      : 'border-2 border-primary text-primary hover:bg-blue-50'
                  }`}>
                    {plan.price === 'Free' ? 'Get Started' : 'Subscribe Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Pricing FAQs</h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-800 text-sm">
                  <span>{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </summary>
                <p className="px-5 pb-5 pt-0 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
