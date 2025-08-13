"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Check, ArrowRight, Coffee, Package, Award, Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";

interface ProductImage {
  id: number;
  src: string;
  alt: string;
  title: string;
}

export default function StickSugarLanding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);

  // Product images for slider with peek effect
  const productImages: ProductImage[] = [
    { id: 1, src: "/stick-sugar-1.jpg", alt: "Classic White Stick Sugar", title: "Classic White" },
    { id: 2, src: "/stick-sugar-2.jpg", alt: "Brown Sugar Sticks", title: "Brown Sugar" },
    { id: 3, src: "/stick-sugar-3.jpg", alt: "Premium Gold Pack", title: "Premium Gold" },
    { id: 4, src: "/stick-sugar-4.jpg", alt: "Eco-Friendly Pack", title: "Eco-Friendly" },
    { id: 5, src: "/stick-sugar-5.jpg", alt: "Hotel Collection", title: "Hotel Collection" },
    { id: 6, src: "/stick-sugar-6.jpg", alt: "Cafe Special", title: "Cafe Special" },
  ];

  // Features list with hover animations
  const features = [
    "Premium quality refined sugar",
    "Individual 5g portions for perfect dosing",
    "Hygienic and practical packaging",
    "Ideal for cafes, hotels, and restaurants",
    "Custom branding options available",
    "Eco-friendly packaging materials"
  ];

  // Navigation Structure
  const navigationStructure = {
    company: {
      title: "Barge Packaging",
      subtitle: "Mavzer Marketing Printing Packaging Packaging Food Chemical Industry and Trade Ltd. Co."
    },
    contact: {
      phone1: "0312 397 3935",
      phone2: "0533 681 9127"
    },
    mainNav: [
      { title: "HOME PAGE", href: "#home" },
      { title: "MAVZER PACKAGING", href: "#mavzer", hasSubmenu: true, submenu: [
        { title: "Corporate", href: "#corporate" },
        { title: "Production", href: "#production" },
        { title: "References", href: "#references" },
        { title: "Contact", href: "#contact" }
      ]},
      { title: "PRODUCTS", href: "#products", hasSubmenu: true, submenu: [
        { title: "WELCOME", href: "#welcome" },
        { title: "PRINTED PRODUCTS", href: "#printed" },
        { title: "PAPER - CARTON PRODUCTS", href: "#paper" },
        { title: "PACKAGES SPRINGS", href: "#packages" },
        { title: "KITCHEN PRODUCTS", href: "#kitchen" },
        { title: "CLEANING PRODUCTS", href: "#cleaning" }
      ]}
    ]
  };

  // Auto-play slider with smooth transitions
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, productImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % productImages.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + productImages.length) % productImages.length);
  };

  return (
    <>
      {/* Premium Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Modern Typography */}
            <div className="flex-shrink-0">
              <a href="/" className="group">
                <div className="relative">
                  <h1 className="text-2xl font-black tracking-tight">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">MAV</span>
                    <span className="text-gray-900">ZER</span>
                  </h1>
                  <p className="text-[10px] font-light tracking-[0.2em] text-gray-500 uppercase">Ambalaj</p>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              <a href="#corporate" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 relative group">
                CORPORATE
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 relative group">
                SERVICES
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#production" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 relative group">
                PRODUCTION
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 relative group">
                PRODUCTS
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#references" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 relative group">
                REFERENCES
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 relative group">
                CONTACT
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>

            {/* Right Side - Navigation Dropdown Button */}
            <div className="hidden lg:block relative">
              <button
                onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
                className="flex items-center gap-2 px-5 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
              >
                <Menu className="w-4 h-4" />
                <span>MENU</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isNavDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isNavDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden flex flex-col" style={{ maxHeight: '600px' }}>
                  {/* Scrollable Navigation Section */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="py-2">
                      {/* HOME PAGE */}
                      <a
                        href="#home"
                        className="block px-5 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium text-sm border-b border-gray-100"
                      >
                        HOME PAGE
                      </a>
                      
                      {/* MAVZER PACKAGING with submenu */}
                      <div className="border-b border-gray-100">
                        <a
                          href="#mavzer"
                          className="block px-5 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium text-sm"
                        >
                          MAVZER PACKAGING
                        </a>
                        <div className="bg-gray-50 py-1">
                          <a href="#corporate" className="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-colors">
                            • Corporate
                          </a>
                          <a href="#production" className="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-colors">
                            • Production
                          </a>
                          <a href="#references" className="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-colors">
                            • References
                          </a>
                          <a href="#contact" className="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-colors">
                            • Contact
                          </a>
                        </div>
                      </div>
                      
                      {/* PRODUCTS with submenu */}
                      <div className="border-b border-gray-100">
                        <a
                          href="#products"
                          className="block px-5 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium text-sm"
                        >
                          PRODUCTS
                        </a>
                        <div className="bg-gray-50 py-1">
                          <a href="#welcome" className="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-colors">
                            • WELCOME
                          </a>
                          <a href="#printed" className="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-colors">
                            • PRINTED PRODUCTS
                          </a>
                          <a href="#paper" className="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-colors">
                            • PAPER - CARTON PRODUCTS
                          </a>
                          <a href="#packages" className="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-colors">
                            • PACKAGES SPRINGS
                          </a>
                          <a href="#kitchen" className="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-colors">
                            • KITCHEN PRODUCTS
                          </a>
                          <a href="#cleaning" className="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-colors">
                            • CLEANING PRODUCTS
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Fixed Bottom Section - Company Info (NOT scrollable) */}
                  <div className="flex-shrink-0 border-t-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5">
                    <h3 className="font-bold text-gray-900 text-base mb-2">Barge Packaging</h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-3">
                      Mavzer Marketing Printing Packaging Packaging Food Chemical Industry and Trade Ltd. Co.
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-sm text-gray-700">0312 397 3935</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-sm text-gray-700">0533 681 9127</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-xl border-t border-gray-100 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <nav className="p-4">
                {/* Company Info Mobile */}
                <div className="p-4 mb-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{navigationStructure.company.title}</h3>
                  <p className="text-xs text-gray-600">{navigationStructure.company.subtitle}</p>
                </div>

                {/* Main Navigation Mobile */}
                <div className="space-y-2">
                  <a href="#corporate" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg">CORPORATE</a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg">SERVICES</a>
                  <a href="#production" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg">PRODUCTION</a>
                  <a href="#products" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg">PRODUCTS</a>
                  <a href="#references" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg">REFERENCES</a>
                  <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg">CONTACT</a>
                </div>

                {/* Contact Info Mobile */}
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">{navigationStructure.contact.phone1}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">{navigationStructure.contact.phone2}</span>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content with Premium Layered Background */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Layered Background with Gradients and Shapes */}
        <div className="absolute inset-0">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
          
          {/* Subtle Paper Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`
          }}></div>

          {/* Animated Abstract Shapes */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 -left-32 w-80 h-80 bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute -bottom-32 right-1/3 w-96 h-96 bg-gradient-to-tl from-blue-300/10 to-cyan-300/10 rounded-full blur-3xl animate-float-slow"></div>
          
          {/* Angled Stripes */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(59, 130, 246, 0.1) 35px, rgba(59, 130, 246, 0.1) 70px)`
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 lg:pt-6 lg:pb-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Content with Modern Typography */}
            <div className="space-y-5 animate-fadeIn">
              {/* Main Title with Extra Bold Typography */}
              <div className="space-y-3">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9]">
                  <span className="block text-gray-900">STICK</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">ŞEKER</span>
                </h1>
                <p className="text-xl sm:text-2xl font-thin text-gray-600 tracking-wide">
                  Premium Stick Sugar for Modern Businesses
                </p>
              </div>

              {/* Description with Thin Sans-Serif */}
              <p className="text-lg font-light text-gray-700 leading-relaxed max-w-xl">
                Elevate your hospitality experience with our premium stick sugar packets. 
                Perfect portion control, elegant presentation, and uncompromising quality 
                for cafes, hotels, and restaurants worldwide.
              </p>

              {/* Features with Simple List Style */}
              <div className="space-y-2.5">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Premium Stats with Gold Accents */}
              <div className="flex flex-wrap gap-6 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3 group hover:scale-105 transition-transform">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                    <Package className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">50M+</p>
                    <p className="text-xs font-light text-gray-600 uppercase tracking-wider">Packets/Year</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:scale-105 transition-transform">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                    <Coffee className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">5000+</p>
                    <p className="text-xs font-light text-gray-600 uppercase tracking-wider">Partners</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:scale-105 transition-transform">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">ISO</p>
                    <p className="text-xs font-light text-gray-600 uppercase tracking-wider">Certified</p>
                  </div>
                </div>
              </div>

              {/* CTA Button with Simple Hover Effect */}
              <div className="pt-2">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <span className="flex items-center gap-2">
                    ONLINE STORE
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column - Premium Image Slider with Peek Effect */}
            <div className="relative animate-fadeInRight">
              {/* Main Slider Container with Drop Shadow */}
              <div className="relative max-w-lg mx-auto lg:max-w-none">
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden aspect-[4/5] hover:shadow-3xl transition-shadow duration-500" style={{
                  boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)'
                }}>
                  {/* Slides with Peek Effect */}
                  <div className="relative h-full">
                    {productImages.map((image, index) => {
                      const isPrev = index === (currentSlide - 1 + productImages.length) % productImages.length;
                      const isNext = index === (currentSlide + 1) % productImages.length;
                      const isCurrent = index === currentSlide;
                      
                      return (
                        <div
                          key={image.id}
                          className={`absolute inset-0 transition-all duration-700 ${
                            isCurrent ? "opacity-100 scale-100 z-20" : 
                            isPrev ? "opacity-30 scale-95 -translate-x-8 z-10" :
                            isNext ? "opacity-30 scale-95 translate-x-8 z-10" :
                            "opacity-0 scale-90 z-0"
                          }`}
                          style={{
                            transform: isCurrent ? 'none' : 
                                     isPrev ? 'translateX(-10%) scale(0.95) rotateY(5deg)' :
                                     isNext ? 'translateX(10%) scale(0.95) rotateY(-5deg)' :
                                     'scale(0.9)'
                          }}
                        >
                          {/* Floating Product Card */}
                          <div className={`w-full h-full bg-gradient-to-br from-blue-50 to-cyan-50 flex flex-col items-center justify-center p-8 ${
                            isCurrent ? 'hover:rotate-2 hover:scale-105' : ''
                          } transition-transform duration-300`}>
                            <div className="text-center">
                              <div className="w-40 h-40 mx-auto mb-6 bg-white rounded-2xl shadow-xl flex items-center justify-center transform hover:rotate-6 transition-transform duration-300">
                                <Package className="w-20 h-20 text-blue-500" />
                              </div>
                              <h3 className="text-2xl font-bold text-gray-800 mb-2">{image.title}</h3>
                              <p className="text-gray-600 font-light">{image.alt}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Premium Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:text-blue-600" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-800 group-hover:text-blue-600" />
                  </button>

                  {/* Elegant Pagination Dots */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                    {productImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-500 ${
                          index === currentSlide
                            ? "w-12 h-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-lg shadow-blue-500/30"
                            : "w-3 h-3 bg-white/60 rounded-full hover:bg-white hover:scale-125"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS for Premium Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
            33% { transform: translate(30px, -30px) rotate(120deg) scale(1.1); }
            66% { transform: translate(-20px, 20px) rotate(240deg) scale(0.9); }
          }
          @keyframes float-delayed {
            0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
            33% { transform: translate(-30px, 30px) rotate(-120deg) scale(1.1); }
            66% { transform: translate(20px, -20px) rotate(-240deg) scale(0.9); }
          }
          @keyframes float-slow {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(40px, -40px) scale(1.2); }
          }
          .animate-float {
            animation: float 30s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float-delayed 30s ease-in-out infinite;
            animation-delay: 10s;
          }
          .animate-float-slow {
            animation: float-slow 40s ease-in-out infinite;
            animation-delay: 5s;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }
          .animate-fadeInRight {
            animation: fadeInRight 1s ease-out;
          }
        `}</style>
      </section>
    </>
  );
}