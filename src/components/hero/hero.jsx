import React, { useEffect, useState } from "react";
import "./hero.css"

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Intersection Observer for animation trigger
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mouse move effect for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Create floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10
  }));

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex items-center justify-center text-white 
                 bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        animation: 'bgParallax 2s ease-out forwards',
        transform: `scale(1.05) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        transition: 'transform 0.1s linear'
      }}
    >
      {/* Animated overlay with gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"
        style={{
          animation: 'fadeInHero 1.5s ease-out forwards',
          opacity: 0
        }}
      ></div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: '110%',
            animation: `particleFloat ${particle.duration}s linear infinite`,
            animationDelay: `${particle.delay}s`,
            opacity: 0.5
          }}
        ></div>
      ))}

      {/* Content */}
      <div className="relative w-full max-w-5xl mx-auto text-center px-5 sm:px-6 lg:px-8">
        
        {/* Heading with staggered animation */}
        <div className="overflow-hidden mb-2">
          <h1 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl 
                       font-extrabold tracking-[0.18em] sm:tracking-[0.2em] hero-text-animation"
            style={{
              animationDelay: '0.3s',
              animationFillMode: 'forwards',
              textShadow: '0 5px 15px rgba(0,0,0,0.5)'
            }}
          >
            DISCOVER THE
          </h1>
        </div>

        <div className="overflow-hidden">
          <h1 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl 
                       font-extrabold tracking-[0.18em] sm:tracking-[0.2em] mt-2 hero-text-animation"
            style={{
              animationDelay: '0.5s',
              animationFillMode: 'forwards',
              animation: 'slideUpHero 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards, glowText 3s ease-in-out infinite',
              textShadow: '0 5px 15px rgba(0,0,0,0.5)'
            }}
          >
            WORLD
          </h1>
        </div>

        {/* Underline with expand animation */}
        <div 
          className="w-12 sm:w-16 h-[1px] bg-white mx-auto my-5 sm:my-6"
          style={{
            animation: 'lineExpand 0.8s ease-out 0.7s forwards',
            width: '0',
            opacity: 0
          }}
        ></div>

        {/* Description with fade in animation */}
        <div className="overflow-hidden">
          <p 
            className="text-xs sm:text-sm md:text-base text-gray-200 
                      max-w-xl md:max-w-2xl mx-auto leading-relaxed sm:leading-loose font-bold hero-text-animation"
            style={{
              animationDelay: '0.9s',
              animationFillMode: 'forwards'
            }}
          >
            Embark on extraordinary journeys to the world's most captivating
            destinations. Experience luxury, adventure, and unforgettable
            memories.
          </p>
        </div>

        {/* Buttons with staggered animation */}
        <div className="flex flex-col sm:flex-row items-center justify-center 
                        gap-4 sm:gap-6 mt-8 sm:mt-10">
          
          {/* Primary Button */}
          <div className="overflow-hidden">
            <button 
              className="bg-white text-black px-7 sm:px-8 py-3 
                         text-xs sm:text-sm font-medium tracking-wide 
                         hover:bg-gray-200 transition-all duration-300 
                         cursor-pointer hero-button-animation group relative overflow-hidden"
              style={{
                animationDelay: '1.1s',
                animationFillMode: 'forwards'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Packages
                <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
              </span>
              
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                            transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              {/* Button pulse effect on hover */}
              <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 animate-buttonPulse"></div>
            </button>
          </div>

          {/* Secondary Button */}
          <div className="overflow-hidden">
            <button 
              className="border border-white px-7 sm:px-8 py-3 
                         text-xs sm:text-sm font-medium tracking-wide 
                         hover:bg-white hover:text-black transition-all duration-300 
                         cursor-pointer hero-button-animation group relative overflow-hidden"
              style={{
                animationDelay: '1.3s',
                animationFillMode: 'forwards'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Now
                <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
              </span>
              
              {/* Button background fill on hover */}
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              {/* Border glow effect */}
              <div className="absolute inset-0 border-2 border-transparent rounded opacity-0 group-hover:opacity-100 group-hover:border-white/50 transition-all duration-500"></div>
            </button>
          </div>
        </div>

        {/* Scroll indicator
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          style={{
            animation: 'fadeInHero 1s ease-out 1.5s forwards',
            opacity: 0
          }}
        >
          <span className="text-xs text-gray-300 mb-2 tracking-wider">SCROLL</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent relative">
            <div 
              className="absolute top-0 w-[1px] h-6 bg-white animate-floatUpDown"
              style={{
                animation: 'floatUpDown 2s ease-in-out infinite'
              }}
            ></div>
          </div>
        </div> */}
      </div>

      {/* Floating elements */}
      <div 
        className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-white/10 blur-sm animate-floatUpDown"
        style={{
          animationDelay: '1s'
        }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-10 w-6 h-6 rounded-full bg-white/5 blur-sm animate-floatUpDown"
        style={{
          animationDelay: '2s'
        }}
      ></div>
      <div 
        className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-white/20 blur-sm animate-floatUpDown"
        style={{
          animationDelay: '1.5s'
        }}
      ></div>
    </section>
  );
}

export default Hero;