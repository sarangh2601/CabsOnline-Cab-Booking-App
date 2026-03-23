import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Business Traveler",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Amazing service and very smooth booking experience. Driver arrived on time and the entire journey was extremely comfortable.",
    },
    {
      name: "Priya Verma",
      role: "Working Professional",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Very reliable cab service with clean vehicles and polite drivers. Pickup was on time and the ride felt safe and comfortable.",
    },
    {
      name: "Amit Patel",
      role: "Frequent Traveler",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      text: "This is the best cab service I have used so far. Booking is easy, drivers are professional, and rides are always smooth.",
    },
    {
      name: "Sneha Kulkarni",
      role: "Student",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Affordable pricing and a great overall experience. The app is easy to use and drivers are friendly and well behaved.",
    },
    {
      name: "Vikram Singh",
      role: "Entrepreneur",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      text: "Professional drivers and seamless booking process. I always prefer this service for business travel because it is reliable and efficient.",
    },
    {
      name: "Neha Joshi",
      role: "Tourist",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      text: "Loved the journey experience. The cab was clean, driver was polite, and the ride was safe, smooth, and very enjoyable.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">

          {/* Small Badge */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold mb-4">
            Testimonials
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Real experiences from our happy customers who trust our service every day.
          </p>

          {/* Accent Line */}
          <div className="mt-5 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>

        </div>

        {/* Slider */}
        <div className="relative flex items-center justify-center">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-[-40px] z-10 bg-white shadow-md p-2 rounded-full hover:bg-yellow-100"
          >
            <ChevronLeft />
          </button>

          {/* Cards Wrapper */}
          <div className="relative w-full flex justify-center">

            {/* Fade Edges */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="overflow-hidden w-full max-w-[860px]">
              <div
                className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: `translateX(-${index * 276}px)`,
                }}
              >
                {reviews.concat(reviews).map((review, i) => (
                  <div
                    key={i}
                    className="w-[260px] min-h-[320px] flex-shrink-0 rounded-2xl bg-white/80 backdrop-blur-lg border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 p-6 flex flex-col items-center text-center group"
                  >

                    {/* Profile Image */}
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400 mb-3"
                    />

                    {/* Name */}
                    <h4 className="text-sm font-semibold text-gray-900">
                      {review.name}
                    </h4>

                    {/* Role */}
                    <p className="text-xs text-gray-400 mb-3">
                      {review.role}
                    </p>

                    {/* Rating */}
                    <div className="flex mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                      “{review.text}”
                    </p>

                    {/* Bottom Accent */}
                    <div className="mt-5 h-1 w-10 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full group-hover:w-16 transition-all duration-300"></div>

                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-[-40px] z-10 bg-white shadow-md p-2 rounded-full hover:bg-yellow-100"
          >
            <ChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
}