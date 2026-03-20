'use client';

import { MapPin, Phone, Mail } from 'lucide-react';

export default function TopNav() {
  return (
    <div className="hidden md:block w-full bg-[#0B1F3A] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        
        {/* Left - Address */}
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-yellow-400" />
          <span>Pune, Maharashtra, India</span>
        </div>

        {/* Right - Contact Info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-yellow-400" />
            <span>+91 98765 43210</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} className="text-yellow-400" />
            <span>support@cabsonline.in</span>
          </div>
        </div>

      </div>
    </div>
  );
}