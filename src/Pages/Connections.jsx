import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Connections = () => {
  return (
    <div className="text-gray-200 py-6 md:py-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row gap-10">
      <title>Connections - Gamehub</title>
      <div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#64FFDA] mb-3">
            Connect With Us
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Reach out, stay in touch, and follow our journey in the world of
            indie gaming.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse gap-10 justify-around"
        >
          <div>
            <h2 className="text-3xl font-semibold text-[#64FFDA] mb-6">
              Social Media
            </h2>
            <div className="flex space-x-6 text-2xl">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="hover:text-[#64FFDA] transition-colors"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Icon />
                  </motion.a>
                ),
              )}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#64FFDA] mb-6">
              Contact Info
            </h2>
            <p className="flex items-center gap-3 mb-4">
              <FaEnvelope className="text-[#64FFDA]" /> info@gamehub.com
            </p>
            <p className="flex items-center gap-3 mb-4">
              <FaPhoneAlt className="text-[#64FFDA]" /> +880 123 456 789
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#64FFDA]" /> +880 987 654 321
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full flex-1"
      >
        <h2 className="text-3xl font-semibold text-[#64FFDA] mb-6 text-center">
          Send Us a Message
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input w-full bg-gray-800 text-gray-200 border-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input w-full bg-gray-800 text-gray-200 border-none"
          />
          <textarea
            placeholder="Your Message"
            className="textarea w-full bg-gray-800 text-gray-200 border-none"
            rows={5}
          ></textarea>
          <button className="btn bg-[#64FFDA] hover:bg-secondary hover:text-[#64FFDA] text-black font-semibold mt-2">
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Connections;
