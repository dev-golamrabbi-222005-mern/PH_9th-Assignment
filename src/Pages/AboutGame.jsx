import React, { use, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { FaDownload, FaStar, FaCode, FaGamepad } from "react-icons/fa";

const gamesDataPromise = fetch("/gamesData.json").then((res) => res.json());

const AboutGame = () => {
  const { id } = useParams();
  const gamesData = use(gamesDataPromise);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const filteredData = gamesData.find((game) => game.id == id);
    if (filteredData) setDetails(filteredData);
  }, [gamesData, id]);

  useEffect(() => {
    if (details?.title) {
      document.title = `${details.title} - Gamehub`;
    }
  }, [details]);

  if (!details.title) return <div className="min-h-screen bg-[#0f1113]"></div>;

  return (
    <div className="relative min-h-screen bg-[#0A192F] overflow-hidden flex items-center">
      {/* Dynamic Immersive Background */}
      <div
        className="absolute inset-0 opacity-33 blur-xl scale-103 pointer-events-none"
        style={{
          backgroundImage: `url(${details.coverPhoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Image Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-[#1a1c1e] p-2 rounded-2xl shadow-2xl">
                <img
                  src={details.coverPhoto}
                  alt={details.title}
                  className="w-full max-w-[400px] h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-md bg-[#64FFDA] text-secondary text-xs font-bold tracking-widest uppercase mb-4 border border-primary/20">
                Premium Entry
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                {details.title}
              </h1>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
                <span className="flex items-center gap-2 text-gray-400">
                  <FaCode className="text-[#64FFDA]" /> {details.developer}
                </span>
                <span className="flex items-center gap-2 text-gray-400">
                  <FaGamepad className="text-[#64FFDA]" /> {details.category}
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {details.description}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <div className="bg-[#1a1c1e] border border-gray-800 px-4 py-2 rounded-xl flex items-center gap-2">
                <FaStar className="text-yellow-500" />
                <span className="text-white font-bold">{details.ratings}</span>
                <span className="text-gray-500 text-xs">Rating</span>
              </div>
              <div className="bg-[#1a1c1e] border border-gray-800 px-4 py-2 rounded-xl text-white font-medium">
                {details.category}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                to={details.downloadLink}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold transition-all duration-200 bg-[#64FFDA] text-secondary rounded-xl hover:bg-secondary hover:text-[#64FFDA] focus:outline-none"
              >
                <FaDownload className="mr-2 group-hover:translate-y-1 transition-transform" />
                Download Game
              </Link>

              <button className="px-8 py-4 font-bold text-white border border-gray-700 rounded-xl hover:bg-gray-800 transition-all">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGame;
