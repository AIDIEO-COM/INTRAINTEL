import Image from "next/image";
import React from "react";
import ClientSayCard from "./ClientSayCard";

const ClientSay = () => {
  return (
    <div className="w-full h-full relative">
      <div
        className="max-width section-gap h-full lg:h-[361px] "
        style={{
          borderRadius: "7.35px",
          border: "1.069px solid rgba(185, 54, 245, 0.25)",
          background:
            "linear-gradient(180deg, #F284EE -42.59%, rgba(0, 0, 0, 0.00) -42.59%, #AA14F0 -42.58%, rgba(170, 20, 240, 0.18) 4.35%, rgba(151, 60, 68, 0.05) 99.99%, rgba(185, 54, 245, 0.00) 100%)",
        }}
      >
        <h1 className="font-manrope text-[30px] sm:text-[40px] text-white font-bold text-center mt-[58px]">
          What our clients say
        </h1>
        <p
          className=" text-center mt-4 text-lg md:text-2xl font-manrope max-w-[840px] mx-auto"
          style={{ color: "rgba(255, 255, 255, 0.85)" }}
        >
          See what our customer say about us. It really matter for us. How good
          or bad we will make ir for evaluation to make EhyalLive better.
        </p>
        {/* feedback cards container */}
        <div className="w-full h-fit overflow-x-auto pb-7">
        <div className="w-fit xl:w-full  h-fit px-5 xl:px-8 flex xl:grid grid-cols-3 gap-5 mt-[48px] justify-items-center">
            <ClientSayCard profile={"/images/profile1.svg"} title={"“ Lorem ipsum dolor sit amet, “ "} name={"Denny Hilguston"} email={"@denny.hill"}></ClientSayCard>
            <ClientSayCard profile={"/images/profile2.svg"} title={"“ Lorem ipsum dolor sit amet, “ "} name={"Vani Pandey"} email={"@vani.pandey"}></ClientSayCard>
            <ClientSayCard profile={"/images/profile3.svg"} title={"“ Lorem ipsum dolor sit amet, “ "} name={"milly Singh"} email={"@milly.singh"}></ClientSayCard>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSay;
