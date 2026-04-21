import React from "react";
import { motion } from "framer-motion";
import { FaDiscord, FaTwitch, FaYoutube } from "react-icons/fa";

const CommunityWall = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#5865F2]/10 border border-[#5865F2]/30 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
      >
        {/* Animated Background Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-64 h-64 bg-[#5865F2] blur-[120px] pointer-events-none"
        ></motion.div>

        {/* Floating Main Icon */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block"
        >
          <FaDiscord className="text-6xl text-[#64FFDA] mx-auto mb-6 drop-shadow-[0_0_15px_rgba(88,101,242,0.5)]" />
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-black text-white mb-4"
        >
          JOIN THE SQUAD
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-accent max-w-xl mx-auto mb-10 text-lg"
        >
          Get real-time updates, find teammates, and participate in exclusive
          giveaways on our official Discord server.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {/* Main Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#4752c4" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#5865F2] cursor-pointer text-white px-10 py-4 rounded-xl font-bold transition-all flex items-center gap-3 shadow-lg"
          >
            <FaDiscord size={20} /> Join Discord
          </motion.button>

          {/* Social Icons */}
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.1, y: -5, color: "#64FFDA" }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="p-4 bg-secondary rounded-xl text-white transition-colors border border-white/5 flex items-center justify-center"
            >
              <FaTwitch size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5, color: "#64FFDA" }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="p-4 bg-secondary rounded-xl text-white transition-colors border border-white/5 flex items-center justify-center"
            >
              <FaYoutube size={24} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CommunityWall;
