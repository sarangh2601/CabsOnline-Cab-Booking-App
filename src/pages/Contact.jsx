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
      color: 'from-blue-600 to-cyan-500',
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
    }
  ];

  return (
    <div className="min-h-screen text-foreground">
      {/* Hero Section */}
      <div className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-[url('FAQ.jpg')] bg-cover">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="relative text-4xl sm:text-5xl font-bold mb-4 ">Get in Touch</h1>
          <p className="relative text-gray-300 text-lg">We're here to help. Reach out to us anytime, anywhere.</p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-[url('map-bg.jpg')] bg-cover bg-fixed bg-no-repeat">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100 ">
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
      <div className="relative py-12 px-4 sm:px-6 lg:px-8 bg-[url('/contact-bg.jpg')] bg-cover bg-center">

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Form */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100/20 border border-green-400 rounded-lg">
                  <p className="text-green-200 text-sm font-semibold">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Subject */}
                <div>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="" className="text-black">Select a subject</option>
                    <option value="booking" className="text-black">Booking Issue</option>
                    <option value="payment" className="text-black">Payment Issue</option>
                    <option value="driver" className="text-black">Driver Complaint</option>
                    <option value="feedback" className="text-black">Feedback</option>
                    <option value="other" className="text-black">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    required
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold rounded-lg hover:scale-105 hover:shadow-lg transition-all"
                >
                  Send Message
                </button>

              </form>
            </div>

            {/* Offices */}
            <div className="space-y-6">

              {/* Section Heading */}
              <div className="mb-8 space-y-4 flex flex-col justify-center">
                <p className="text-gray-300 text-sm sm:text-base mt-2 max-w-md border-b border-white w-[30%] pb-2">
                  Contact Us
                </p>
                <h2 className="text-4xl sm:text-4xl font-bold text-white">
                  We’re Here to Help
                </h2>
                <p className="text-gray-300 text-sm sm:text-base mt-2 max-w-md">
                  Have questions or need assistance? Our team is here to help you with bookings, support, and any inquiries you may have.
                </p>
              </div>

              {/* Office Cards */}
              {offices.map((office, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all"
                >
                  <h3 className="text-lg font-bold text-white mb-4">
                    {office.city}
                  </h3>

                  <p className="text-gray-300 text-sm">{office.address}</p>
                  <p className="text-gray-300 text-sm">{office.phone}</p>
                  <p className="text-gray-300 text-sm">{office.email}</p>
                </div>
              ))}

              {/* Support */}
              <div className="mt-8 p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl">
                <h3 className="font-bold text-white mb-4 text-lg">
                  Support Hours
                </h3>
                <p className="text-gray-300 text-sm">Mon - Fri: 9AM - 6PM</p>
                <p className="text-gray-300 text-sm">Sat: 10AM - 4PM</p>
                <p className="text-gray-300 text-sm">Sun: Emergency Only</p>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
        <div className='w-full flex flex-col items-center justify-center mb-8'>

          <h2 className="text-3xl font-bold mb-3 text-gray-800 text-center border-b pb-2 ">
            Got questions? We've got answers!
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam recusandae maiores accusamus modi iste ea placeat, cupiditate esse cumque quibusdam.</p>

        </div>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* RIGHT SIDE (IMAGE) */}
          <div className="w-full lg:w-1/2 flex justify-center">

            <img
              src="/faq-1.png"  // change image if needed
              alt="FAQ Taxi"
              className="w-[500px] sm:w-[320px] md:w-[500px] object-contain drop-shadow-xl rounded-xl shadow-lg"
            />

          </div>

          {/* LEFT SIDE (FAQ) */}
          <div className="w-full lg:w-1/2">


            <div className="space-y-3">
              {[
                { q: 'How do I reset my password?', a: 'You can reset your password through the login page by clicking "Forgot Password".' },
                { q: 'How long do refunds take?', a: 'Refunds typically process within 3-5 business days to your original payment method.' },
                { q: 'Can I change my booking?', a: 'Yes, you can modify your booking up to 10 minutes before the scheduled pickup time.' },
                { q: 'Is my payment information secure?', a: 'Yes, we use industry-standard encryption to protect all payment information.' },
              ].map((item, idx) => (
                <details key={idx} className="group bg-white rounded-lg border border-gray-200 shadow-sm">

                  <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-gray-800 text-sm">
                    <span>{item.q}</span>

                    <span className="transition group-open:rotate-180">
                      <svg className="h-5 w-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </span>
                  </summary>

                  <p className="px-4 pb-4 text-gray-600 text-sm">
                    {item.a}
                  </p>

                </details>
              ))}
            </div>

          </div>



        </div>
      </div>

      <section className="w-full">

        <iframe
          src="https://www.google.com/maps?q=Nagpur&output=embed"
          className="w-full h-[350px] sm:h-[300px] lg:h-[350px] border-0"
          loading="lazy"
        ></iframe>

      </section>
    </div>
  );
}
