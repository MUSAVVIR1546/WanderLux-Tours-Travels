import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaClock, FaUser } from "react-icons/fa";
import "./package.css"

function OurPackages() {
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});

  // Intersection Observer for scroll animation - FIXED ID
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const packagesSection = document.getElementById('packages'); // Changed to 'packages'
    if (packagesSection) observer.observe(packagesSection);

    return () => {
      if (packagesSection) observer.unobserve(packagesSection);
    };
  }, []);

  // Handle individual image loading
  const handleImageLoad = (index) => {
    setImagesLoaded(prev => ({ ...prev, [index]: true }));
  };

  const packages = [
    {
      title: "Alpine Adventures",
      src: "/swiss-alps.png",
      price: "$2,499",
      location: "Switzerland",
      duration: "7 Days",
      group: "Small Group",
      description: "Experience breathtaking mountain landscapes and thrilling alpine adventures."
    },
    {
      title: "Tropical Paradise",
      src: "/maldives.png",
      price: "$1,999",
      location: "Maldives",
      duration: "5 Days",
      group: "Couples",
      description: "Discover crystal clear waters and pristine beaches in paradise."
    },
    {
      title: "Urban Explorer",
      src: "/new-york.png",
      price: "$1,899",
      location: "New York",
      duration: "6 Days",
      group: "Group Tour",
      description: "Experience the hustle and energy of the city that never sleeps."
    },
    {
      title: "Desert Odyssey",
      src: "/morocco.png",
      price: "$2,199",
      location: "Morocco",
      duration: "8 Days",
      group: "Adventure",
      description: "Explore ancient deserts and vibrant cultures in North Africa."
    },
    {
      title: "Cultural Heritage",
      src: "/rome.png",
      price: "$2,299",
      location: "Rome",
      duration: "7 Days",
      group: "Cultural",
      description: "Walk through history in the eternal city's ancient streets."
    },
    {
      title: "Luxury Retreat",
      src: "/bali.png",
      price: "$2,799",
      location: "Bali",
      duration: "10 Days",
      group: "Luxury",
      description: "Indulge in premium accommodations and exclusive experiences."
    }
  ];

  return (
    <section id="packages" className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* TOP CONTENT — With animations */}
        <div className="mb-12 text-center">
          <div 
            className="inline-block"
            style={{
              animation: isVisible ? 'slideUp 0.8s ease-out forwards' : 'none',
              opacity: 0
            }}
          >
            <p className="text-xl uppercase tracking-widest text-gray-700">
              Our Packages
            </p>
            <div 
              className="w-10 h-[2px] bg-black mt-1 mx-auto"
              style={{
                animation: isVisible ? 'slideUp 0.8s ease-out 0.2s forwards' : 'none',
                opacity: 0,
                transform: 'translateY(10px)'
              }}
            ></div>
          </div>

          <h2 
            className="text-3xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-4 text-black mt-4"
            style={{
              animation: isVisible ? 'slideUp 0.8s ease-out 0.4s forwards' : 'none',
              opacity: 0
            }}
          >
            Curated Travel Experiences
          </h2>

          <p 
            className="text-[17px] text-gray-600 max-w-xl mx-auto text-center"
            style={{
              animation: isVisible ? 'slideUp 0.8s ease-out 0.6s forwards' : 'none',
              opacity: 0
            }}
          >
            Choose from our carefully crafted packages designed to deliver extraordinary experiences.
          </p>
        </div>

        {/* PACKAGES GRID with staggered animations - FIXED */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className="bg-white shadow-lg text-black rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              style={{
                animation: isVisible ? `slideUp 0.6s ease-out ${0.2 + (index * 0.1)}s forwards` : 'none',
                opacity: isVisible ? 1 : 0,
                animationFillMode: 'forwards'
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden group">
                {/* Image Loading Effect - FIXED */}
                {!imagesLoaded[index] && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-t-xl"></div>
                )}
                
                <img
                  src={pkg.src}
                  alt={pkg.title}
                  className={`w-full h-56 object-cover rounded-t-xl transition-all duration-700 group-hover:scale-110 ${
                    imagesLoaded[index] ? 'grayscale-0' : 'grayscale'
                  }`}
                  style={{
                    animation: imagesLoaded[index] ? 'imageGrayscaleToColor 1s ease-out forwards' : 'none'
                  }}
                  onLoad={() => handleImageLoad(index)}
                />
                
                {/* Price Tag with pop animation - FIXED */}
                <span 
                  className="absolute top-3 right-3 bg-white text-sm font-semibold text-black px-4 py-2 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                  style={{
                    animation: isVisible ? `priceTagPop 0.5s ease-out ${0.3 + (index * 0.1)}s forwards` : 'none',
                    opacity: isVisible ? 1 : 0
                  }}
                >
                  {pkg.price}
                </span>
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Card Content */}
              <div className="p-5 relative">
                {/* Card title with underline effect */}
                <h3 className="text-xl font-bold mb-3 text-gray-800 relative inline-block">
                  {pkg.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500"></span>
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-5 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                  {pkg.description}
                </p>

                {/* Details with animated icons - SIMPLIFIED */}
                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-3 hover:text-red-500 transition-colors duration-300">
                    <FaMapMarkerAlt className="text-gray-400" />
                    <span>{pkg.location}</span>
                  </div>
                  <div className="flex items-center gap-3 hover:text-blue-500 transition-colors duration-300">
                    <FaClock className="text-gray-400" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 hover:text-green-500 transition-colors duration-300">
                    <FaUser className="text-gray-400" />
                    <span>{pkg.group}</span>
                  </div>
                </div>

                {/* Book Now Button - SIMPLIFIED */}
                <button 
                  className="w-full bg-black text-white py-3 text-sm font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 relative overflow-hidden"
                  style={{
                    animation: isVisible ? `slideUp 0.5s ease-out ${0.5 + (index * 0.1)}s forwards` : 'none',
                    opacity: isVisible ? 1 : 0
                  }}
                >
                  <span className="relative z-10">
                    Book Now
                  </span>
                </button>
              </div>

              {/* Card corner accent */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black/20 rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black/20 rounded-tr-xl"></div>
            </div>
          ))}
        </div>

        {/* View All Button with animation */}
        <div 
          className="text-center mt-12"
          style={{
            animation: isVisible ? 'slideUp 0.8s ease-out 1.2s forwards' : 'none',
            opacity: isVisible ? 1 : 0
          }}
        >
          <button className="px-8 py-3 border-2 border-black text-black font-medium rounded-lg hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
            View All Packages
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurPackages;