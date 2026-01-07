import React from 'react';

import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter, FaLinkedinIn, FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-300">
      <div className="bg-[#202224]">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-5 md:pt-8 lg:pt-11">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">ABOUT US</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              An engaging online library for discovering and supporting game
              developers. Users can browse indie games, see detailed
              information, and install if you like them.
            </p>
            <div className="flex space-x-3">
              {[
                FaFacebookF,
                FaInstagram,
                FaWhatsapp,
                FaTwitter,
                FaLinkedinIn,
              ].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-red-500 transition">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">CONTACT US</h3>
            <p className="flex items-start gap-2 mb-2">
              <FaHome className="mt-1 text-primary" /> Malek Spinning,
              Shafipur-East, Kaliakoir, Gazipur
            </p>
            <p className="flex items-center gap-2 mb-1">
              <FaPhoneAlt className="text-primary" /> (+12) 999 333333
            </p>
            <p className="flex items-center gap-2 mb-3">
              <FaPhoneAlt className="text-primary" /> (+98) 222 444444
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-primary" /> g.rabbi2005.333@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-primary" /> g.rabbi2005.444@gmail.com
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">USEFUL LINKS</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "News", "Portfolio"].map(
                (link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-orange-500 transition flex items-center gap-2"
                    >
                      <span className="text-primary">›</span> {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">RECENT POST</h3>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gray-800 text-center px-3 py-2 rounded">
                <p className="text-white text-sm font-bold">30</p>
                <p className="text-primary text-xs font-semibold">JULY 2023</p>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  WHERE WE’RE STANDING RIGHT NOW
                </p>
                <p className="text-xs text-gray-400">By Admin 👤159</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-gray-800 text-center px-3 py-2 rounded">
                <p className="text-white text-sm font-bold">22</p>
                <p className="text-primary text-xs font-semibold">
                  OCTOBER 2023
                </p>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  AND MAYBE KNOWING ISN’T THE POINT
                </p>
                <p className="text-xs text-gray-400">By Admin 👤357</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#111111] border-t border-gray-700 py-4 text-sm text-gray-400 flex flex-col-reverse md:flex-row items-center justify-center gap-5 lg:gap-22">
        <h1 className="text-center">
          © Copyright 2025. All rights reserved. Designed by{" "}
          <a className="text-primary font-semibold">MD. GOLAM RABBI</a>
        </h1>

        <div className="space-x-4">
          <a href="#" className="hover:text-primary">
            FAQS
          </a>
          <a href="#" className="hover:text-primary">
            Privacy
          </a>
          <a href="#" className="hover:text-primary">
            Policy
          </a>
          <a href="#" className="hover:text-primary">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}


export default Footer;