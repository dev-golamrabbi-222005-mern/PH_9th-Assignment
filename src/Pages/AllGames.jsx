import React, { use, useState } from "react";
import { motion } from "framer-motion";
import GameCard from "../Components/GameCard";
import { BsSearch, BsFilterRight } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";

const gamesDataPromise = fetch("/gamesData.json").then((res) => res.json());

const AllGames = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const gamesData = use(gamesDataPromise);

  // Logic Processing
  let displayData = [...gamesData];
  if (searchQuery) {
    displayData = displayData.filter((gm) =>
      gm.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }
  if (category !== "All") {
    displayData = displayData.filter((gm) => gm.category === category);
  }
  if (sort === "rating") {
    displayData.sort((a, b) => b.ratings - a.ratings);
  } else if (sort === "az") {
    displayData.sort((a, b) => a.title.localeCompare(b.title));
  }

  // Row Chunking Logic
  const rowSize = 3;
  const rows = [];
  for (let i = 0; i < displayData.length; i += rowSize) {
    rows.push(displayData.slice(i, i + rowSize));
  }

  // List of unique categories for the filter
  const categories = ["All", ...new Set(gamesData.map((g) => g.category))];

  return (
    <div className="py-6 md:py-10 max-w-7xl mx-auto px-4 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          EXPLORE <span className="text-[#64FFDA]">GAMES</span>
        </h1>
        <div className="h-1.5 w-24 bg-[#64FFDA] mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400">
          Discover your next adventure from our curated library
        </p>
      </div>

      {/* Control Bar */}
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-base-100 p-6 rounded-2xl mb-12 shadow-xl border border-gray-800">
        {/* Search Input */}
        <div className="relative w-full lg:max-w-sm">
          <BsSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0f1113] text-white pl-12 pr-4 py-3 rounded-xl border border-gray-700 focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA] transition-all outline-none"
          />
        </div>

        {/* Filters & Sorting */}
        <div className="flex flex-wrap justify-center items-center gap-4 w-full lg:w-auto">
          {/* Category Dropdown */}
          <div className="flex items-center gap-2 bg-[#0f1113] px-3 py-1.5 rounded-xl border border-gray-700">
            <MdOutlineCategory className="text-[#64FFDA]" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-transparent text-white text-sm outline-none cursor-pointer p-1"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-[#1a1c1e]">
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 bg-[#0f1113] px-3 py-1.5 rounded-xl border border-gray-700">
            <BsFilterRight className="text-[#64FFDA] text-xl" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent text-white text-sm outline-none cursor-pointer p-1"
            >
              <option value="default" className="bg-[#1a1c1e]">
                Newest
              </option>
              <option value="rating" className="bg-[#1a1c1e]">
                Top Rated
              </option>
              <option value="az" className="bg-[#1a1c1e]">
                A-Z
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <p className="mb-6 text-gray-500 text-sm italic">
        Showing {displayData.length} games
      </p>

      {/* Games Grid */}
      <div className="flex flex-col gap-8 overflow-x-hidden">
        {displayData.length > 0 ? (
          rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, x: rowIndex % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {row.map((game) => (
                <motion.div
                  key={game.id}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <GameCard game={game} />
                </motion.div>
              ))}
            </motion.div>
          ))
        ) : (
          <div className="py-20 text-center">
            <h3 className="text-xl text-gray-400 font-medium">
              No games found matching your criteria.
            </h3>
            <button
              onClick={() => {
                setSearchQuery("");
                setCategory("All");
                setSort("default");
              }}
              className="mt-4 text-[#64FFDA] underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllGames;
