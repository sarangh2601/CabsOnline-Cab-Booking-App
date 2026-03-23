import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [expanded, setExpanded] = useState(0);

  const faqs = [
    {
      question: "How do I book a ride with CabsOnline?",
      answer:
        "Open the app or website, enter pickup & drop, choose ride, and confirm booking instantly.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept UPI, cards, wallets, and cash for your convenience.",
    },
    {
      question: "How much does a ride cost?",
      answer:
        "Fare depends on distance, time, and demand. You see price before booking.",
    },
    {
      question: "Are drivers verified?",
      answer:
        "Yes, all drivers are background verified and trained for safety.",
    },
    {
      question: "Can I schedule a ride?",
      answer:
        "Yes, you can pre-book rides anytime as per your schedule.",
    },
  ];

  const toggleExpanded = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-yellow-50">

      <div className="max-w-7xl mx-auto">

        {/* TOP HEADING */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-500 mt-4">
            Everything you need to know about our service.
          </p>
          <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
        </div>

        {/* ROW SECTION */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT → IMAGE */}
          <div className="hidden md:block">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1400&auto=format&fit=crop"
                alt="FAQ"
                className="w-full h-[420px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* RIGHT → FAQ */}
          <div className="space-y-4">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
              >

                {/* Question */}
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                >
                  <h3 className="text-sm md:text-base font-semibold text-gray-900">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`text-blue-600 transition-transform duration-300 ${
                      expanded === index ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`px-6 transition-all duration-300 overflow-hidden ${
                    expanded === index ? "max-h-40 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}