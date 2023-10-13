import React from 'react';

const PricingCard = ({price, title}) => {
    return (
        <div className="w-full max-w-[378px] h-[420px] md:h-[502px] pricing-card py-[50px]  flex flex-col justify-between">
            <h1 className="text-2xl md:text-[40px] font-manrope text-white font-extrabold text-center">
              {title}
            </h1>
            <h1 className="text-[#AA14F0] text-center text-[40px] md:text-[50px] lg:text-[64px]  font-manrope font-extrabold">
              {price} $
            </h1>
            <div className="w-full text-center font-mulish text-lg  md:text-xl text-[#e9e7e7] space-y-2 font-normal">
              <p>Lorem ipsum dolor sit amet, </p>
              <p>Lorem ipsum dolor sit amet, </p>
              <p>Lorem ipsum dolor sit amet, </p>
            </div>
            <button
              className="w-fit px-3 h-[50px] md:h-[62px] mx-auto text-white font-mulish text-lg lg:text-2xl font-extrabold flex items-center justify-center"
              style={{
                borderRadius: "110px",
                background: "#AC2DE8",
                boxShadow: "0px 60px 50px -40px #F284EE",
              }}
            >Get Started Today</button>
          </div>
    );
};

export default PricingCard;