import React from 'react';
import { 
  FaInstagram, 
  FaTiktok, 
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaArrowRight,
  FaLightbulb,
  FaBuilding
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a2e] text-white pt-16 pb-6">
      {/* Divider/Decorative Line */}
      <div className="container mx-auto px-4">
        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-12 rounded-full"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1 - Brand */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                <FaLightbulb className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Metamor<span className="text-amber-400">.</span>
              </span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Mewujudkan visual yang lahir dari mimpi terbaik Anda. 
              Kolaborasi desain interior dan pencahayaan premium untuk ruang yang bermakna.
            </p>
            
            {/* Social Media - Only Instagram & TikTok */}
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.instagram.com/metamordekorasi?igsh=aDIxdXNvY2d6aHVn" 
                className="w-10 h-10 bg-white/10 hover:bg-amber-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-400/20"
                aria-label="Instagram"
              >
                <FaInstagram className="text-gray-300 hover:text-white text-lg" />
              </a>
              <a 
                href="https://www.tiktok.com/@metamordekorasi?_r=1&_t=ZS-97ssqDAiK0a" 
                className="w-10 h-10 bg-white/10 hover:bg-amber-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-400/20"
                aria-label="TikTok"
              >
                <FaTiktok className="text-gray-300 hover:text-white text-lg" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative">
              Layanan
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-amber-400 mt-2"></span>
            </h3>
            <ul className="space-y-3">
              {['Desain Interior', 'Pencahayaan Premium', 'LED Display', 'Konsultasi Desain'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300 flex items-center group"
                  >
                    <FaArrowRight className="text-amber-400 text-xs mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Location Map */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative">
              Lokasi Kami
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-amber-400 mt-2"></span>
            </h3>
            
            {/* Google Maps - Larger size */}
            <div className="w-full h-48 rounded-lg overflow-hidden border-2 border-white/10 hover:border-amber-400/50 transition-all duration-300 mb-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.123456789!2d106.7654321!3d-6.3456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5d5d5d5d5d5%3A0x5d5d5d5d5d5d5d5d!2sJl+Raihan+Villa+Rizky+Ilhami+2+Blok+Rd+5!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Metamor Design Location"
                className="hover:scale-105 transition-transform duration-500"
              ></iframe>
            </div>

            {/* Address detail below map */}
            <div className="flex items-start space-x-3 text-sm text-gray-400">
              <FaBuilding className="text-amber-400 text-lg mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-300 font-medium">Metamor Design</p>
                <p className="text-xs leading-relaxed">
                  Jl Raihan Villa Rizky Ilhami 2 Blok Rd 5,<br />
                  Pengasinan, Kec. Sawangan,<br />
                  Kota Depok, Jawa Barat 16518
                </p>
              </div>
            </div>

            <a 
              href="https://maps.google.com/?q=Jl+Raihan+Villa+Rizky+Ilhami+2+Blok+Rd+5,+Pengasinan,+Kec.+Sawangan,+Kota+Depok,+Jawa+Barat+16518" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-amber-400/30 transition-all duration-300 hover:scale-105 w-full justify-center"
            >
              <FaMapMarkerAlt className="text-base" />
              Buka di Google Maps
            </a>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative">
              Hubungi Kami
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-amber-400 mt-2"></span>
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-400 hover:text-gray-300 transition-colors">
                <FaPhone className="text-amber-400 text-lg mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-xs">Telepon</p>
                  <p className="text-sm">+62 813-8614-3336</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-400 hover:text-gray-300 transition-colors">
                <FaEnvelope className="text-amber-400 text-lg mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-xs">Email</p>
                  <p className="text-sm">sales@metamordesign.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-400 hover:text-gray-300 transition-colors">
                <FaClock className="text-amber-400 text-lg mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-xs">Jam Operasional</p>
                  <p className="text-sm">Senin - Jumat: 09.00 - 17.00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} <span className="text-gray-400">Metamor Design</span>. 
              All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                Kebijakan Privasi
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;