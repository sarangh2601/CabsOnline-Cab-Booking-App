import { Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaMicrosoft } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    // ✅ State
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    // ✅ Handle Input Change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.placeholder.toLowerCase().includes("email") ? "email" : "password"]: e.target.value
        });
    };

    // ✅ Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:8080/api/auth/login",
                formData
            );

            alert("Login Successful ✅");

            // ✅ Store user (optional)
            localStorage.setItem("user", JSON.stringify(res.data));

            // ✅ Navigate after login
            navigate("/userDashboard");

        } catch (err) {
            console.error(err);
            alert("Invalid Email or Password ❌");
        }
    };

    return (
        <div className="min-h-[650px] flex mt-10">

            {/* LEFT SIDE */}
            <div className="hidden lg:flex w-1/2 relative items-center justify-center overflow-hidden">

                <div className="relative h-[650px] z-10 w-full flex flex-col items-center justify-center gap-10 p-20 sm:p-10 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 shadow-xl">

                    <div className="w-full flex justify-center">
                        <img
                            src="/tct-1.png"
                            alt="Taxi"
                            className="w-full max-w-4xl object-contain drop-shadow-2xl"
                        />
                    </div>

                    <div className="max-w-2xl space-y-6 text-center">

                        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-gray-800">
                            Welcome Back <span className="text-yellow-500">🚖</span>
                        </h1>

                        <p className="text-gray-600 text-base sm:text-lg">
                            Book rides, manage trips, and travel smarter with our{" "}
                            <span className="text-yellow-500 font-semibold">
                                premium cab service
                            </span>.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3">
                            <div className="px-4 py-2 bg-black text-white text-sm rounded-full shadow">
                                🚖 Fast Booking
                            </div>

                            <div className="px-4 py-2 bg-yellow-400 text-black text-sm rounded-full shadow">
                                💰 Affordable
                            </div>

                            <div className="px-4 py-2 bg-black text-white text-sm rounded-full shadow">
                                🛡️ Safe Ride
                            </div>
                        </div>

                    </div>

                </div>

                <div className="absolute w-72 h-72 bg-white/10 rounded-full top-10 left-10 blur-2xl"></div>
                <div className="absolute w-96 h-96 bg-white/10 rounded-full bottom-10 right-10 blur-2xl"></div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-10 bg-gray-900">

                <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl text-white">

                    <h2 className="text-3xl font-bold mb-6 text-center">
                        Sign In
                    </h2>

                    {/* ✅ Added onSubmit */}
                    <form className="space-y-4" onSubmit={handleSubmit}>

                        {/* Email */}
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                            <input
                                type="email"
                                placeholder="Email"
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-3 bg-white/20 border border-white/30 rounded-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                            <input
                                type="password"
                                placeholder="Password"
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-3 bg-white/20 border border-white/30 rounded-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                Remember me
                            </label>

                            <a href="#" className="text-yellow-400 hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all hover:scale-105"
                        >
                            Sign In
                        </button>

                        <div className="flex items-center gap-2 my-4">
                            <div className="flex-1 h-px bg-white/30"></div>
                            <span className="text-sm text-gray-300">OR</span>
                            <div className="flex-1 h-px bg-white/30"></div>
                        </div>

                        <div className="flex justify-center items-center gap-6 mt-4">
                            <div className="cursor-pointer hover:scale-125 transition">
                                <FcGoogle size={28} />
                            </div>
                            <div className="cursor-pointer text-blue-600 hover:scale-125 transition">
                                <FaFacebook size={26} />
                            </div>
                            <div className="cursor-pointer text-gray-700 hover:scale-125 transition">
                                <FaMicrosoft size={26} />
                            </div>
                        </div>

                        {/* ✅ Signup Navigation */}
                        <p className="text-center text-sm text-gray-300 mt-4">
                            Don’t have an account?{" "}
                            <Link to="/" className="text-yellow-400 hover:underline">
                                Create one
                            </Link>
                        </p>

                    </form>
                </div>
            </div>

            <style jsx>{`
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradientMove 8s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

        </div>
    );
}