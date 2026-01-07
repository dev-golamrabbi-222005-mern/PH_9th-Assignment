import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter, FaLinkedinIn, FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className="bg-primary rounded-xl mx-auto w-[88%] flex flex-col md:flex-row justify-between items-center px-6 py-8 space-y-6 md:space-y-0 md:space-x-10 mb-5 md:mb-11 lg:mb-22">
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-white text-2xl font-bold mb-3">SUBSCRIBE NOW</h2>
        <p className="text-white mb-4">Stay connected with us <br /> to get updates via email.</p>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your E-mail"
            className="input-text px-5 py-4 rounded-l-full outline-none text-black w-44 md:w-55 lg:w-66 bg-white"
          />
          <button className="bg-black text-white px-6 py-2 rounded-r-full hover:bg-gray-800 transition cursor-pointer">
            Submit
          </button>
        </div>
      </div>

      {/* Contact Now */}
      <div className="lg:text-center lg:block hidden md:hidden">
        <h2 className="text-white text-2xl font-bold mb-2">CONTACT NOW</h2>
        <p>
          Call Us :{" "}
          <span className="text-white font-medium">+8801558984151</span>
        </p>
        <p>
          Email Us :{" "}
          <span className="text-white font-medium">
            g.rabbi2005.555@gmail.com
          </span>
        </p>
      </div>

      {/* Follow Us */}
      <div className="text-center md:text-left">
        <h2 className="text-white text-2xl font-bold mb-3">FOLLOW US</h2>
        <div className="flex justify-center md:justify-start space-x-3">
          {[FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter, FaLinkedinIn].map(
            (Icon, i) => (
              <a
                key={i}
                href="#"
                className="border border-white p-2 rounded-full hover:bg-white hover:text-black transition"
              >
                <Icon/>
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
