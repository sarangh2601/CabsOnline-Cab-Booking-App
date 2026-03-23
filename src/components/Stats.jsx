import React from 'react'
import { Users, Target, Award, Heart } from 'lucide-react'

const Stats = () => {

     const stats = [
    { number: '50K+', label: 'Happy Customers', icon: Users },
    { number: '10K+', label: 'Professional Drivers', icon: Award },
    { number: '2M+', label: 'Rides Completed', icon: Target },
    { number: '98%', label: 'Satisfaction Rate', icon: Heart },
  ];

    return (
        <>
            {/* Stats Section */}
            <div className="relative py-20 w-full overflow-hidden">

                {/* BACKGROUND IMAGE */}
                <div className="absolute inset-0">
                    <img
                        src="/Stats-bk.jpg" // 👉 your image
                        alt="stats background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* CONTENT */}
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                        {stats.map((stat, idx) => {
                            const Icon = stat.icon;

                            return (
                                <div
                                    key={idx}
                                    className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
                                >

                                    {/* LEFT BORDER ANIMATION */}
                                    <div className="absolute left-0 top-0 h-0 w-1 bg-gradient-to-b from-blue-500 to-yellow-400 transition-all duration-300 group-hover:h-full rounded-l-2xl"></div>

                                    {/* ICON */}
                                    <div className="flex justify-center mb-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                                            <Icon size={26} className="text-white" />
                                        </div>
                                    </div>

                                    {/* NUMBER */}
                                    <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
                                        {stat.number}
                                    </div>

                                    {/* LABEL */}
                                    <div className="text-sm text-gray-300">
                                        {stat.label}
                                    </div>

                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Stats