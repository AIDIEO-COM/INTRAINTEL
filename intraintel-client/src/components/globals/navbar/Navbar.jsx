import navData from "@/data/routesData/navData";
import Image from "next/image";
import React from "react";
import NavLink from "../navLinks/NavLinks";
import { BsMoonFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="max-w-[1720px] mx-auto sm:px-3 md:px-6 lg:px-7 xl:px-10">
      <div className="w-full h-fit py-[22px] flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-2">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={200}
            height={200}
            className="w-[99px] h-[86px]"
          ></Image>
          <p className="uppercase font-roboto text-[30px] font-extrabold text-white">
            IntraIntel<span className="text-[#F284EE]">.Ai</span>
          </p>
        </div>
        {/* navLinks and theme toggle */}
        <div className="flex items-center gap-10 xl:gap-14">
          {navData.map(({ path, title }) => (
            <div key={path} className="text-[#dedcdc]">
              <NavLink
                exact={path === "/"}
                activeClassName="text-white font-bold"
                href={path}
                className=" font-mulish text-xl"
              >
                {title}
              </NavLink>
            </div>
          ))}
          {/* themes toggle */}
          <div className="w-[129px] h-[47px] rounded-full bg-primary  relative">
            <div className="absolute w-full h-full z-[3]">
              <div className=" flex items-center justify-between w-full h-full z-[3] px-[12.5%] cursor-pointer">
                <Image
                  src={"/icons/light.svg"}
                  alt="light"
                  width={34}
                  height={32}
                ></Image>
                <BsMoonFill className="w-[31px] h-[27px] rotate-[215deg]" />
              </div>
            </div>
            {/* marker bg */}
            <div className="absolute right-0 top-0 bottom-0 w-[50%] z-[2] bg-white rounded-full "></div>
          </div>
          {/* login and sign up */}
          <div className="w-fit h-full flex items-center gap-8">
            <div className="font-mulish text-xl text-[#dedcdc]">Login</div>
            <div className="w-[2px] h-[30px] bg-white"></div>
            <button className="h-[47px] px-4 xl:px-5 font-mulish bg-white text-black text-xl font-semibold rounded-full">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
