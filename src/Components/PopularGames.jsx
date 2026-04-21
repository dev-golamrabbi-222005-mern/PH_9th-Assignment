import React, { use } from "react";
import { motion } from "framer-motion";
import GameCard from "./GameCard";

const gamesDataPromise = fetch("/gamesData.json").then((res) => res.json());

const PopularGames = () => {
  const gamesData = use(gamesDataPromise);

  // Sort by rating and take only the top 6
  const topGames = [...gamesData]
    .sort((a, b) => b.ratings - a.ratings)
    .slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16">
      <h1 className="text-center text-3xl font-bold mb-10 text-white tracking-tight">
        Popular Games
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
        {topGames.map((game, index) => (
          <motion.div
            key={game.id}
            // Logic to keep your requested motion design:
            // even indices slide from left, odd from right
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <GameCard game={game} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularGames;
