import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    description:
      "Step into the neon-soaked streets of Night City and forge your destiny in a world of chaos and technology.",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
    link: "https://www.cyberpunk.net/",
  },
  {
    id: 2,
    title: "Grand Theft Auto V",
    description:
      "Explore Los Santos and Blaine County in Rockstar’s legendary open-world masterpiece full of crime, chaos, and opportunity.",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
    link: "https://www.rockstargames.com/gta-v",
  },
  {
    id: 3,
    title: "Apex Legends",
    description:
      "Drop into the fast-paced world of Apex Legends — a free-to-play hero shooter where legendary characters battle for glory in the Apex Games.",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg",
    link: "https://www.ea.com/games/apex-legends",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3333);
    return () => clearInterval(timer);
  }, []); // Added dependency array to prevent unnecessary re-renders

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden shadow-lg">
      <AnimatePresence>
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          {/* Centering classes applied below: flex flex-col justify-center */}
          <div className="absolute inset-0 bg-black/50 p-10 text-white flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
              <h2 className="text-2xl md:text-4xl font-bold mb-3">
                {slides[current].title}
              </h2>
              <p className="max-w-xl md:text-lg mb-5">
                {slides[current].description}
              </p>
              <a
                href={slides[current].link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#64FFDA] hover:bg-secondary text-black/80 px-5 py-2 rounded-full font-semibold transition inline-block w-fit"
              >
                Explore Now
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-[#64FFDA] scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
