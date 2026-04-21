import React from "react";
// Switching to FontAwesome and MaterialDesign for better stability
import { FaWindows, FaPlaystation, FaXbox, FaApple } from "react-icons/fa";
import { SiNvidia } from "react-icons/si";

const PlatformSection = () => {
  const platforms = [
    { icon: <FaWindows />, name: "Windows" },
    { icon: <FaPlaystation />, name: "PS5" },
    { icon: <FaXbox />, name: "Xbox Series" },
    { icon: <FaApple />, name: "macOS" },
    { icon: <SiNvidia />, name: "GeForce Now" },
  ];

  return (
    <section className="px-4 md:px-6 py-8 md:py-12 lg:py-16 border-y border-white/5">
      <p className="text-center text-accent uppercase tracking-[0.3em] text-lg font-semibold mb-10">
        Optimized for all platforms
      </p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
        {platforms.map((p, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-3 group cursor-default"
          >
            <span className="text-4xl text-white group-hover:text-secondary transition-colors">
              {p.icon}
            </span>
            <span className="text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity uppercase">
              {p.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformSection;
