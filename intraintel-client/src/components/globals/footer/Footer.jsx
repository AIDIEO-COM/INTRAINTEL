import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full min-h-[187px] md:h-[603px] relative">
      {/* bg image for footer */}
      <Image
        src={"/banners/footer-bg-in.png"}
        alt="footer bg"
        width={1000}
        height={800}
        className="w-auto h-full absolute right-0"
      ></Image>
      <div className="max-width pt-10 md:pt-[100px]">
        <div className="w-full flex justify-between gap-2 sm:gap-3 md:gap-5 lg:gap-8 xl:gap-14 border-b-4 border-white md:pb-5">
          <div className="lg:pr-20">
            <Image
              src={"/logo.png"}
              alt="logo footer"
              width={200}
              height={157}
            ></Image>
            <p className="uppercase font-roboto text-lg sm:text-2xl xl:text-[30px] font-extrabold text-white pl-2 md:pl-6">
              IntraIntel<span className="text-[#F284EE]">.Ai</span>
            </p>
            <Image
              src={"/images/social_media.png"}
              alt="social media"
              width={378}
              height={106}
              className="h-auto w-auto mt-5"
            ></Image>
          </div>
          <div className="lg:pr-20">
            <h1 className="uppercase text-white font-manrope text-base md:text-xl lg:text-2xl font-bold">
              Pages
            </h1>
            <div className="md:mt-7 h-full md:space-y-3.5">
              <p className="text-white font-manrope text-sm md:text-base lg:text-lg font-semibold">
                Home
              </p>
              <p className="text-white font-manrope text-sm md:text-base lg:text-lg font-semibold">
                About Us
              </p>
              <p className="text-white font-manrope text-sm md:text-base lg:text-lg font-semibold">
                Pricing
              </p>
              <p className="text-white font-manrope text-sm md:text-base lg:text-lg font-semibold">
                Contact
              </p>
              <p className="text-white font-manrope text-sm md:text-base lg:text-lg font-semibold">
                Privacy Policy
              </p>
              <p className="text-white font-manrope text-sm md:text-base lg:text-lg font-semibold">
                Terms of Use
              </p>
            </div>
          </div>
          <div className="grow">
            <h1 className="uppercase text-white font-manrope text-base md:text-xl lg:text-2xl font-bold">
              Subscribe now!
            </h1>
            <div className="md:mt-7 space-y-2 mt-3 md:space-y-7">
              <input
                className="h-[62px] bg-primary text-lg  md:text-2xl text-white font-manrope w-full outline-none px-5 md:px-7 placeholder:text-white"
                style={{
                  borderRadius: "110px",
                  boxShadow: "0px 60px 50px -40px #F284EE",
                }}
                placeholder="Your Email"
                type="text"
              ></input>
              <button className="h-[62px] w-fit lg:w-full max-w-[245px] mx-auto px-5 lg:px-7 bg-primary rounded-full text-[26px] text-white font-extrabold font-mulish">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-3 md:pt-5 lg:pt-7 w-full">
          <div className="flex items-center gap-2 md:gap-5">
            <div className="w-fit flex items-center gap-3 relative">
              <Image
                src={"/icons/footer-icons-1.svg"}
                alt="footer-icons-1"
                width={66}
                height={65}
                className="w-[30px] h-[30px] md:h-auto md:w-auto"
              ></Image>
              <Image
                src={"/icons/foot-1.png"}
                alt="footer 1"
                width={30}
                height={34}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[16px] w-[18px] md:h-auto md:w-auto"
              ></Image>
            </div>
            <div className="w-fit flex items-center gap-3 relative">
              <Image
                src={"/icons/footer-icons-1.svg"}
                alt="footer-icons-1"
                width={66}
                height={65}
                className="w-[30px] h-[30px] md:h-auto md:w-auto"
              ></Image>
              <Image
                src={"/icons/foot-2.png"}
                alt="footer 1"
                width={30}
                height={34}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[16px] w-[18px] md:h-auto md:w-auto"
              ></Image>
            </div>
            <div className="w-fit flex items-center gap-3 relative">
              <Image
                src={"/icons/footer-icons-1.svg"}
                alt="footer-icons-1"
                width={66}
                height={65}
                className="w-[30px] h-[30px] md:h-auto md:w-auto"
              ></Image>
              <Image
                src={"/icons/foot-3.png"}
                alt="footer 1"
                width={30}
                height={34}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[16px] w-[18px] md:h-auto md:w-auto"
              ></Image>
            </div>
          </div>
          <p className="text-white text-sm md:text-xl lg:text-2xl font-medium md:font-bold font-mulish md:mt-5">Powered by the IntraIntel.ai</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
