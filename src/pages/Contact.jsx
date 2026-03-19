import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Available 24/7 for support',
      details: '+1 (234) 567-890',
      color: 'from-primary to-blue-600',
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'We reply within 2 hours',
      details: 'support@onlinecab.com',
      color: 'from-secondary to-orange-600',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our team instantly',
      details: 'Available on our app',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      description: 'Visit our office',
      details: 'Mon-Fri: 9AM - 6PM',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  const offices = [
    {
      city: 'New York',
      address: '123 Main Street, New York, NY 10001',
      phone: '+1 (234) 567-890',
      email: 'ny@onlinecab.com',
    },
    {
      city: 'Los Angeles',
      address: '456 Sunset Boulevard, Los Angeles, CA 90001',
      phone: '+1 (234) 567-891',
      email: 'la@onlinecab.com',
    },
    {
      city: 'Chicago',
      address: '789 Michigan Avenue, Chicago, IL 60601',
      phone: '+1 (234) 567-892',
      email: 'chicago@onlinecab.com',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">Get in Touch</h1>
          <p className="text-gray-600 text-lg">We're here to help. Reach out to us anytime, anywhere.</p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center mb-4`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-primary mb-1 text-base">{method.title}</h3>
                  <p className="text-gray-600 text-xs mb-3">{method.description}</p>
                  <p className="font-semibold text-gray-800 text-sm">{method.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg">
                  <p className="text-green-800 text-sm font-semibold">✓ Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (234) 567-890"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Issue</option>
                    <option value="payment">Payment Issue</option>
                    <option value="driver">Driver Complaint</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help..."
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Our Offices</h2>

              <div className="space-y-6">
                {offices.map((office, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
                    <h3 className="text-lg font-bold text-primary mb-4">{office.city}</h3>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin size={18} className="text-secondary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-gray-500">Address</p>
                          <p className="font-semibold text-gray-800 text-sm">{office.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone size={18} className="text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-gray-500">Phone</p>
                          <p className="font-semibold text-gray-800 text-sm">{office.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Mail size={18} className="text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-gray-500">Email</p>
                          <p className="font-semibold text-gray-800 text-sm">{office.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Support Hours */}
              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl border border-blue-200">
                <h3 className="font-bold text-primary mb-4 text-base">Support Hours</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700"><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-700"><span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-700"><span className="font-semibold">Sunday:</span> Emergency Support Only</p>
                  <p className="text-gray-700 mt-4"><span className="font-semibold">Timezone:</span> EST (Eastern Standard Time)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Quick Answers</h2>

          <div className="space-y-3">
            {[
              { q: 'How do I reset my password?', a: 'You can reset your password through the login page by clicking "Forgot Password".' },
              { q: 'How long do refunds take?', a: 'Refunds typically process within 3-5 business days to your original payment method.' },
              { q: 'Can I change my booking?', a: 'Yes, you can modify your booking up to 10 minutes before the scheduled pickup time.' },
              { q: 'Is my payment information secure?', a: 'Yes, we use industry-standard encryption to protect all payment information.' },
            ].map((item, idx) => (
              <details key={idx} className="group bg-white rounded-lg border border-gray-200 shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-800 text-sm">
                  <span>{item.q}</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </summary>
                <p className="px-5 pb-5 pt-0 text-gray-600 text-sm">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
