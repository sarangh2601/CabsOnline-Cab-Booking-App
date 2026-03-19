import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [expanded, setExpanded] = useState(0);

  const faqs = [
    {
      question: 'How do I book a ride with OnlineCab?',
      answer: 'Open the OnlineCab app or website, enter your pickup and destination locations, select your preferred ride type, and confirm the booking. A driver will be matched to you within seconds.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit/debit cards, digital wallets (Apple Pay, Google Pay), bank transfers, and cash. You can save your payment preferences for faster bookings.',
    },
    {
      question: 'How much does a ride cost?',
      answer: 'Fares are calculated based on distance, time, and current demand. You can see the estimated fare before confirming your booking. There are no hidden charges.',
    },
    {
      question: 'Are the drivers verified and safe?',
      answer: 'Yes, all our drivers undergo thorough background checks, driving record verification, and vehicle inspections. We prioritize your safety with our strict vetting process.',
    },
    {
      question: 'Can I schedule a ride in advance?',
      answer: 'Yes, you can schedule rides up to 7 days in advance. Simply select the scheduled option during booking and choose your preferred date and time.',
    },
    {
      question: 'What if I have a problem with my ride?',
      answer: 'Our customer support team is available 24/7 to help. You can contact us through the app, email, or phone. We investigate all issues and work toward a quick resolution.',
    },
    {
      question: 'Do you offer corporate accounts?',
      answer: 'Yes, we offer special corporate packages with discounted rates, billing management, and dedicated support. Contact our business team for more information.',
    },
    {
      question: 'How do I become a driver with OnlineCab?',
      answer: 'Visit our driver sign-up page and complete the application. You will need a valid license, vehicle registration, and insurance. After verification, you can start earning immediately.',
    },
  ];

  const toggleExpanded = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our service.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-300"
            >
              <button
                onClick={() => toggleExpanded(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-blue-50 transition-colors duration-200"
              >
                <h3 className="text-base font-bold text-foreground text-left">{faq.question}</h3>
                <ChevronDown
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                    expanded === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>

              {expanded === index && (
                <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-orange-50 border-t border-border">
                  <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-sm">
            Didn't find your answer? Contact our support team.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-sm">
            Get Support
          </button>
        </div>
      </div>
    </section>
  );
}
