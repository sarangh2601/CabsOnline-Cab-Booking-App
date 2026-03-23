import {
  MapPin,
  Smartphone,
  Car,
  CheckCircle,
  Smile,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Open the App",
      desc: "Download the app or visit our website to begin.",
      icon: <Smartphone size={22} />,
    },
    {
      title: "Enter Location",
      desc: "Set pickup and destination easily.",
      icon: <MapPin size={22} />,
    },
    {
      title: "Choose Ride",
      desc: "Pick a ride that suits your comfort.",
      icon: <Car size={22} />,
    },
    {
      title: "Meet Driver",
      desc: "Get connected with a verified driver.",
      icon: <CheckCircle size={22} />,
    },
    {
      title: "Enjoy Ride",
      desc: "Relax and travel safely.",
      icon: <Smile size={22} />,
    },
    {
      title: "Rate & Pay",
      desc: "Complete payment and share feedback.",
      icon: <Star size={22} />,
    },
  ];

  const extended = [...steps, ...steps];

  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, [pause]);

  useEffect(() => {
    if (index >= steps.length) {
      setTimeout(() => {
        setIndex(0);
      }, 2000);
    }
  }, [index]);

  return (
    <section className="py-24 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-16 text-center">

          {/* Badge */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold mb-4 tracking-wide">
            How It Works
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Simple Steps to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
              Book Your Ride
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 mt-4 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Experience smooth, effortless booking with our smart and reliable cab service.
          </p>

          {/* Accent Line */}
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
          </div>

        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          <div
            className="flex gap-6 transition-transform duration-[2500ms] ease-in-out"
            style={{
              transform: `translateX(-${index * 50}%)`,
            }}
          >
            {extended.map((step, i) => (
              <div
                key={i}
                className="min-w-[50%] flex-shrink-0 bg-white border border-yellow-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-100 text-yellow-600 mb-6">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm">
                  {step.desc}
                </p>

                {/* Arrow (flow indicator) */}
                {i < extended.length - 1 && (
                  <div className="absolute right-[-18px] top-1/2 transform -translate-y-1/2 text-yellow-400 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}