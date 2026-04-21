import React from "react";
import { motion } from "framer-motion";
import {
  GiSwordsEmblem,
  GiFullMotorcycleHelmet,
  GiMagicPortal,
  GiCrosshair,
  GiMeeple,
} from "react-icons/gi";

const TrendingCategories = () => {
  const cats = [
    { name: "Action", icon: <GiSwordsEmblem />, count: "120+ Games" },
    { name: "Racing", icon: <GiFullMotorcycleHelmet />, count: "45+ Games" },
    { name: "Fantasy", icon: <GiMagicPortal />, count: "80+ Games" },
    { name: "Shooter", icon: <GiCrosshair />, count: "60+ Games" },
    { name: "Strategy", icon: <GiMeeple />, count: "30+ Games" },
  ];

  // Container variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each card
      },
    },
  };

  // Individual card variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16 overflow-hidden">
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-white mb-10 border-l-4 border-[#64FFDA] pl-4"
      >
        Browse by Genre
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {cats.map((c, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              y: -5,
              backgroundColor: "rgba(17, 34, 64, 0.8)", // Slight highlight on secondary
              borderColor: "rgba(100, 255, 218, 0.5)", // Primary color border
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary p-8 rounded-2xl border border-white/5 transition-colors group cursor-pointer text-center shadow-xl"
          >
            <motion.div
              className="text-4xl text-accent mb-4 flex justify-center transition-colors"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {c.icon}
            </motion.div>
            <h3 className="text-white font-semibold">{c.name}</h3>
            <p className="text-accent text-xs mt-1">{c.count}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TrendingCategories;
