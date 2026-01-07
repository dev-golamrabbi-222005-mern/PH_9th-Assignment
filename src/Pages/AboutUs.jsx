import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-[#0A0F1C] text-gray-200 py-20 px-6 md:px-16 lg:px-28">
      <title>About US - Gamehub</title>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-3">
          About Gamehub
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Your one-stop platform to explore, experience, and support the world
          of gaming innovation.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20"
      >
        <div>
          <h2 className="text-3xl font-semibold text-cyan-300 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-400 leading-relaxed">
            At <span className="text-cyan-400 font-semibold">Gamehub</span>, we
            believe that every developer deserves a platform to showcase their
            creativity. Our goal is to bridge the gap between talented
            developers and passionate gamers by creating an online library where
            everyone can discover, support, and enjoy incredible indie games.
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-xl overflow-hidden shadow-lg border border-cyan-700"
        >
          <div className="border-t-2 border-gray-100"></div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-xl overflow-hidden shadow-lg border border-cyan-700 order-2 md:order-1"
        >
          <div className="border-t-2 border-gray-100"></div>
        </motion.div>

        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold text-cyan-300 mb-4">
            What We Do
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Gamehub allows users to browse hundreds of games from developers
            around the world. Whether you love action, adventure, or creative
            storytelling, you can find something that fits your taste. With
            detailed information, reviews, and download options — your next
            favorite game is just a click away.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-semibold text-cyan-300 mb-4">
          Our Vision
        </h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          To create a global space where developers and gamers connect, grow,
          and inspire each other. Gamehub is not just a platform — it’s a
          community built for dreamers, creators, and players who believe in the
          power of games to bring people together.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-cyan-500 text-black font-semibold px-8 py-3 rounded-full hover:bg-cyan-400 transition-colors duration-300"
        >
          Join the Community
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AboutUs;
