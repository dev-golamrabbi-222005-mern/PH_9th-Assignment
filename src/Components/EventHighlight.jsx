import React from "react";
import { motion } from "framer-motion";

const EventHighlight = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-sapphire-night rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden"
      >
        {/* Animated Background Decoration */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-primary rounded-full blur-[100px]"
        />

        <div className="relative z-10 text-center md:text-left">
          {/* Pulsing Live Badge */}
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="bg-[#64FFDA] text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block"
          >
            Live Event
          </motion.span>

          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl font-black text-white mt-4 mb-2"
          >
            GLOBAL ARENA 2026
          </motion.h2>

          <motion.p
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/80 max-w-md"
          >
            Join the biggest eSports championship of the year. Registration ends
            in 2 days.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-gray-500/80 text-[#64FFDA] px-8 py-3 rounded-xl font-bold hover:bg-secondary cursor-pointer transition-colors shadow-lg"
          >
            Join Tournament
          </motion.button>
        </div>

        {/* Countdown Timer Animation */}
        <div className="mt-8 md:mt-0 flex gap-4 relative z-10 text-center">
          {["02", "14", "55"].map((num, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, borderColor: "rgba(100, 255, 218, 1)" }}
              className="bg-secondary/40 backdrop-blur-md p-4 rounded-xl min-w-[80px] border border-white/20 shadow-xl"
            >
              <motion.div
                key={num}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-2xl font-bold text-white"
              >
                {num}
              </motion.div>
              <div className="text-[10px] text-[#64FFDA] uppercase font-bold">
                {["Days", "Hours", "Min"][i]}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EventHighlight;
