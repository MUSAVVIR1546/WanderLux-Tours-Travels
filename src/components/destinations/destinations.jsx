import React, { useEffect, useState } from "react";
import "./destinations.css"

function Destinations() {
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

    const destinationsSection = document.getElementById('destinations');
    if (destinationsSection) observer.observe(destinationsSection);

    return () => {
      if (destinationsSection) observer.unobserve(destinationsSection);
    };
  }, []);

  const destinations = [
    { 
      title: "Maldives", 
      src: "/maldives.png",
      description: "Crystal clear waters & pristine beaches",
      delay: "0.1s"
    },
    { 
      title: "New York", 
      src: "/new-york.png",
      description: "The city that never sleeps",
      delay: "0.2s"
    },
    { 
      title: "Morocco", 
      src: "/morocco.png",
      description: "Ancient deserts & vibrant cultures",
      delay: "0.3s"
    },
    { 
      title: "Rome", 
      src: "/rome.png",
      description: "Walk through history's eternal city",
      delay: "0.4s"
    }
  ];

  return (
    <section id="destinations" className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section with animations */}
        <div className="mb-16 text-center">
          <div 
            className="inline-block overflow-hidden"
            style={{
              animation: isVisible ? 'slideUpDestinations 0.8s ease-out forwards' : 'none',
              opacity: 0
            }}
          >
            <p className="text-xl uppercase tracking-widest text-gray-100">
              Destinations
            </p>
            <div 
              className="w-20 h-[2px] bg-white mt-1 mx-auto"
              style={{
                animation: isVisible ? 'lineExpand 0.8s ease-out 0.3s forwards' : 'none',
                width: '0'
              }}
            ></div>
          </div>

          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white mt-8"
            style={{
              animation: isVisible ? 'slideUpDestinations 0.8s ease-out 0.5s forwards' : 'none',
              opacity: 0
            }}
          >
            <span className="block mb-2">Explore Our Top</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Destinations
            </span>
          </h2>

          <p 
            className="text-lg text-gray-300 max-w-2xl mx-auto text-center leading-relaxed"
            style={{
              animation: isVisible ? 'slideUpDestinations 0.8s ease-out 0.7s forwards' : 'none',
              opacity: 0
            }}
          >
            From vibrant cities to remote wilderness, discover destinations that
            <span className="block mt-1 font-medium">inspire wonder and create lasting memories</span>
          </p>
        </div>

        {/* Destinations Grid with staggered animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div 
              key={index}
              className="relative h-[420px] overflow-hidden rounded-2xl destination-card group"
              style={{
                animation: isVisible ? `slideUpDestinations 0.8s ease-out ${0.8 + (index * 0.1)}s forwards` : 'none',
                opacity: 0,
                animationFillMode: 'forwards'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container with multiple effects */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Image Loading Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black shimmer-animation"></div>
                
                {/* Main Image with reveal animation */}
                <img
                  src={destination.src}
                  alt={destination.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  style={{
                    filter: hoveredCard === index ? 'grayscale(0%) brightness(1.1)' : 'grayscale(30%) brightness(0.9)',
                    animation: isVisible ? `imageReveal 1.2s ease-out ${0.9 + (index * 0.1)}s forwards` : 'none',
                    clipPath: isVisible ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)'
                  }}
                />
                
                {/* Gradient Overlay with animation */}
                <div 
                  className="absolute inset-0 gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>
                
                {/* Shimmer Effect on hover */}
                <div 
                  className="absolute inset-0 image-shimmer opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                  style={{
                    animation: hoveredCard === index ? 'shimmerOverlay 2s linear' : 'none'
                  }}
                ></div>
                
                {/* Sparkle effects */}
                {[1, 2, 3].map((sparkle) => (
                  <div
                    key={sparkle}
                    className={`absolute w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100`}
                    style={{
                      top: `${20 + sparkle * 20}%`,
                      left: `${10 + sparkle * 25}%`,
                      animation: hoveredCard === index ? `sparkle 1.5s ease-in-out ${sparkle * 0.3}s infinite` : 'none'
                    }}
                  ></div>
                ))}
              </div>

              {/* Content Overlay with animations */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                {/* Title with slide in effect */}
                <h3 
                  className="text-3xl font-bold text-white mb-2 transform transition-all duration-500 group-hover:-translate-y-2"
                  style={{
                    animation: isVisible ? `textReveal 0.6s ease-out ${1 + (index * 0.1)}s forwards` : 'none',
                    opacity: 0,
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                  }}
                >
                  {destination.title}
                </h3>
                
                {/* Description (appears on hover) */}
                <p 
                  className="text-sm text-gray-300 mb-4 transform transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                  style={{
                    transitionDelay: '0.1s'
                  }}
                >
                  {destination.description}
                </p>
                
                {/* Explore section with animated line */}
                <div className="flex items-center gap-3 mt-2">
                  <div className="relative">
                    {/* Animated line that expands on hover */}
                    <div 
                      className="w-6 h-[1px] bg-white transform transition-all duration-500 group-hover:w-12"
                    ></div>
                    
                    {/* Glowing dot at end of line */}
                    <div 
                      className="absolute -right-1 -top-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        animation: hoveredCard === index ? 'glowPulse 1.5s infinite' : 'none'
                      }}
                    ></div>
                  </div>
                  
                  <span className="text-sm font-medium text-white tracking-wide uppercase opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    Explore →
                  </span>
                </div>
              </div>

              {/* Border glow effect on hover */}
              <div 
                className="absolute inset-0 border-2 border-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-white/30"
                style={{
                  animation: hoveredCard === index ? 'glowPulse 2s infinite' : 'none'
                }}
              ></div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-white/50 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-white/50 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Button with animation */}
        <div 
          className="text-center mt-16"
          style={{
            animation: isVisible ? 'slideUpDestinations 0.8s ease-out 1.4s forwards' : 'none',
            opacity: 0
          }}
        >
          <button className="group relative px-10 py-4 bg-transparent border-2 border-white/50 text-white font-medium rounded-full hover:bg-white hover:text-black transition-all duration-500 overflow-hidden cursor-pointer">
            <span className="relative z-10">View All Destinations</span>
            
            {/* Hover background effect */}
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-glowPulse rounded-full"></div>
          </button>
        </div>

        {/* Animated background elements */}
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
}

export default Destinations;