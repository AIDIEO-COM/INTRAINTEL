import SectionTitle from "@/components/common/SectionTitle";
import Image from "next/image";
import React from "react";
import FeatureCard from "./FeatureCard";

const OurFeatures = () => {
  return (
    <div className="w-full h-full relative">
      <div className="max-width section-gap">
        <SectionTitle>Our Features</SectionTitle>
        <div className="grid w-fit mx-auto md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-[33px] justify-items-center">
          <FeatureCard
            logo={"/icons/ai.png"}
            title={"Advanced AI & ML"}
            description={
              "Utilize state-of-the-art AI and ML algorithms to craft human-like content tailored to specific questions."
            }
          ></FeatureCard>
          <FeatureCard
            logo={"/icons/secure-data.png"}
            title={"Secure Data Handling"}
            description={
              "Process data within the company's security boundary, ensuring confidentiality and compliance."
            }
          ></FeatureCard>
          <FeatureCard
            logo={"/icons/user-centric.png"}
            title={"User-Centric Design"}
            description={
              "We believe technology should be intuitive. With a user-friendly interface, IntraIntel.ai ensures that you can leverage the power of AI."
            }
          ></FeatureCard>
          <FeatureCard
            logo={"/icons/ai.png"}
            title={"Multi-Sector Expertise"}
            description={
              "From government and medical to research and finance, IntraIntel.ai is versatile."
            }
          ></FeatureCard>
          <FeatureCard
            logo={"/icons/ai.png"}
            title={"Real-Time Processing"}
            description={
              "Say goodbye to waiting. With our real-time API integrations, IntraIntel.ai ensures rapid data ingestion and immediate content generation."
            }
          ></FeatureCard>
          <FeatureCard
            logo={"/icons/ai.png"}
            title={"Custom Integration"}
            description={
              "Every business or person has unique need need to perform their job, and so is its data."
            }
          ></FeatureCard>
        </div>
      </div>
      {/* bottom side gradient */}
      <Image src={"/gradients/featuresBottom.svg"} alt="gradients feature" width={500} height={500} className="w-auto h-auto absolute bottom-0 left-0 translate-y-[80%]"></Image>
    </div>
  );
};

export default OurFeatures;
