import Banner from '@/components/pages/home/banner/Banner';
import OurFeatures from '@/components/pages/home/ourFeatures/OurFeatures';
import React from 'react';

const HomePage = () => {
    return (
        <div className='w-full '>
            <Banner/>
            <OurFeatures/>
        </div>
    );
};

export default HomePage;