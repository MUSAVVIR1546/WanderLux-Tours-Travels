import React, { useState, useEffect } from "react";
import  './nav.css'

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll effects for navbar
  useEffect(() => {
    const handleScroll = () => {
      // Background change on scroll
      setScrolled(window.scrollY > 50);
      
      // Scroll progress calculation
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      id="navbar" 
      className={`w-full fixed top-0 z-50 text-white transition-all duration-500 ${
        scrolled ? "bg-black py-3 shadow-xl" : "bg-transparent py-4"
      }`}
      style={{
        animation: "fadeInDown 0.8s ease-out",
        // Add backdrop blur effect when scrolled
        backdropFilter: scrolled ? "blur(8px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.95)" : "transparent"
      }}
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8">
        
        {/* Logo with enhanced animation */}
        <div className="flex flex-col group cursor-pointer">
          <span 
            className="text-xl font-bold tracking-wider cursor-pointer 
            hover:scale-105 transition-all duration-300 
            hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r 
            hover:from-white hover:via-yellow-200 hover:to-white
            animate-pulseGlow"
            style={{
              animation: "pulseGlow 3s infinite"
            }}
          >
            WANDERLUX
          </span>
          <div className="relative">
            <span className="w-full h-0.5 bg-white/50 mt-1 block"></span>
            <span 
              className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mt-1 
              group-hover:w-full transition-all duration-700 ease-out"
              style={{
                width: "0%"
              }}
            ></span>
          </div>
        </div>

        {/* Desktop Menu with staggered animation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["Home", "About", "Packages", "Destinations", "Gallery", "Contact"].map((item, index) => (
            <li 
              key={item}
              className="relative group"
              style={{
                animation: `slideInRight 0.5s ease-out ${index * 0.1}s forwards`,
                opacity: 0
              }}
            >
              <a 
                href={`#${item.toLowerCase()}`}
                className="cursor-pointer hover:text-gray-300 transition-colors duration-300 
                inline-block py-2 relative"
              >
                {item}
                {/* Hover underline effect */}
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-yellow-200 
                  group-hover:w-full transition-all duration-300 ease-out"
                ></span>
                
                {/* Floating dots on hover */}
                <span className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 
                transition-opacity duration-300">
                  <span 
                    className="absolute w-1 h-1 bg-white rounded-full animate-floating"
                    style={{ animationDelay: "0s" }}
                  ></span>
                  <span 
                    className="absolute w-1 h-1 bg-yellow-200 rounded-full animate-floating"
                    style={{ left: "4px", animationDelay: "0.2s" }}
                  ></span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button with animation */}
        <button
          className="md:hidden text-2xl relative w-8 h-8 flex flex-col justify-center items-center group"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {/* Animated Hamburger Icon */}
          <span 
            className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? "rotate-45 top-1/2" : "top-1"
            }`}
          ></span>
          <span 
            className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? "opacity-0" : "top-1/2"
            }`}
          ></span>
          <span 
            className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? "-rotate-45 top-1/2" : "top-3"
            }`}
          ></span>
          
          {/* Glow effect */}
          <span 
            className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 
            transition-transform duration-300"
          ></span>
        </button>
      </div>

      {/* Mobile Menu with smooth animation - Background also changes on scroll */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } ${scrolled ? "bg-black" : "bg-black/80"} backdrop-blur-sm`}
      >
        <ul className="flex flex-col items-center gap-5 py-5 text-sm font-medium">
          {["Home", "About", "Packages", "Destinations", "Gallery", "Contact"].map((item, index) => (
            <li 
              key={item}
              className="relative group"
              style={{
                animation: open ? `fadeInDown 0.3s ease-out ${index * 0.1}s forwards` : "none",
                opacity: 0
              }}
            >
              <a 
                href={`#${item.toLowerCase()}`}
                className="text-lg hover:text-gray-300 transition-colors duration-300 
                inline-block py-2 relative"
                onClick={() => setOpen(false)}
              >
                {item}
                {/* Mobile hover effect */}
                <span 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                  w-0 h-0.5 bg-gradient-to-r from-white to-yellow-200 
                  group-hover:w-3/4 transition-all duration-300"
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Scroll Progress Bar - Shows only when scrolled */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-200 transition-all duration-300"
            style={{
              width: `${scrollProgress}%`
            }}
          ></div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;