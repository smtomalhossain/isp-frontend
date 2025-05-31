import React from 'react';
import Slider from '../components/Slider';
import ServicesCard from '../components/ServicesCard';
import LinkCard from '../components/LinkCard';
import PricingCard from '../components/PricingCard';
import CoverageArea from '../components/CoverageArea';
import HappyClients from '../components/HappyClients';


function Home() {
  return (
    <>
      <section>
        <Slider />
      </section>

      <section className='border-b border-gray-200 dark:border-gray-700'>
        <ServicesCard />
      </section>

      <section className='border-b border-gray-200 dark:border-gray-700'>
        <LinkCard />
      </section>

      <section className='border-b border-gray-200 dark:border-gray-700'>
        <PricingCard />
      </section>

      <section className='border-b-[1px] border-gray-200 dark:border-gray-700'>
        <CoverageArea />
      </section>
      
      <section>
        <HappyClients/>
      </section>
    </>
  );
}

export default Home;
