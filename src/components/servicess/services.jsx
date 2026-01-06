import React, { useEffect, useState } from "react";
import {
  FaPlane,
  FaHotel,
  FaMapMarkedAlt,
  FaCamera,
  FaUtensils,
  FaShieldAlt,
} from "react-icons/fa";
import "./services.css"

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const servicesSection = document.getElementById('services');
    if (servicesSection) observer.observe(servicesSection);

    return () => {
      if (servicesSection) observer.unobserve(servicesSection);
    };
  }, []);

  const services = [
    {
      icon: FaPlane,
      title: "Flight Booking",
      description: "Premium flight arrangements with major airlines worldwide at competitive rates.",
      color: "from-blue-500 to-cyan-400",
      iconColor: "text-blue-600",
      delay: "0.1s"
    },
    {
      icon: FaHotel,
      title: "Luxury Accommodation",
      description: "Handpicked hotels and resorts that ensure comfort and exceptional service.",
      color: "from-purple-500 to-pink-400",
      iconColor: "text-purple-600",
      delay: "0.2s"
    },
    {
      icon: FaMapMarkedAlt,
      title: "Guided Tours",
      description: "Expert local guides who bring destinations to life with insider knowledge.",
      color: "from-green-500 to-emerald-400",
      iconColor: "text-green-600",
      delay: "0.3s"
    },
    {
      icon: FaCamera,
      title: "Photography Tours",
      description: "Capture stunning moments with professional photography guidance.",
      color: "from-yellow-500 to-orange-400",
      iconColor: "text-yellow-600",
      delay: "0.4s"
    },
    {
      icon: FaUtensils,
      title: "Culinary Experiences",
      description: "Authentic local cuisine and exclusive dining experiences.",
      color: "from-red-500 to-rose-400",
      iconColor: "text-red-600",
      delay: "0.5s"
    },
    {
      icon: FaShieldAlt,
      title: "Travel Insurance",
      description: "Comprehensive coverage for peace of mind throughout your journey.",
      color: "from-indigo-500 to-violet-400",
      iconColor: "text-indigo-600",
      delay: "0.6s"
    }
  ];

  return (
    <section id="services" className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* TOP CONTENT — With animations */}
        <div className="mb-16 text-center">
          <div 
            className="inline-block overflow-hidden"
            style={{
              animation: isVisible ? 'fadeInServices 0.8s ease-out forwards' : 'none',
              opacity: 0
            }}
          >
            <p className="text-xl uppercase tracking-widest text-gray-700">
              Services
            </p>
            <div 
              className="w-20 h-[2px] bg-black mt-1 mx-auto"
              style={{
                animation: isVisible ? 'fadeInServices 0.8s ease-out 0.2s forwards' : 'none',
                opacity: 0
              }}
            ></div>
          </div>

          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 mt-8"
            style={{
              animation: isVisible ? 'fadeInServices 0.8s ease-out 0.4s forwards' : 'none',
              opacity: 0
            }}
          >
            <span className="block">Premium Travel</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
              Services
            </span>
          </h2>

          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto text-center leading-relaxed"
            style={{
              animation: isVisible ? 'fadeInServices 0.8s ease-out 0.6s forwards' : 'none',
              opacity: 0
            }}
          >
            Comprehensive services designed to make your travel experience
            <span className="block mt-1 font-medium text-gray-800">seamless and memorable</span>
          </p>
        </div>

        {/* SERVICES GRID with animations - FIXED ICON VISIBILITY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="border p-6 rounded-2xl bg-white relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              style={{
                animation: isVisible ? `fadeInServices 0.6s ease-out ${service.delay} forwards` : 'none',
                opacity: 0,
                animationFillMode: 'forwards'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background Effects - FIXED z-index */}
              <div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}
              ></div>
              
              {/* Icon Container - SIMPLIFIED */}
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center relative group/icon">
                  {/* Icon background gradient - FIXED opacity */}
                  <div 
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover/icon:opacity-20 transition-opacity duration-500`}
                  ></div>
                  
                  {/* Icon with simple animation */}
                  <div className="relative z-10">
                    <service.icon 
                      size={40}
                      className={`${service.iconColor} transition-all duration-300 group-hover/icon:scale-110`}
                    />
                  </div>
                  
                  {/* Pulse effect on hover - FIXED */}
                  <div 
                    className="absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 group-hover/icon:opacity-100 transition-all duration-500"
                    style={{
                      borderColor: hoveredCard === index ? 'currentColor' : 'transparent',
                      animation: hoveredCard === index ? 'pulseService 2s infinite' : 'none'
                    }}
                  ></div>
                </div>
              </div>

              {/* Title */}
              <h3 
                className="text-xl font-bold mb-4 text-gray-800 text-center relative overflow-hidden"
              >
                <span 
                  className="inline-block mb-1"
                  style={{
                    animation: isVisible ? `textReveal 0.8s ease-out ${parseFloat(service.delay) + 0.1}s forwards` : 'none',
                    clipPath: isVisible ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)'
                  }}
                >
                  {service.title}
                </span>
                
                {/* Underline effect */}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gray-800 group-hover:w-16 transition-all duration-500"></span>
              </h3>

              {/* Description */}
              <p 
                className="text-gray-600 text-center text-sm leading-relaxed mb-6 transition-colors duration-300 group-hover:text-gray-800"
                style={{
                  animation: isVisible ? `fadeInServices 0.6s ease-out ${parseFloat(service.delay) + 0.2}s forwards` : 'none',
                  opacity: 0
                }}
              >
                {service.description}
              </p>

              {/* Learn More Link (appears on hover) */}
              <div className="text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-black group/link"
                >
                  <span className="mr-2">Learn More</span>
                  <span className="transform transition-transform duration-300 group-hover/link:translate-x-2">→</span>
                </a>
              </div>

              {/* Card Border Effects - SIMPLIFIED */}
              <div 
                className="absolute inset-0 border-2 border-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-gray-200"
              ></div>

              {/* Card number */}
              <div className="absolute top-4 left-4 text-xs font-bold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div 
          className="text-center mt-16"
          style={{
            animation: isVisible ? 'fadeInServices 0.8s ease-out 1s forwards' : 'none',
            opacity: 0
          }}
        >
          <button className="group relative px-12 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-500 overflow-hidden cursor-pointer">
            <span className="relative z-10">View All Services</span>
            
            {/* Button background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Button shine effect */}
            <div className="absolute top-0 left-0 w-20 h-full bg-white/20 transform -skew-x-12 -translate-x-32 group-hover:translate-x-[400%] transition-transform duration-1000"></div>
          </button>
        </div>

        {/* Decorative background elements */}
        <div className="absolute left-0 top-1/3 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute right-0 bottom-1/3 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
}

export default Services;