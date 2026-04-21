import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a1c1e] text-gray-400 font-sans">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <h3 className="text-white text-sm font-bold tracking-widest uppercase border-l-4 border-[#64FFDA] pl-3">
              About Us
            </h3>
            <p className="text-sm leading-relaxed">
              An engaging online library for discovering and supporting indie
              game developers. We bridge the gap between creators and players
              through innovation and community.
            </p>
            <div className="flex space-x-4">
              {[
                FaFacebookF,
                FaInstagram,
                FaWhatsapp,
                FaTwitter,
                FaLinkedinIn,
              ].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#64FFDA] text-black hover:bg-secondary transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white text-sm font-bold tracking-widest uppercase border-l-4 border-[#64FFDA] pl-3">
              Useful Links
            </h3>
            <ul className="space-y-3 text-sm">
              {["Home", "About Us", "Services", "News"].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-[#64FFDA] transition-colors duration-200 flex items-center group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-all mr-2 text-[#64FFDA]">
                      →
                    </span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-white text-sm font-bold tracking-widest uppercase border-l-4 border-[#64FFDA] pl-3">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <FaHome className="text-[#64FFDA] mt-1" />
                <span>Savar-DOHS, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#64FFDA]" />
                <span>+880 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#64FFDA]" />
                <span className="truncate">support@gamehub.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-white text-sm font-bold tracking-widest uppercase border-l-4 border-[#64FFDA] pl-3">
              Newsletter
            </h3>
            <p className="text-sm">
              Subscribe to get the latest gaming news and updates.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:border-[#64FFDA] text-white text-sm transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#64FFDA] hover:text-white transition-colors">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#111214] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs tracking-wide">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">GAMEHUB</span>. All rights
            reserved. Designed by{" "}
            <span className="text-[#64FFDA] font-semibold cursor-pointer">
              MD. GOLAM RABBI
            </span>
          </p>

          <div className="flex space-x-6 text-xs font-medium uppercase tracking-widest">
            {["Faqs", "Privacy", "Policy", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
