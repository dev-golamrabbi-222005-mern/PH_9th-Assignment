import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Connections = () => {
  return (
    <div className="py-6 md:py-10 max-w-7xl mx-auto px-4 md:px-6">
      <title>Connections - Gamehub</title>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
            GET IN <span className="text-[#64FFDA]">TOUCH</span>
          </h1>
          <div className="h-1.5 w-24 bg-[#64FFDA] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you're a developer, a player, or just a fan of indie gaming,
            our doors are always open for a chat.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Side: Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-[#112240] p-8 rounded-3xl border border-white/5 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#64FFDA]/10 flex items-center justify-center text-[#64FFDA] group-hover:bg-[#64FFDA] group-hover:text-[#112240] transition-all">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                      Email Us
                    </p>
                    <p className="text-gray-200 font-medium">
                      support@gamehub.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#64FFDA]/10 flex items-center justify-center text-[#64FFDA] group-hover:bg-[#64FFDA] group-hover:text-[#112240] transition-all">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                      Call Us
                    </p>
                    <p className="text-gray-200 font-medium">
                      +880 123 456 789
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#64FFDA]/10 flex items-center justify-center text-[#64FFDA] group-hover:bg-[#64FFDA] group-hover:text-[#112240] transition-all">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                      Location
                    </p>
                    <p className="text-gray-200 font-medium">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-white font-bold mb-4">Follow the Journey</p>
                <div className="flex gap-4">
                  {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                    (Icon, i) => (
                      <motion.a
                        key={i}
                        href="#"
                        whileHover={{
                          y: -5,
                          backgroundColor: "#64FFDA",
                          color: "#112240",
                        }}
                        className="w-10 h-10 rounded-lg bg-[#0A192F] border border-white/10 flex items-center justify-center text-gray-400 transition-colors"
                      >
                        <Icon />
                      </motion.a>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Subtle "Join Discord" Mini-Card */}
            <div className="bg-sapphire-night p-6 rounded-3xl border border-white/10 flex items-center justify-between group cursor-pointer">
              <div>
                <h3 className="text-white font-bold">Official Discord</h3>
                <p className="text-xs text-white/70">Join 50k+ members</p>
              </div>
              <button className="hover:bg-white/20 bg-secondary text-white px-4 py-2 rounded-lg text-sm font-bold backdrop-blur-md transition-all">
                Connect
              </button>
            </div>
          </motion.div>

          {/* Right Side: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-[#112240] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#64FFDA] blur-[120px] opacity-10"></div>

            <form className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#64FFDA] uppercase tracking-widest ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Master Chief"
                    className="w-full bg-[#0A192F] text-white border border-white/10 rounded-xl px-4 py-4 focus:border-[#64FFDA] outline-none transition-all placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#64FFDA] uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="chief@halo.com"
                    className="w-full bg-[#0A192F] text-white border border-white/10 rounded-xl px-4 py-4 focus:border-[#64FFDA] outline-none transition-all placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#64FFDA] uppercase tracking-widest ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full bg-[#0A192F] text-white border border-white/10 rounded-xl px-4 py-4 focus:border-[#64FFDA] outline-none transition-all placeholder:text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#64FFDA] uppercase tracking-widest ml-1">
                  Message
                </label>
                <textarea
                  placeholder="Type your transmission here..."
                  className="w-full bg-[#0A192F] text-white border border-white/10 rounded-xl px-4 py-4 focus:border-[#64FFDA] outline-none transition-all placeholder:text-gray-600 resize-none"
                  rows={5}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#64FFDA] hover:bg-[#52d1b2] text-secondary font-black py-5 rounded-xl uppercase tracking-widest shadow-[0_0_20px_rgba(100,255,218,0.3)] transition-all"
              >
                Send Transmission
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Connections;
