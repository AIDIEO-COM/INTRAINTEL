import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div
      className="w-full  relative home-banner overflow-hidden "
    >
      <div
        className="absolute top-0 left-0 right-0 bottom-0 h-full w-full z-[11] "
        style={{ backgroundColor: "transparent" }}
      >
        <div className="max-w-[1520px] mx-auto px-3 md:px-6 lg:px-7 h-full mt-10 md:mt-0 flex md:items-center ">
          <div className="w-full h-fit md:mb-7">
            <h1 className="text-white text-[35px] md:text-[50px] lg:text-[55px] xl:text-[70px] font-monoton uppercase ">
              Features{" "}
            </h1>
            <div className="flex items-center gap-5 xl:gap-7">
            <p className="text-white text-[35px] md:text-[50px] lg:text-[55px] xl:text-[70px] font-monoton uppercase">
              That 
            </p>
            <p className="text-white text-[35px] md:text-[50px] lg:text-[55px] xl:text-[70px] font-monoton uppercase">
              Empower 
            </p>
            </div>
            <p className="text-base lg:mt-3 md:text-[32px] font-extrabold font-manrope text-white">“Experience the Best of AI with IntraIntel.ai”</p>
            <button className="bg-[#AC2DE8] rounded-full mt-4 md:mt-10 lg:mt-20 px-5 xl:px-7 py-2.5 xl:py-4 flex items-center justify-center gap-3 xl:gap-4">
                <Image src={"/icons/play.svg"} alt="play button" width={24} height={30} className="mt-1.5 w-[11px] h-[16px] sm:w-[24px] sm:h-[30px]"></Image>
                <div className="h-[20px] sm:h-[30px] w-[2px] bg-white"></div>
                <p className="uppercase text-white font-extrabold font-mulish text-xs sm:text-base">Discover More</p>
            </button>
          </div>
        </div>
      </div>
      <Image
        src={"/banners/home-banner1.png"}
        alt="home banner 1"
        width={2120}
        height={1080}
        className="w-auto h-[200px] sm:h-[300px] bottom-0 md:h-[70%] absolute right-0  md:top-1/2 md:-translate-y-1/2 z-[10] mb-12 md:mb-0 mt-12"
      ></Image>
      <Image
        src={"/banners/home-banner2.png"}
        alt="home banner 1"
        width={2120}
        height={1080}
        className="w-auto h-[200px] sm:h-[300px] md:h-[90%] absolute bottom-0 right-0 z-[9] mb-12 md:mb-0 mt-12"
      ></Image>
      {/* gradient container */}
      <div className="banner-bottom-gradient w-[100px] h-[100px] md:w-[301px] md:h-[311px] absolute bottom-0 md:-bottom-10 right-0 "></div>
    </div>
  );
};

export default Banner;
