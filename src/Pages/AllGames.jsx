import React, { use } from "react";
import { motion } from "framer-motion";
import GameCard from "../Components/GameCard";

const gamesDataPromise = fetch("/gamesData.json").then((res) => res.json());

const AllGames = () => {
  const gamesData = use(gamesDataPromise);
  const sortedGames = [...gamesData].sort((a, b) => b.ratings - a.ratings);

  const rowSize = 3;
  const rows = [];
  for (let i = 0; i < sortedGames.length; i += rowSize) {
    rows.push(sortedGames.slice(i, i + rowSize));
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 my-8 md:my-12 lg:my-16">
      <h1 className="text-center text-3xl font-semibold mb-8">All Games</h1>

      <div className="flex flex-col gap-5 overflow-x-hidden">
        {rows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0, x: rowIndex % 2 === 0 ? -200 : 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {row.map((game) => (
              <motion.div
                key={game.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <GameCard game={game} />
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllGames;
