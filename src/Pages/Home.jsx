import React from 'react';
import Banner from '../Components/Banner';
import NewsLetter from '../Components/NewsLetter';
import PopularGames from '../Components/PopularGames';

const Home = () => {
    return (
      <div className="w-full md:w-11/12 lg:w-10/12 mx-auto">
        <title>Gamehub - Home</title>
        <Banner></Banner>
        <PopularGames></PopularGames>
        <NewsLetter></NewsLetter>
      </div>
    );
};

export default Home;