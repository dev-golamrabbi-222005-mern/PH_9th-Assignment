import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Connections = () => {
  return (
    <div className="bg-[#0A0F1C] text-gray-200 py-20 px-6 md:px-16 lg:px-28">
      <title>Connections - Gamehub</title>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-3">
          Connect With Us
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Reach out, stay in touch, and follow our journey in the world of indie
          gaming.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center flex-col md:flex-row gap-11 md:gap-22 lg:gap-55 mb-16"
      >
        <div>
          <h2 className="text-3xl font-semibold text-cyan-300 mb-6">
            Social Media
          </h2>
          <div className="flex space-x-6 text-2xl">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
              (Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon />
                </motion.a>
              )
            )}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-cyan-300 mb-6">
            Contact Info
          </h2>
          <p className="flex items-center gap-3 mb-4">
            <FaEnvelope className="text-cyan-400" /> info@gamehub.com
          </p>
          <p className="flex items-center gap-3 mb-4">
            <FaPhoneAlt className="text-cyan-400" /> +880 123 456 789
          </p>
          <p className="flex items-center gap-3">
            <FaPhoneAlt className="text-cyan-400" /> +880 987 654 321
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-semibold text-cyan-300 mb-6 text-center">
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
          <button className="btn bg-cyan-500 hover:bg-cyan-400 text-black font-semibold mt-2">
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Connections;
