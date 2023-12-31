import About from '@/components/pages/home/about/About';
import Banner from '@/components/pages/home/banner/Banner';
import ClientSay from '@/components/pages/home/clientSay/ClientSay';
import Contact from '@/components/pages/home/contact/Contact';
import ExploreProduct from '@/components/pages/home/exploreProduct/ExploreProduct';
import Faq from '@/components/pages/home/faq/Faq';
import OurFeatures from '@/components/pages/home/ourFeatures/OurFeatures';
import Pricing from '@/components/pages/home/pricing/Pricing';
import React from 'react';

const HomePage = () => {
    return (
        <div className='w-full h-full overflow-hidden'>
            <Banner/>
            <OurFeatures/>
            <About/>
            <ClientSay/>
            <Pricing/>
            <Faq/>
            <Contact/>
            <ExploreProduct/>
        </div>
    );
};

export default HomePage;