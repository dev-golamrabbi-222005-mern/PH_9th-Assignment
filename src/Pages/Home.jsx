import React from 'react';
import Banner from '../Components/Banner';
import NewsLetter from '../Components/NewsLetter';
import PopularGames from '../Components/PopularGames';
import StatsSection from '../Components/StatsSection';
import WhyChooseUs from '../Components/WhyChooseUs';
import DeveloperSpotlight from '../Components/DeveloperSpotlight';
import TrendingCategories from '../Components/TrendingCategories';
import EventHighlight from '../Components/EventHighlight';
import PlatformSection from '../Components/PlatformSection';
import CommunityWall from '../Components/CommunityWall';
import FAQSection from '../Components/FAQSection';

const Home = () => {
    return (
      <div>
        <title>Gamehub - Home</title>
        <Banner/>
        <StatsSection/>
          <PopularGames/>
          <TrendingCategories/>
          <EventHighlight/>
          <DeveloperSpotlight/>
          <PlatformSection/>
          <WhyChooseUs/>
          <CommunityWall/>
          <FAQSection/>
          <NewsLetter/>
      </div>
    );
};

export default Home;