import { ArrowRight } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-br from-white via-blue-50 to-yellow-50">
      
      <div className="w-full px-6 lg:px-20 xl:px-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative order-2 md:order-1">
            
            {/* Background Shapes */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-yellow-500/10 rounded-3xl rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-yellow-500/10 to-blue-600/10 rounded-3xl -rotate-3"></div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="AboutHero.jpg"
                alt="About Us"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-6 order-1 md:order-2 text-left">

            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              About Us
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
              We Provide the Best <br />
              <span className="bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent">
                Cab Services
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We are committed to delivering safe, reliable, and affordable
              transportation services. Our platform connects you with trusted
              drivers, ensuring a smooth and comfortable journey every time.
              With advanced booking technology and a customer-first approach,
              we redefine your travel experience.
            </p>

            {/* Button */}
            <div>
              <button className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-yellow-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300">
                View More
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}