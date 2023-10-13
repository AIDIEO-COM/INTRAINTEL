import Image from "next/image";
import React from "react";

const FeatureCard = ({logo, title, description}) => {
  return (
    <div className="w-full px-5 lg:px-8 py-4 lg:py-5 feature-card h-full max-w-[430px] min-h-[254px]">
      <div className="w-full flex items-center gap-5">
        <Image
          src={logo}
          width={100}
          height={100}
          alt="feature-1"
          className="w-auto h-auto"
        />
        <p className="text-white text-2xl font-manrope font-extrabold">
          {title}
        </p>
      </div>
      <p className="text-white text-lg font-manrope font-extrabold pt-3 lg:pt-4 text-justify mx-2">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
