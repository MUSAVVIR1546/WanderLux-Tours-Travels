import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaSmile, FaAward, FaStar } from "react-icons/fa";
import "./about.css";

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [counterValues, setCounterValues] = useState({
    destinations: 0,
    travelers: 0,
    experience: 0,
    satisfaction: 0
  });

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            startCounterAnimation();
          }
        });
      },
      { threshold: 0.2 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  // Counter animation function
  const startCounterAnimation = () => {
    const finalValues = {
      destinations: 50,
      travelers: 10000,
      experience: 15,
      satisfaction: 98
    };

    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    Object.keys(finalValues).forEach((key) => {
      let current = 0;
      const target = finalValues[key];
      const stepValue = target / steps;

      const interval = setInterval(() => {
        current += stepValue;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        
        setCounterValues(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, increment);
    });
  };

  return (
    <section id="about" className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Small heading with underline animation */}
          <div className="mb-4 overflow-hidden">
            <p 
              className="text-xl uppercase tracking-widest text-gray-700"
              style={{
                animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none',
                opacity: 0
              }}
            >
              About Us
            </p>
            <div 
              className="w-15 h-[2px] bg-black mt-1"
              style={{
                animation: isVisible ? 'underlineExpand 0.8s ease-out 0.3s forwards' : 'none',
                width: '0'
              }}
            ></div>
          </div>

          {/* Main heading with staggered text animation */}
          <h2 
            className="text-3xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-6 text-black overflow-hidden"
          >
            <span 
              className="inline-block"
              style={{
                animation: isVisible ? 'fadeInUp 0.8s ease-out 0.4s forwards' : 'none',
                opacity: 0
              }}
            >
              Crafting Unforgettable
            </span>
            <br />
            <span 
              className="inline-block"
              style={{
                animation: isVisible ? 'fadeInUp 0.8s ease-out 0.6s forwards' : 'none',
                opacity: 0
              }}
            >
              Travel Experiences
            </span>
          </h2>

          {/* Description paragraphs with staggered animation */}
          <div className="space-y-4 mb-8">
            <p 
              className="text-[17px] text-gray-800 leading-relaxed max-w-xl"
              style={{
                animation: isVisible ? 'fadeInUp 0.8s ease-out 0.8s forwards' : 'none',
                opacity: 0
              }}
            >
              For over 15 years, WanderLux has been curating extraordinary travel
              experiences that go beyond ordinary tourism. We believe in creating
              journeys that inspire, transform, and leave lasting impressions.
            </p>
            
            <p 
              className="text-[17px] text-gray-600 leading-relaxed max-w-xl"
              style={{
                animation: isVisible ? 'fadeInUp 0.8s ease-out 1s forwards' : 'none',
                opacity: 0
              }}
            >
              Our team of travel experts meticulously designs each package to
              ensure you experience the perfect blend of adventure, luxury, and
              cultural immersion. From exotic destinations to hidden gems, we
              turn your travel dreams into reality.
            </p>
          </div>

          {/* Stats with counter animation - FIXED HOVER ISSUE */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { 
                icon: FaMapMarkerAlt, 
                value: counterValues.destinations, 
                label: "Destinations",
                delay: "1.2s",
                color: "text-blue-500",
                bgColor: "hover:bg-blue-50"
              },
              { 
                icon: FaSmile, 
                value: counterValues.travelers, 
                label: "Happy Travelers",
                delay: "1.4s",
                color: "text-green-500",
                bgColor: "hover:bg-green-50"
              },
              { 
                icon: FaAward, 
                value: counterValues.experience, 
                label: "Years Experience",
                delay: "1.6s",
                color: "text-purple-500",
                bgColor: "hover:bg-purple-50"
              },
              { 
                icon: FaStar, 
                value: counterValues.satisfaction, 
                label: "Satisfaction Rate",
                delay: "1.8s",
                color: "text-yellow-500",
                bgColor: "hover:bg-yellow-50"
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`border p-4 text-center text-black rounded-lg transition-all duration-300 relative overflow-hidden group ${stat.bgColor}`}
                style={{
                  animation: isVisible ? `scaleIn 0.6s ease-out ${stat.delay} forwards` : 'none',
                  opacity: 0,
                  borderColor: '#e5e7eb'
                }}
              >
                {/* Background gradient on hover - FIXED */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 
                  ${stat.color.replace('text-', 'bg-')}`}></div>
                
                {/* Icon with bounce animation */}
                <div 
                  className="mb-2 relative z-10"
                  style={{
                    animation: isVisible ? `fadeInUp 0.5s ease-out ${stat.delay} forwards` : 'none',
                    opacity: 0
                  }}
                >
                  <stat.icon className={`text-2xl mx-auto ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                
                {/* Counter number */}
                <h3 
                  className={`text-2xl font-semibold relative z-10 ${stat.color}`}
                  style={{
                    animation: isVisible ? `counterIncrement 0.5s ease-out ${stat.delay} forwards` : 'none',
                    opacity: 0
                  }}
                >
                  {stat.value}{stat.label === "Satisfaction Rate" ? "%" : stat.label === "Happy Travelers" ? "+" : "+"}
                </h3>
                
                {/* Label */}
                <p 
                  className="text-[15px] text-gray-700 mt-1 relative z-10 group-hover:text-gray-900 transition-colors duration-300"
                  style={{
                    animation: isVisible ? `fadeInUp 0.5s ease-out calc(${stat.delay} + 0.1s) forwards` : 'none',
                    opacity: 0
                  }}
                >
                  {stat.label}
                </p>
                
                {/* Hover lift effect */}
                <div className="absolute inset-0 group-hover:-translate-y-1 transition-transform duration-300 rounded-lg border border-transparent group-hover:border-gray-200 group-hover:shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE with floating animation */}
        <div 
          className="w-full h-[300px] sm:h-[400px] lg:h-[450px] relative"
          style={{
            animation: isVisible ? 'slideInRight 1s ease-out 0.5s forwards' : 'none',
            opacity: 0
          }}
        >
          <div className="relative w-full h-full">
            <img
              src="/broken-plane.png"
              alt="Broken airplane"
              className="w-full h-full object-cover rounded-xl hover:scale-105 duration-700 cursor-pointer transition-all shadow-lg hover:shadow-2xl"
              style={{
                animation: 'floatImage 3s ease-in-out infinite'
              }}
            />
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;