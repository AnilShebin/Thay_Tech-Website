import React from 'react';
import ClientLogos from './ClientLogos'
import Carousel1 from './Carousel1';
import HomeContent from './HomeContent';
import AccordionImage from './AccordionImage';
import Counter from './Counter';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Carousel1 />
      <HomeContent/>
      <Counter/>
      <AccordionImage/>
      <ClientLogos />
    </div>
  );
};

export default HomePage;
