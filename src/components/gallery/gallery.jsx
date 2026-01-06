import React, { useEffect, useState } from "react";
import "./gallery.css"

function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

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

    const gallerySection = document.getElementById('gallery');
    if (gallerySection) observer.observe(gallerySection);

    return () => {
      if (gallerySection) observer.unobserve(gallerySection);
    };
  }, []);

  const galleryItems = [
    { 
      title: "Maldives", 
      src: "/maldives.png",
      description: "Crystal clear paradise",
      category: "Beach"
    },
    { 
      title: "New York", 
      src: "/new-york.png",
      description: "City of dreams",
      category: "Urban"
    },
    { 
      title: "Morocco", 
      src: "/morocco.png",
      description: "Desert adventure",
      category: "Desert"
    },
    { 
      title: "Rome", 
      src: "/rome.png",
      description: "Ancient history",
      category: "Historical"
    },
    { 
      title: "Swiss Alps", 
      src: "/swiss-alps.png",
      description: "Mountain majesty",
      category: "Mountains"
    },
    { 
      title: "Bali", 
      src: "/bali.png",
      description: "Tropical retreat",
      category: "Island"
    },
    { 
      title: "Adventure", 
      src: "/broken-plane.png",
      description: "Off the beaten path",
      category: "Adventure"
    },
    { 
      title: "Sunset", 
      src: "/hero.png",
      description: "Golden hour",
      category: "Sunset"
    }
  ];

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section id="gallery" className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* TOP CONTENT — With elegant animations */}
        <div className="mb-16 text-center">
          <div 
            className="inline-block overflow-hidden"
            style={{
              animation: isVisible ? 'fadeInGallery 0.8s ease-out forwards' : 'none',
              opacity: 0
            }}
          >
            <p className="text-xl uppercase tracking-widest text-gray-700">
              Gallery
            </p>
            <div 
              className="w-20 h-[2px] bg-black mt-1 mx-auto"
              style={{
                animation: isVisible ? 'lineExpand 0.8s ease-out 0.2s forwards' : 'none',
                width: '0'
              }}
            ></div>
          </div>

          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 mt-8"
            style={{
              animation: isVisible ? 'fadeInGallery 0.8s ease-out 0.4s forwards' : 'none',
              opacity: 0
            }}
          >
            <span className="block">Moments Worth</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
              Capturing
            </span>
          </h2>

          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto text-center leading-relaxed"
            style={{
              animation: isVisible ? 'fadeInGallery 0.8s ease-out 0.6s forwards' : 'none',
              opacity: 0
            }}
          >
            A glimpse into the extraordinary experiences that await you.
            <span className="block mt-1 font-medium text-gray-800">Each picture tells a story</span>
          </p>
        </div>

        {/* GALLERY GRID — With sophisticated animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item relative h-[260px] sm:h-[280px] lg:h-[320px] overflow-hidden rounded-2xl group"
              style={{
                animation: isVisible ? `slideInStagger 0.8s ease-out ${0.7 + (index * 0.1)}s forwards` : 'none',
                opacity: 0,
                animationFillMode: 'forwards'
              }}
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              {/* Image Loading Placeholder */}
              {!loadedImages[index] && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer-effect"></div>
                </div>
              )}

              {/* IMAGE with multiple effects */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="gallery-image w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  style={{
                    filter: hoveredImage === index ? 'grayscale(0%) brightness(1.1)' : 'grayscale(100%) brightness(0.9)',
                    animation: isVisible && loadedImages[index] ? `imageReveal 1.2s ease-out ${0.8 + (index * 0.1)}s forwards` : 'none',
                    animationFillMode: 'forwards'
                  }}
                  onLoad={() => handleImageLoad(index)}
                />
                
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    animation: isVisible ? 'overlayFade 1s ease-out forwards' : 'none',
                    animationDelay: `${0.9 + (index * 0.1)}s`
                  }}
                ></div>
                
                {/* Shimmer Effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                  style={{
                    backgroundSize: '200% 100%',
                    animation: hoveredImage === index ? 'galleryShimmer 2s linear infinite' : 'none'
                  }}
                ></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                {/* Title with reveal animation */}
                <h3 
                  className="text-xl font-bold text-white mb-2 transform transition-all duration-500 group-hover:-translate-y-2"
                  style={{
                    animation: isVisible ? `titleReveal 0.8s ease-out ${1 + (index * 0.1)}s forwards` : 'none',
                    clipPath: isVisible ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                  }}
                >
                  {item.title}
                </h3>
                
                {/* Description (appears on hover) */}
                <p 
                  className="text-sm text-gray-300 mb-3 transform transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                  style={{
                    transitionDelay: '0.1s'
                  }}
                >
                  {item.description}
                </p>
                
                {/* Category Badge */}
                <div className="inline-block">
                  <span className="text-xs font-medium text-white/80 bg-white/20 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                    style={{
                      transitionDelay: '0.2s'
                    }}
                  >
                    {item.category}
                  </span>
                </div>
                
                {/* Decorative Line */}
                <div className="w-8 h-[1px] bg-white mt-3 transform transition-all duration-500 group-hover:w-16 opacity-0 group-hover:opacity-100"
                  style={{
                    transitionDelay: '0.15s'
                  }}
                ></div>
              </div>

              {/* Photo Flash Effect (appears on hover) */}
              <div 
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                style={{
                  animation: hoveredImage === index ? 'photoFlash 0.3s ease-out' : 'none'
                }}
              ></div>

              {/* Border Effects */}
              <div 
                className="absolute inset-0 border-2 border-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  borderColor: hoveredImage === index ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                  animation: hoveredImage === index ? 'borderGlow 2s infinite' : 'none'
                }}
              ></div>

              {/* Corner Accents */}
              <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/50 rounded-tl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/50 rounded-tr opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/50 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/50 rounded-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* View Button (appears on hover) */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100">
                <button className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300">
                  View →
                </button>
              </div>

              {/* Image Counter */}
              <div className="absolute top-4 left-4 text-xs font-bold text-white/80 bg-black/30 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Navigation */}
        <div 
          className="flex flex-col sm:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-200"
          style={{
            animation: isVisible ? 'fadeInGallery 0.8s ease-out 1.6s forwards' : 'none',
            opacity: 0
          }}
        >
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-6 sm:mb-0">
            {['All', 'Beach', 'Urban', 'Desert', 'Mountains', 'Historical'].map((cat, idx) => (
              <button
                key={idx}
                className="px-4 py-2 text-sm font-medium rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View More Button */}
          <button className="group relative px-10 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-500 overflow-hidden cursor-pointer">
            <span className="relative z-10">View Full Gallery</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-20 h-full bg-white/20 transform -skew-x-12 -translate-x-32 group-hover:translate-x-[400%] transition-transform duration-1000"></div>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 top-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
}

export default Gallery;