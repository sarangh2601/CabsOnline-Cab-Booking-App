export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Open the App',
      description: 'Download OnlineCab app or visit our website to get started.',
      icon: '📱',
    },
    {
      number: '02',
      title: 'Enter Your Location',
      description: 'Set your pickup and destination addresses with just a few taps.',
      icon: '📍',
    },
    {
      number: '03',
      title: 'Choose Your Ride',
      description: 'Select from economy, comfort, or premium ride options.',
      icon: '🚖',
    },
    {
      number: '04',
      title: 'Meet Your Driver',
      description: 'Get matched with a verified driver and track them in real-time.',
      icon: '✅',
    },
    {
      number: '05',
      title: 'Enjoy Your Ride',
      description: 'Sit back and relax while our professional driver takes you safely.',
      icon: '😊',
    },
    {
      number: '06',
      title: 'Rate & Pay',
      description: 'Complete payment and rate your driver to help us improve.',
      icon: '⭐',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Simple, fast, and secure. Book your ride in 6 easy steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-border hover:border-primary"
            >
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>

              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-1 bg-gradient-to-r from-primary to-secondary -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-sm">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
