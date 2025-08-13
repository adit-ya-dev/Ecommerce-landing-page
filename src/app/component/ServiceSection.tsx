"use client";
import React, { useState, useEffect, useRef } from "react";
import { Coffee, Building2, Hotel, Briefcase, Heart, Factory, ArrowRight, Sparkles } from "lucide-react";

interface ServiceCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  href: string;
  iconColor: string;
  bgGradient: string;
}

export default function ServiceSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services: ServiceCard[] = [
    {
      id: 1,
      icon: <Building2 className="w-12 h-12" />,
      title: "RESTAURANT",
      tagline: "Premium supplies, delivered fast",
      description: "You will need a lot of paper and plastic items in restaurants!",
      href: "#restaurant",
      iconColor: "from-blue-400 to-cyan-400",
      bgGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 2,
      icon: <Coffee className="w-12 h-12" />,
      title: "CAFE",
      tagline: "Quality essentials for cafes",
      description: "You will need a lot of paper and plastic items in cafes!",
      href: "#cafe",
      iconColor: "from-amber-400 to-orange-400",
      bgGradient: "from-amber-500/20 to-orange-500/20"
    },
    {
      id: 3,
      icon: <Hotel className="w-12 h-12" />,
      title: "HOTEL",
      tagline: "Bulk solutions for hospitality",
      description: "You will need a large number of paper and plastic items in hotels!",
      href: "#hotel",
      iconColor: "from-purple-400 to-pink-400",
      bgGradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 4,
      icon: <Briefcase className="w-12 h-12" />,
      title: "OFFICIAL INSTITUTION",
      tagline: "Reliable institutional supply",
      description: "You will need a lot of paper and plastic items in the institutions!",
      href: "#institution",
      iconColor: "from-green-400 to-emerald-400",
      bgGradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: 5,
      icon: <Heart className="w-12 h-12" />,
      title: "MEDICAL",
      tagline: "Certified medical-grade products",
      description: "You will need a lot of different product groups in the medical!",
      href: "#medical",
      iconColor: "from-red-400 to-rose-400",
      bgGradient: "from-red-500/20 to-rose-500/20"
    },
    {
      id: 6,
      icon: <Factory className="w-12 h-12" />,
      title: "INDUSTRIAL",
      tagline: "Heavy-duty industrial supplies",
      description: "You will need a lot of different items in the industry!",
      href: "#industrial",
      iconColor: "from-indigo-400 to-blue-400",
      bgGradient: "from-indigo-500/20 to-blue-500/20"
    }
  ];

  // Intersection Observer for fade-in animation
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

  const handleCardClick = (href: string) => {
    window.location.href = href;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 -mt-1 overflow-hidden" 
      style={{
        background: 'linear-gradient(135deg, #0077B6 0%, #023E8A 100%)'
      }}
    >
      {/* Abstract Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='pattern' x='0' y='0' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 20L20 0L40 20L20 40z' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.3'/%3E%3Ccircle cx='20' cy='20' r='2' fill='%23ffffff' opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23pattern)'/%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title with Animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wider">
            OUR SERVICE AREAS
          </h2>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Sparkles className="w-5 h-5" />
            <p className="text-lg">Comprehensive solutions for every industry</p>
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Service Cards Grid - 3x2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => handleCardClick(service.href)}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`transform transition-all duration-700 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${hoveredCard === service.id ? 'scale-105' : 'scale-100'}`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className={`relative bg-white rounded-xl shadow-2xl p-8 h-full transition-all duration-300 ${
                hoveredCard === service.id ? 'shadow-3xl bg-gradient-to-br from-white to-blue-50' : ''
              }`}>
                {/* Icon with Background Shape */}
                <div className="flex justify-center mb-6">
                  <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${service.bgGradient} transition-all duration-300 ${
                    hoveredCard === service.id ? 'scale-110 rotate-3' : ''
                  }`}>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.iconColor} blur-lg opacity-0 transition-opacity duration-300 ${
                      hoveredCard === service.id ? 'opacity-50' : ''
                    }`}></div>
                    
                    {/* Icon */}
                    <div className={`relative bg-gradient-to-r ${service.iconColor} bg-clip-text text-transparent`}>
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Title with Underline Animation */}
                <div className="text-center mb-3">
                  <h3 className="text-xl font-bold text-gray-800 tracking-wider relative inline-block">
                    {service.title}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${service.iconColor} transition-all duration-300 ${
                      hoveredCard === service.id ? 'w-full' : 'w-0'
                    }`}></span>
                  </h3>
                </div>

                {/* Tagline */}
                <p className="text-sm text-gray-500 italic text-center mb-4">
                  "{service.tagline}"
                </p>

                {/* Description */}
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Indicator */}
                <div className={`flex justify-center mt-6 transition-all duration-300 ${
                  hoveredCard === service.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <span className="text-xs text-blue-600 font-medium flex items-center gap-1">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Button */}
        <div className={`flex justify-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="group relative px-12 py-4 bg-gradient-to-r from-white to-gray-100 text-blue-700 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
            {/* Gradient Overlay on Hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            
            {/* Button Content */}
            <span className="relative flex items-center gap-3 text-lg">
              Explore All Sectors
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}