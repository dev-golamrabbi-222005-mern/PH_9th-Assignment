import React from "react";
import { motion } from "framer-motion";

const DeveloperSpotlight = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16  overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 bg-black/25 p-10 rounded-xl items-center">
        {/* Image side with a floating effect and reveal */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1 relative group"
        >
          {/* Decorative background glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-transparent blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800"
            className="relative rounded-3xl shadow-2xl border border-primary/20 z-10"
            alt="Cyberpunk vibe"
          />
        </motion.div>

        {/* Text side with staggered reveal */}
        <div className="order-1 md:order-2">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-secondary font-bold tracking-widest text-sm uppercase mb-2"
          >
            Dev Spotlight
          </motion.h4>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-white mb-6 leading-tight"
          >
            Beyond Reality Studios
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-accent text-lg mb-8"
          >
            Pushing the boundaries of ray-tracing and narrative immersion.
            Explore the complete collection of 2026's most anticipated indie
            hits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex gap-6"
          >
            <div className="group cursor-default">
              <motion.div
                whileHover={{ scale: 1.1, color: "#64FFDA" }}
                className="text-2xl font-bold text-white transition-colors"
              >
                12
              </motion.div>
              <div className="text-xs text-accent uppercase tracking-tighter">
                Games Released
              </div>
            </div>

            <div className="border-l border-white/10 pl-6 group cursor-default">
              <motion.div
                whileHover={{ scale: 1.1, color: "#64FFDA" }}
                className="text-2xl font-bold text-white transition-colors"
              >
                9.8
              </motion.div>
              <div className="text-xs text-accent uppercase tracking-tighter">
                Avg. Rating
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSpotlight;
