import React from 'react';
import { Link } from 'react-router';

const GameCard = ({game}) => {
    const {coverPhoto, title, ratings, category} = game;
    return (
      <Link to={`/aboutGame/${game.id}`} className="card bg-base-100 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={coverPhoto} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between w-full gap-5">
            <p className="bg-secondary font-semibold rounded-2xl py-1">
              {category}
            </p>
            <p className="bg-secondary font-semibold rounded-2xl py-1">
              {ratings}
            </p>
          </div>
        </div>
      </Link>
    );
};

export default GameCard;