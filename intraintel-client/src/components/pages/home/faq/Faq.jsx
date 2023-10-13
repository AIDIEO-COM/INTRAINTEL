import SectionTitle from '@/components/common/SectionTitle';
import Image from 'next/image';
import React from 'react';

const Faq = () => {
    return (
        <div className='w-full h-fit relative'>
            {/* gradients */}
            <div className="w-fit h-fit absolute left-0 top-0 -translate-y-1/4 flex justify-start">
                <Image src={"/gradients/faq.svg"} alt='faq' width={333} height={644} className='w-auto h-[422px] md:h-auto md:w-auto'></Image>
            </div>
            <div className="max-width section-gap h-full">
                <SectionTitle>FAQ</SectionTitle>
                <div className="w-fit mx-auto space-y-8 sm:space-y-10 h-full">
                    <div className="flex items-center gap-5 xl:gap-7">
                        <h1 className='text-2xl md:text-[40px] text-white font-semibold font-mulish pb-1.5 sm:pb-3 border-b-2 border-white'>Lorem ipsum dolor sit amet,  </h1>
                        <Image src='/icons/faq.svg' width={55} height={27} alt='faq' className='w-[43px] h-[20px] md:w-auto md:h-auto'/>
                    </div>
                    <div className="flex items-center gap-5 xl:gap-7">
                        <h1 className='text-2xl md:text-[40px] text-white font-semibold font-mulish pb-1.5 sm:pb-3 border-b-2 border-white'>Lorem ipsum dolor sit amet,  </h1>
                        <Image src='/icons/faq.svg' width={55} height={27} alt='faq' className='w-[43px] h-[20px] md:w-auto md:h-auto'/>
                    </div>
                    <div className="flex items-center gap-5 xl:gap-7">
                        <h1 className='text-2xl md:text-[40px] text-white font-semibold font-mulish pb-1.5 sm:pb-3 border-b-2 border-white'>Lorem ipsum dolor sit amet,  </h1>
                        <Image src='/icons/faq.svg' width={55} height={27} alt='faq' className='w-[43px] h-[20px] md:w-auto md:h-auto'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;