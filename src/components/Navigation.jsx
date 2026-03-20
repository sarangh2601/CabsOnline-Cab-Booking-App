import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import TopNavbar from './TopNavbar';
import { LogIn, UserPlus } from "lucide-react"; // import icons

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/booking', label: 'Book Now' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-80 bg-white shadow-md lg:h-[110px]! sm:h-[140px]!">
      <TopNavbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="w-55 h-55  flex items-center gap-2">
            <img src="./Cabs-Online-Logo.png" alt="" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="relative text-foreground text-base font-medium 
                 transition-colors duration-300 ease-in-out hover:text-yellow-700"
              >
                {link.label}

                {/* Center-origin underline */}
                <span className="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-yellow-500 
                       transition-all duration-300 ease-in-out 
                       group-hover:w-full group-hover:-translate-x-1/2"></span>
              </Link>
            ))}
          </div>


          {/* Desktop CTA */}
          <div className="hidden md:flex gap-3 items-center">

            {/* Login Button */}
            <Link
              to="/login"
              className="flex items-center gap-2 px-6 py-2 text-yellow-700 font-semibold rounded-lg text-sm border-1 
               transition duration-300 ease-in-out 
               hover:bg-blue-600 hover:text-yellow-900 hover:scale-105 hover:shadow-md"
            >
              <LogIn size={16} />  {/* Icon on left */}
              Login
            </Link>

            {/* Sign Up Button */}
            <Link
              to="/signup"
              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold rounded-lg text-sm 
               transition duration-300 ease-in-out 
               hover:from-blue-600 hover:to-yellow-500 hover:scale-105 hover:shadow-lg"
            >
              <UserPlus size={16} /> {/* Icon on left */}
              Sign Up
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-blue-600 bg-yellow-50 shadow-lg rounded-b-2xl">

            <div className="px-4 py-5 space-y-4">

              {/* Nav Links */}
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-4 py-2 rounded-lg text-yellow-800 font-medium transition duration-300 ease-in-out 
                       hover:bg-blue-600 hover:text-yellow-900 hover:scale-105 hover:shadow-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-blue-600 pt-4"></div>

              {/* Buttons */}
              <div className="flex flex-col gap-3">

                {/* Login Button */}
                <Link
                  to="/login"
                  className="w-full text-center px-4 py-2 border border-yellow-500 text-yellow-700 font-semibold rounded-lg 
                     transition duration-300 ease-in-out hover:bg-blue-600 hover:text-yellow-900 hover:scale-105 hover:shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>

                {/* Signup Button */}
                <Link
                  to="/signup"
                  className="w-full text-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold 
                     rounded-lg transition duration-300 ease-in-out hover:from-blue-600 hover:to-yellow-500 
                     hover:shadow-lg hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>

              </div>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}