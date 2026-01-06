import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./contact.css"

function ContactUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

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
        threshold: 0.1
      }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) observer.observe(contactSection);

    return () => {
      if (contactSection) observer.unobserve(contactSection);
    };
  }, []);

  return (
    <section id="contact" className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* TOP CONTENT — With animations */}
        <div className="mb-12 text-center">
          <div 
            style={{
              animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none',
              opacity: 0
            }}
          >
            <p className="text-xl uppercase tracking-widest text-gray-700">
              contact us
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
            className="text-3xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-4 mt-4"
            style={{
              animation: isVisible ? 'fadeInUp 0.8s ease-out 0.4s forwards' : 'none',
              opacity: 0
            }}
          >
            Plan Your Journey
          </h2>

          <p 
            className="text-[17px] max-w-xl mx-auto text-center text-gray-700"
            style={{
              animation: isVisible ? 'fadeInUp 0.8s ease-out 0.6s forwards' : 'none',
              opacity: 0
            }}
          >
            Share your travel dreams with us and let's create an unforgettable
            experience together.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-10">

          {/* LEFT — CONTACT INFO with animations */}
          <div 
            style={{
              animation: isVisible ? 'slideInLeft 0.8s ease-out 0.7s forwards' : 'none',
              opacity: 0
            }}
          >
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-600 mb-6">
              Our travel experts are ready to help you plan your perfect
              adventure. Reach out to us through any of the following channels.
            </p>

            {/* CONTACT ITEMS with hover animations */}
            <div className="space-y-5 mb-8">
              <div 
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:translate-x-2 group"
                style={{
                  animation: isVisible ? 'fadeInUp 0.6s ease-out 0.8s forwards' : 'none',
                  opacity: 0
                }}
              >
                <div className="relative">
                  <FaPhoneAlt className="text-lg mt-1 text-gray-600 group-hover:text-black transition-colors duration-300" />
                  <div className="absolute -inset-2 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </div>
                <div>
                  <p className="font-medium group-hover:text-black transition-colors duration-300">Phone</p>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div 
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:translate-x-2 group"
                style={{
                  animation: isVisible ? 'fadeInUp 0.6s ease-out 0.9s forwards' : 'none',
                  opacity: 0
                }}
              >
                <div className="relative">
                  <FaEnvelope className="text-lg mt-1 text-gray-600 group-hover:text-black transition-colors duration-300" />
                  <div className="absolute -inset-2 bg-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </div>
                <div>
                  <p className="font-medium group-hover:text-black transition-colors duration-300">Email</p>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">info@wanderlux.com</p>
                </div>
              </div>

              <div 
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:translate-x-2 group"
                style={{
                  animation: isVisible ? 'fadeInUp 0.6s ease-out 1.0s forwards' : 'none',
                  opacity: 0
                }}
              >
                <div className="relative">
                  <FaMapMarkerAlt className="text-lg mt-1 text-gray-600 group-hover:text-black transition-colors duration-300" />
                  <div className="absolute -inset-2 bg-red-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </div>
                <div>
                  <p className="font-medium group-hover:text-black transition-colors duration-300">Address</p>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    123 Travel Street, NY 10001
                  </p>
                </div>
              </div>
            </div>

            {/* OFFICE HOURS with animations */}
            <div 
              style={{
                animation: isVisible ? 'fadeInUp 0.6s ease-out 1.1s forwards' : 'none',
                opacity: 0
              }}
            >
              <h4 className="font-semibold mb-3">Office Hours</h4>

              <div className="flex justify-between text-sm text-gray-600 mb-2 py-2 border-b border-gray-100 hover:text-black transition-colors duration-300">
                <span>Monday – Friday</span>
                <span>9:00 AM – 6:00 PM</span>
              </div>

              <div className="flex justify-between text-sm text-gray-600 mb-2 py-2 border-b border-gray-100 hover:text-black transition-colors duration-300">
                <span>Saturday</span>
                <span>10:00 AM – 4:00 PM</span>
              </div>

              <div className="flex justify-between text-sm text-gray-600 py-2 hover:text-black transition-colors duration-300">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM with animations */}
          <div 
            className="border border-gray-200 p-6 rounded-xl shadow-sm"
            style={{
              animation: isVisible ? 'slideInRight 0.8s ease-out 0.7s forwards' : 'none',
              opacity: 0
            }}
          >
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { label: "Full Name *", type: "text", placeholder: "Your name", delay: "0.8s" },
                { label: "Email Address *", type: "email", placeholder: "Your email", delay: "0.9s" },
                { label: "Phone Number", type: "text", placeholder: "+1 234 567 890", delay: "1.0s" },
                { label: "Preferred Destination", type: "select", delay: "1.1s" },
                { label: "Travel Date", type: "date", delay: "1.2s" },
                { label: "Number of Guests", type: "select", delay: "1.3s" }
              ].map((field, index) => (
                <div 
                  key={index}
                  style={{
                    animation: isVisible ? `fadeInUp 0.6s ease-out ${field.delay} forwards` : 'none',
                    opacity: 0
                  }}
                >
                  <label className="text-sm font-medium">{field.label}</label>
                  {field.type === "select" ? (
                    <select 
                      className="w-full border px-3 py-2 mt-1 outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 hover:border-gray-400"
                      onFocus={() => setFocusedField(index)}
                      onBlur={() => setFocusedField(null)}
                    >
                      {field.label === "Preferred Destination" ? (
                        <>
                          <option>Select a destination</option>
                          <option>Swiss Alps</option>
                          <option>Maldives</option>
                          <option>Bali</option>
                          <option>Morocco</option>
                          <option>New-York</option>
                          <option>Rome</option>
                        </>
                      ) : (
                        <>
                          <option>Select</option>
                          <option>1–2</option>
                          <option>3–5</option>
                          <option>6+</option>
                        </>
                      )}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      className="w-full border px-3 py-2 mt-1 outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 hover:border-gray-400"
                      placeholder={field.placeholder}
                      onFocus={() => setFocusedField(index)}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        transform: focusedField === index ? 'translateY(-2px)' : 'translateY(0)',
                        boxShadow: focusedField === index ? '0 5px 15px rgba(0, 0, 0, 0.05)' : 'none'
                      }}
                    />
                  )}
                  <div 
                    className="h-0.5 bg-black mt-1 transition-all duration-300"
                    style={{
                      width: focusedField === index ? '100%' : '0%'
                    }}
                  ></div>
                </div>
              ))}

              <div 
                className="sm:col-span-2"
                style={{
                  animation: isVisible ? 'fadeInUp 0.6s ease-out 1.4s forwards' : 'none',
                  opacity: 0
                }}
              >
                <label className="text-sm font-medium">Additional Information</label>
                <textarea
                  rows="4"
                  className="w-full border px-3 py-2 mt-1 outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 hover:border-gray-400"
                  placeholder="Tell us more about your travel plans..."
                  onFocus={() => setFocusedField('textarea')}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    transform: focusedField === 'textarea' ? 'translateY(-2px)' : 'translateY(0)',
                    boxShadow: focusedField === 'textarea' ? '0 5px 15px rgba(0, 0, 0, 0.05)' : 'none'
                  }}
                ></textarea>
                <div 
                  className="h-0.5 bg-black mt-1 transition-all duration-300"
                  style={{
                    width: focusedField === 'textarea' ? '100%' : '0%'
                  }}
                ></div>
              </div>

              <div 
                className="sm:col-span-2"
                style={{
                  animation: isVisible ? 'fadeInUp 0.6s ease-out 1.5s forwards' : 'none',
                  opacity: 0
                }}
              >
                <button 
                  className="w-full bg-black text-white py-3 text-sm hover:bg-gray-800 transition-all duration-300 group relative overflow-hidden cursor-pointer"
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector('.button-shine').style.left = '100%';
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Submit Inquiry
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                  <div className="button-shine absolute top-0 left-[-100%] w-20 h-full bg-white/30 transform -skew-x-12 transition-all duration-700"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;