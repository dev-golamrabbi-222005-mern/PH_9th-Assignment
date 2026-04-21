import React from "react";
import { motion } from "framer-motion";
import { GiMagicPortal } from "react-icons/gi";

const WhyChooseUs = () => {
  // Variants for the container to coordinate children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Variants for individual grid items
  const cardVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Level Up Your Experience
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full md:h-[450px]"
      >
        {/* Large Feature */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="md:col-span-2 bg-[#64FFDA]/75 rounded-3xl p-10 flex flex-col justify-end border border-white/5 relative group overflow-hidden"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 right-0 p-10 opacity-25 group-hover:scale-110 transition-transform"
          >
            <GiMagicPortal size={150} color="#F43098" />
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Cloud Sync Save
          </h3>
          <p className="text-secondary">
            Pick up exactly where you left off. Your progress is synced across
            all your devices instantly.
          </p>
        </motion.div>

        {/* Small Feature Top */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="bg-primary/75 p-10 rounded-3xl flex flex-col justify-center text-secondary"
        >
          <h3 className="text-2xl font-bold mb-2 uppercase">Fast DL</h3>
          <p className="font-medium">
            Direct connection to global mirrors for 10Gbps speeds.
          </p>
        </motion.div>

        {/* Small Feature Bottom (Span 3) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="md:col-span-3 bg-secondary/75 rounded-3xl p-8 border border-white/5 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-12 rounded-full bg-[#64FFDA]/25 flex items-center justify-center text-[#64FFDA] font-bold"
            >
              !
            </motion.div>
            <h3 className="text-xl font-bold text-white">
              Ad-Free Experience for Pro Members
            </h3>
          </div>
          <button className="text-[#64FFDA] font-bold hover:underline">
            Learn More →
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
