import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 my-8 md:my-12 lg:my-16">
      <div className="relative rounded-3xl shadow-2xl overflow-hidden">
        {/* Background with Gradient and Decorative Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#64FFDA]/50 to-[#F43098]"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center px-8 py-12 lg:py-16 gap-12">
          {/* Newsletter Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-white text-3xl md:text-4xl font-black mb-4 tracking-tight uppercase">
              Stay in the Loop
            </h2>
            <p className="text-red-50 text-lg mb-8 max-w-md opacity-90">
              Get exclusive early access to indie games and developer news
              delivered straight to your inbox.
            </p>

            <div className="flex w-full max-w-md bg-white p-1.5 rounded-2xl shadow-lg">
              <input
                type="email"
                placeholder="Enter your E-mail"
                className="flex-grow px-5 py-3 outline-none text-gray-800 bg-transparent text-sm md:text-base w-full"
              />
              <button className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-black hover:shadow-xl transition-all duration-300 font-bold flex items-center gap-2 group">
                <span>Subscribe</span>
                <FaPaperPlane className="text-xs group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Contact Info - Now more elegant */}
          <div className="hidden xl:flex flex-col items-center text-center px-10 border-x border-white/20">
            <h3 className="text-white/70 text-sm font-bold tracking-widest uppercase mb-4">
              Contact Now
            </h3>
            <p className="text-white text-xl font-bold mb-1">
              +880 123 456 789
            </p>
            <p className="text-red-100 text-sm">support@gamehub.com</p>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col items-center lg:items-end space-y-6">
            <h3 className="text-white text-sm font-bold tracking-widest uppercase">
              Follow the Journey
            </h3>
            <div className="flex space-x-4">
              {[
                { icon: FaFacebookF, color: "hover:bg-[#1877F2]" },
                { icon: FaInstagram, color: "hover:bg-[#E4405F]" },
                { icon: FaWhatsapp, color: "hover:bg-[#25D366]" },
                { icon: FaTwitter, color: "hover:bg-[#1DA1F2]" },
                { icon: FaLinkedinIn, color: "hover:bg-[#0A66C2]" },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-11 h-11 flex items-center justify-center border border-white/30 rounded-xl text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-transparent ${social.color} hover:shadow-lg`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
