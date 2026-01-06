import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer" className="w-full bg-black text-white px-4 sm:px-6 lg:px-12 pt-16">
      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

          {/* BRAND */}
          <div>
            <h2 className="text-xl font-semibold tracking-widest mb-3">
              WANDERLUX
            </h2>
            <div className="w-24 h-[1px] bg-white mb-4"></div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Creating extraordinary travel experiences for discerning travelers
              since 2008.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Tour Packages</li>
              <li className="hover:text-white cursor-pointer">Destinations</li>
              <li className="hover:text-white cursor-pointer">Services</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-lg font-medium mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">
                Travel Guidelines
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-lg font-medium mb-4">Stay Connected</h3>
            <p className="text-sm text-gray-400 mb-5 max-w-xs">
              Subscribe to our newsletter for exclusive offers and travel
              inspiration.
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-gray-500 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="w-10 h-10 border border-gray-500 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
                <FaInstagram />
              </div>
              <div className="w-10 h-10 border border-gray-500 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
                <FaTwitter />
              </div>
              <div className="w-10 h-10 border border-gray-500 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
                <FaYoutube />
              </div>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700"></div>

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 text-sm text-gray-400 gap-4">
          <p>© 2025 WanderLux. All rights reserved.</p>
          <p>Crafted with excellence for premium travel experiences.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
