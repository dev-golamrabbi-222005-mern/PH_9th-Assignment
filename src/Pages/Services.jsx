import React from "react";
import { motion } from "framer-motion";
import {
  FaGamepad,
  FaUsers,
  FaCloudDownloadAlt,
  FaRocket,
} from "react-icons/fa";

const Services = () => {
  return (
    <div className="text-gray-200 py-6 md:py-10 max-w-7xl mx-auto px-4 md:px-6">
      <title>Services - Gamehub</title>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#64FFDA] mb-3">
          Our Services
        </h1>
        <div className="h-1.5 w-24 bg-[#64FFDA] mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Empowering developers and gamers through innovation, visibility, and
          community.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-[#112240] p-8 rounded-2xl shadow-lg border border-cyan-700"
        >
          <FaGamepad className="text-[#64FFDA] text-5xl mb-5" />
          <h3 className="text-2xl font-semibold mb-3 text-[#64FFDA]">
            Game Discovery
          </h3>
          <p className="text-gray-400">
            Explore a vast library of indie and AAA games. Discover new
            experiences based on your interests, ratings, and recommendations.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-[#112240] p-8 rounded-2xl shadow-lg border border-cyan-700"
        >
          <FaUsers className="text-[#64FFDA] text-5xl mb-5" />
          <h3 className="text-2xl font-semibold mb-3 text-[#64FFDA]">
            Developer Support
          </h3>
          <p className="text-gray-400">
            We help indie developers showcase their creativity to a global
            audience. Upload your games and gain exposure through Gamehub’s
            growing community.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-[#112240] p-8 rounded-2xl shadow-lg border border-cyan-700"
        >
          <FaCloudDownloadAlt className="text-[#64FFDA] text-5xl mb-5" />
          <h3 className="text-2xl font-semibold mb-3 text-[#64FFDA]">
            Easy Installation
          </h3>
          <p className="text-gray-400">
            Download and install your favorite games with a single click. Fast,
            secure, and optimized for all devices.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-[#112240] p-8 rounded-2xl shadow-lg border border-cyan-700"
        >
          <FaRocket className="text-[#64FFDA] text-5xl mb-5" />
          <h3 className="text-2xl font-semibold mb-3 text-[#64FFDA]">
            Growth & Analytics
          </h3>
          <p className="text-gray-400">
            Developers can view insights about downloads, engagement, and
            ratings to understand their audience and grow faster.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-[#112240] p-8 rounded-2xl shadow-lg border border-cyan-700"
        >
          <FaUsers className="text-[#64FFDA] text-5xl mb-5" />
          <h3 className="text-2xl font-semibold mb-3 text-[#64FFDA]">
            Community Connection
          </h3>
          <p className="text-gray-400">
            Join an active gaming community where players and creators can
            connect, share feedback, and build together.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-[#112240] p-8 rounded-2xl shadow-lg border border-cyan-700"
        >
          <FaGamepad className="text-[#64FFDA] text-5xl mb-5" />
          <h3 className="text-2xl font-semibold mb-3 text-[#64FFDA]">
            Personalized Experience
          </h3>
          <p className="text-gray-400">
            Gamehub tailors recommendations and updates to match your
            preferences, making your discovery journey personal and enjoyable.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
