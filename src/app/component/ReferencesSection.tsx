"use client";
import React, { useState, useEffect, useRef } from "react";
import { Send, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ReferencesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const sectionRef = useRef(null);

  // Reference logos data
  const references = [
    { id: 1, name: "T.C. Cumhurbaşkanlığı" },
    { id: 2, name: "Ankara Büyükşehir Belediyesi" },
    { id: 3, name: "TÜİK" },
    { id: 4, name: "Çağdaş" },
    { id: 5, name: "Ramada" },
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative">
      {/* References Section */}
      <section 
        ref={sectionRef} 
        className="relative py-24 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)'
        }}
      >
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-purple-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-pink-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-5xl sm:text-6xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              Our References
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Trusted by leading organizations and companies across various industries
            </p>
            
            {/* Clean Logo Strip */}
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-center gap-12 flex-wrap">
                {references.map((ref, index) => (
                  <div
                    key={ref.id}
                    className="group cursor-pointer transition-all duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="h-20 w-32 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                      <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-xs text-center font-medium group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                        {ref.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-current text-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-24 bg-white">        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Side - Contact Form */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="bg-white rounded-2xl shadow-lg p-10 lg:p-12">
                <h3 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                  Join Us
                </h3>
                <p className="text-gray-600 text-center mb-10 text-lg">
                  For detailed information, please fill out the form below and contact our consultants!
                </p>

                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name Surname"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
                      required
                    />
                  </div>

                  {/* Email and Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Mobile Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <textarea
                      name="message"
                      placeholder="Subject and Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400 resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-6">
                    <button
                      onClick={handleSubmit}
                      className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      Get in Touch
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Product Showcase */}
            <div className={`relative transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative h-[500px] flex items-center justify-center">
                {/* Main Product Box */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-80 bg-gradient-to-br from-amber-700 to-amber-800 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-300">
                  <div className="flex items-center justify-center h-full text-white text-xl font-bold">
                    <div className="text-center">
                      <div className="text-3xl mb-2">MAVZER</div>
                      <div className="text-sm opacity-80">AMBALAJ</div>
                    </div>
                  </div>
                </div>
                
                {/* Secondary Product Box */}
                <div className="absolute right-20 top-1/2 -translate-y-1/2 w-56 h-72 bg-white rounded-2xl shadow-xl transform -rotate-6 hover:-rotate-3 transition-transform duration-300">
                  <div className="flex items-center justify-center h-full text-amber-700">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-2">MAVZER</div>
                      <div className="text-xs">Premium Packaging</div>
                    </div>
                  </div>
                </div>

                {/* Small decorative elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-blue-100 rounded-full opacity-50"></div>
                <div className="absolute bottom-10 right-40 w-16 h-16 bg-amber-100 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Contact Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <a
            href="https://wa.me/905336819127"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Contact</span>
          </a>
        </div>
      </section>
    </div>
  );
}