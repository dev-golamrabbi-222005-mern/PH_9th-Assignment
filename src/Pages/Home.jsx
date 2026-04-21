import React from 'react';
import Banner from '../Components/Banner';
import NewsLetter from '../Components/NewsLetter';
import PopularGames from '../Components/PopularGames';

const Home = () => {
    return (
      <div>
        <title>Gamehub - Home</title>
        <Banner></Banner>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <PopularGames></PopularGames>
          <NewsLetter></NewsLetter>
        </div>
      </div>
    );
};

export default Home;