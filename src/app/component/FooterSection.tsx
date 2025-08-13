"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="mt-20">
      {/* Main Footer */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            {/* Company Name */}
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Barge Packaging
            </h2>
            
            {/* Company Description */}
            <p className="text-gray-300 text-xl mb-16 leading-relaxed">
              Mavzer Marketing Printing Packaging Packaging Food Chemical Industry and Trade Ltd. Co.
            </p>
            
            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Address */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-end gap-4">
                <MapPin className="w-7 h-7 text-blue-400 flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="font-bold text-white mb-3 text-lg">Address:</p>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Anadolu Bulvarı No:16 C Block No:1<br />
                    Çamlıca Yenimahalle Ankara
                  </p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start gap-4">
                <Mail className="w-7 h-7 text-blue-400 flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="font-bold text-white mb-3 text-lg">E-Mail:</p>
                  <a 
                    href="mailto:mavzer@mavzerambalaj.com.tr"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg"
                  >
                    mavzer@mavzerambalaj.com.tr
                  </a>
                </div>
              </div>
            </div>
            
            {/* Phone Numbers */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mb-16">
              <div className="flex items-center gap-4">
                <Phone className="w-7 h-7 text-blue-400" />
                <a 
                  href="tel:+903123973935"
                  className="text-2xl font-semibold hover:text-blue-400 transition-colors duration-200"
                >
                  0312 397 3935
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone className="w-7 h-7 text-green-400" />
                <a 
                  href="tel:+905336819127"
                  className="text-2xl font-semibold hover:text-green-400 transition-colors duration-200"
                >
                  0533 681 9127
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-lg">
                © 2025 Packing
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}