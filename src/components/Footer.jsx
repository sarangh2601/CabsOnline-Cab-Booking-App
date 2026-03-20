import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[url('bk-1.jpg')] bg-cover text-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              {/* Logo */}
              <div className="w-80 h-auto  flex items-center gap-2">
                <img src="./Cabs-Online-Logo.png" alt="" />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Your trusted partner for reliable, safe, and affordable ride-sharing services across the city.
            </p>
             <div className="flex gap-6">
            <a href="#" className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
              <Linkedin size={20} />
            </a>
          </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b pb-1 w-[60%]">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-600 transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 transition-colors text-sm">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-600 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

         <div className="space-y-5">
          <h4 className="text-lg font-bold mb-6 border-b pb-1 w-[60%]">Contact</h4>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="text-white" size={20} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="text-white" size={20} />
                <span>support@onlinecab.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="text-white" size={20} />
                <span>123 City Street, Metro City</span>
              </div>
            </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-yellow-600/20 rounded-2xl p-6 md:p-8 mb-12 border border-blue-600">
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
    
    {/* Left Content */}
    <div className="text-center md:text-left">
      <h3 className="text-xl md:text-2xl font-bold mb-2">
        Get Special Offers
      </h3>
      <p className="text-gray-300 text-sm md:text-base">
        Subscribe to our newsletter for exclusive discounts and updates.
      </p>
    </div>

    {/* Right Input Section */}
    <div className="w-full">
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-lg bg-transparent plaveholder:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm border border-gray-300"
        />

        <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-yellow-600 font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm whitespace-nowrap">
          Subscribe
        </button>

      </div>
    </div>

  </div>
</div>

        <div className="border-t border-white pt-1 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <p className="text-gray-100 text-center md:text-left text-sm">
            © {currentYear} <span className='text-blue-600 font-semibold'>cabsonline.in </span> All rights reserved. Pioneering the future of urban transportation.
          </p> 
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-yellow-600 rounded-full flex items-center justify-center text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-40"
      >
        ↑
      </button>
    </footer>
  );
}