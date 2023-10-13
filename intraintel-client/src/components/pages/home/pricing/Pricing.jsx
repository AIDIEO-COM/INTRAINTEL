import SectionTitle from "@/components/common/SectionTitle";
import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div className="w-full h-fit relative pt-8">
      <div className="max-width section-gap">
        <SectionTitle>Pricing</SectionTitle>
        <div className="w-full h-full grid lg:grid-cols-3 gap-[40px] justify-items-center ">
          <PricingCard price="20" title="Monthly" />
          <PricingCard price="80" title="Annually" />
          <PricingCard price="250" title="Lifetime" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
