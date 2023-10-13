import SectionTitle from "@/components/common/SectionTitle";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="max-width section-gap">
      <SectionTitle>About Us</SectionTitle>
      <div className="w-full grid h-fit xl:grid-cols-2 gap-[27px] ">
        <div className="w-full h-full relative rounded-[51px]">
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            alt="about"
            className="w-full h-auto"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-fit h-fit relative">
              <Image
                src="/icons/play-circle.svg"
                width={137}
                height={137}
                alt="about"
                className="w-full h-auto"
              />
              <Image
                src="/icons/play-black.svg"
                width={57}
                height={78}
                alt="about"
                className="w-auto h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-2"
              />
            </div>
          </div>
          {/* corner bottom info container */}
          <div
            className="absolute bottom-0 left-0 w-[240px] h-[121px] sm:w-[281px] sm:h-[137px] px-5 py-4 flex flex-col"
            style={{
              borderRadius: "0px 0px 0px 54px",
              background: "rgba(255, 255, 255, 0.18)",
              backdropFilter: "blur(11.348857879638672px)",
            }}
          >
            <h1 className="text-white xl:text-xl underline text-center font-orbitron font-semibold mt-1">Artificial Intelligence</h1>
            <p className="text-sm text-[#EFDEDE] mt-2 sm:mt-4 text-center">A Network of 3D virtual worlds focused on social connection. </p>
          </div>
        </div>
        <div className="w-full h-full">
          <p className="text-white font-manrope text-justify text-2xl font-extrabold leading-[50px]">
            At IntraIntel.ai, we transform how businesses leverage internal
            data. Using state-of-the-art AI and ML, our platform crafts precise,
            human-like content from vast intranet sources. With expertise
            spanning government, medical, research, and finance sectors, we aim
            to boost efficiency, expedite responses, and prioritize
            human-centric tasks like strategic decision-making.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
