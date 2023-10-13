import Image from "next/image";
import React from "react";

const ExploreProduct = () => {
  return (
    <div className="mt-16 md:mt-28 w-full h-fit px-3">
      <div
        className="max-width h-[150px] md:h-[184px]  flex sm:grid grid-cols-2 px-3 md:px-8 py-4 "
        style={{
          borderRadius: "7.35px",
          border: "1.621px solid rgba(185, 54, 245, 0.25)",
          background:
            "linear-gradient(180deg, #A600F3 -42.59%, #B413FF 4.51%, rgba(217, 134, 255, 0.18) 96.61%)",
        }}
      >
        <div className="flex flex-col h-full w-full justify-between py-5">
          <p className="text-xl md:text-4xl text-white font-manrope font-bold">
            Explore product in
          </p>
          <div className="flex items-center sm:gap-2 md:gap-4">
            <p className="text-xl md:text-4xl text-white font-manrope font-bold">
              new way
            </p>
            <Image
              src="/icons/vector1.svg"
              width={47}
              height={34}
              alt="arrow"
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-col sm:flex-row  items-center">
          <div className="flex items-center w-full h-full">
            <button className="h-[50px] md:h-[62px] w-fit mx-auto px-3 md:px-5 lg:px-7 bg-primary rounded-full text-lg md:text-[26px] text-white font-semibold md:font-extrabold font-mulish flex items-center gap-1 md:gap-2">
              Sign Up Now!
              <Image
                src={"/icons/arrow.svg"}
                alt="arrow"
                width={40}
                height={0}
                className="mt-2 hidden lg:block"
              ></Image>
            </button>
          </div>
          <div className="flex items-center w-full h-full">
            <button className="h-[50px] md:h-[62px] w-fit mx-auto px-3 md:px-5 lg:px-7 bg-primary rounded-full text-lg md:text-[26px] text-white font-semibold md:font-extrabold font-mulish flex items-center gap-1 md:gap-2">
              Sign In Now!
              <Image
                src={"/icons/arrow.svg"}
                alt="arrow"
                width={40}
                height={0}
                className="mt-2 hidden lg:block"
              ></Image>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreProduct;
