import About from '@/components/pages/home/about/About';
import Banner from '@/components/pages/home/banner/Banner';
import ClientSay from '@/components/pages/home/clientSay/ClientSay';
import OurFeatures from '@/components/pages/home/ourFeatures/OurFeatures';
import React from 'react';

const HomePage = () => {
    return (
        <div className='w-full '>
            <Banner/>
            <OurFeatures/>
            <About/>
            <ClientSay/>
        </div>
    );
};

export default HomePage;