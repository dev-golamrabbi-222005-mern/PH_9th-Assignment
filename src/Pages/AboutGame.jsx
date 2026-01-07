import React, { use, useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const gamesDataPromise = fetch("/gamesData.json").then((res) => res.json());

const AboutGame = () => {
  const { id } = useParams();
  const gamesData = use(gamesDataPromise);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const filteredData = gamesData.find((game) => game.id == id);
    setDetails(filteredData);
  }, [gamesData, id]);

  useEffect(() => {
    if (details?.title) {
      document.title = `${details.title} - Gamehub`;
    }
  }, [details]);

  return (
    <div
      id="animated-gradient"
      className="py-11 md:py-22 lg:py-33 grid grid-cols-1 md:grid-cols-2 gap-10 items-center lg:px-33"
    >
      <div className="flex justify-center">
        <div className="bg-gray-300 p-3 sm:p-4 md:p-5 rounded-xl w-[90%] sm:w-[80%] md:w-full max-w-[450px]">
          <img
            src={details.coverPhoto}
            alt={details.title}
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
      <div className="px-4 md:px-0">
        <h1 className="text-2xl md:text-4xl font-semibold mb-5 text-white">
          {details.title}
        </h1>
        <p className="text-accent mb-3 leading-relaxed">
          {details.description}
        </p>

        <p className="font-semibold text-[17px] mb-3 text-gray-300">
          Developer: <span className="text-white">{details.developer}</span>
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          <p className="font-semibold bg-secondary text-black py-1 px-5 rounded-3xl">
            Category: {details.category}
          </p>
          <p className="font-semibold bg-secondary text-black py-1 px-5 rounded-3xl">
            Ratings: {details.ratings}
          </p>
        </div>

        <div className="flex justify-center md:justify-start">
          <Link
            id="dwnldBtn"
            className="btn mt-5 bg-primary text-white text-2xl py-7 px-8 rounded-3xl hover:bg-accent hover:text-secondary transition border-none"
            to={details.downloadLink}
          >
            Download
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutGame;
