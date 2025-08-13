"use client";
import React, { useEffect, useState } from "react";
import { Package, Handshake, Award, CheckCircle, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

export default function SubheaderSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230EA5E9' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Animated Floating Icons */}
            <div className="relative">
              {/* Floating Icons */}
              <div className="absolute -top-8 -left-8 lg:block hidden">
                <div className="animate-float-slow">
                  <Handshake className="w-8 h-8 text-blue-400/30" />
                </div>
              </div>
              <div className="absolute -top-10 right-0 lg:right-20 hidden lg:block">
                <div className="animate-float-delayed">
                  <Package className="w-7 h-7 text-cyan-400/30" />
                </div>
              </div>
              <div className="absolute top-12 -right-6 hidden lg:block">
                <div className="animate-float">
                  <Award className="w-6 h-6 text-blue-500/30" />
                </div>
              </div>

              {/* Main Heading with Constant Color and Underline Animation */}
              <div className="relative inline-block">
                <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-blue-600 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  Barge Packaging
                </h2>
                {/* Animated Underline */}
                <div className={`absolute bottom-0 left-0 h-1 bg-blue-600 rounded-full transition-all duration-1000 delay-300 ${
                  isVisible ? 'w-full' : 'w-0'
                }`}></div>
              </div>
            </div>

            {/* Subheadline with Better Styling */}
            <p className={`text-2xl sm:text-3xl text-blue-500/80 font-medium leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Strong Business Partnerships Creative Work
            </p>

            {/* Description with Better Line Spacing */}
            <div className={`max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <p className="text-gray-700 text-base sm:text-lg leading-loose">
                <span className="font-semibold text-gray-900">MAVZER PACKAGING MATBACILIK ADVERTISING PACKAGING and SAN. TIC. LTD. ŞTİ.</span> has reached the position of the leader of the sector by strengthening its place in the sector with the production attack it has started. 
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-loose mt-4">
                With more than a quarter of a century of experience, Mavzer responds to the needs of cafes, restaurants, hotels, markets, official institutions, medical and industrial sectors at the highest level and grows day by day in its journey from producers to end consumers without compromising quality standards.
              </p>
            </div>

            {/* Feature Pills */}
            <div className={`flex flex-wrap gap-3 justify-center lg:justify-start transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">25+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
                <TrendingUp className="w-4 h-4 text-cyan-600" />
                <span className="text-sm font-medium text-gray-700">Industry Leader</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Trusted Partner</span>
              </div>
            </div>

            {/* Corporate Button with Simple Hover */}
            <div className={`pt-4 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <button className="px-10 py-4 bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1">
                CORPORATE
              </button>
            </div>
          </div>

          {/* Right Side - Illustration/Photo Area */}
          <div className={`relative transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {/* Product Showcase with Shadow/Glow */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-3xl rounded-3xl"></div>
              
              {/* Main Content Area */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-500">
                {/* Placeholder for Image - Replace with actual image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 via-white to-cyan-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  {/* You can replace this with an actual image */}
                  {/* <Image
                    src="/packaging-products.jpg"
                    alt="Packaging Products"
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                  /> */}
                  
                  {/* Placeholder Design */}
                  <div className="relative w-full h-full">
                    {/* Animated Package Icons */}
                    <div className="absolute top-1/4 left-1/4 animate-float">
                      <Package className="w-16 h-16 text-blue-400/40" />
                    </div>
                    <div className="absolute top-1/2 right-1/3 animate-float-delayed">
                      <Package className="w-20 h-20 text-cyan-500/40" />
                    </div>
                    <div className="absolute bottom-1/4 left-1/3 animate-float-slow">
                      <Package className="w-14 h-14 text-blue-500/40" />
                    </div>
                    
                    {/* Center Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <Package className="w-24 h-24 text-blue-600/30 mb-4" />
                      <p className="text-gray-500 font-medium">Product Showcase</p>
                      <p className="text-sm text-gray-400">Your packaging products here</p>
                    </div>
                  </div>
                </div>

                {/* Product Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">500+</p>
                    <p className="text-xs text-gray-600">Products</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-cyan-600">1000+</p>
                    <p className="text-xs text-gray-600">Clients</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">25+</p>
                    <p className="text-xs text-gray-600">Years</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for Floating Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(5deg); }
          66% { transform: translateY(5px) rotate(-5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(10px) rotate(-5deg); }
          66% { transform: translateY(-5px) rotate(5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}