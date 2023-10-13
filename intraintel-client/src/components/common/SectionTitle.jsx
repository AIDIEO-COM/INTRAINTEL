import React from 'react';

const SectionTitle = ({children}) => {
    return (
        <h1 className='text-[64px] font-manrope font-extrabold text-white text-center mb-7 md:mb-10 xl:mb-14'>{children}</h1>
    );
};

export default SectionTitle;