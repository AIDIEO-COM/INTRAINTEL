"use client";
import navData from "@/data/routesData/navData";
import Image from "next/image";
import React, { useState } from "react";
import NavLink from "../navLinks/NavLinks";
import ToggleBtn from "./ToggleBtn";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className="max-w-[1720px] mx-auto px-1  sm:px-3 md:px-6 lg:px-7">
      <div className="w-full h-fit py-3 md:py-[22px] flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-0 sm:gap-1 xl:gap-2">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={200}
            height={200}
            className="w-[60px] h-[47px] sm:w-[99px] sm:h-[86px]"
          ></Image>
          <p className="uppercase font-roboto text-lg sm:text-2xl xl:text-[30px] font-extrabold text-white">
            IntraIntel<span className="text-[#F284EE]">.Ai</span>
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          {/* themes toggle for mobiles */}
          <span className="lg:hidden inline-block">
            <ToggleBtn></ToggleBtn>
          </span>
          {/* menu bar for mobile devices */}
          <button
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            className="lg:hidden sm:pr-2"
          >
            <Image
              src={"/icons/menu.svg"}
              alt="menubar"
              width={48}
              height={34}
              className="w-[34px] h-[18px] sm:w-[40px] sm:h-[26px]"
            ></Image>
          </button>
        </div>
        {/* backdrop */}
        {menuIsOpen && (
          <button
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            className="bg-black bg-opacity-25 fixed top-0 left-0 right-0 bottom-0 z-[99] lg:hidden"
          ></button>
        )}
        {/* navLinks and theme toggle */}
        <div
          className={`flex flex-col lg:flex-row lg:items-center gap-7 xl:gap-10 2xl:gap-14 ${
            menuIsOpen
              ? "fixed h-screen z-[100] lg:h-fit top-0 right-0  bottom-0 lg:relative w-[70%] sm:w-full lg:w-fit max-w-[300px] lg:max-w-none pt-12 pl-10 sm:pl-14 lg:p-0 bg-secondary border-l-2 border-white lg:border-none"
              : "hidden lg:flex"
          }`}
        >
          {navData.map(({ path, title }) => (
            <div key={path} className="text-[#dedcdc]">
              <NavLink
                exact={path === "/"}
                activeClassName="text-white font-bold"
                href={path}
                className=" font-mulish text-base xl:text-xl"
              >
                {title}
              </NavLink>
            </div>
          ))}
          {/* themes toggle for desktop*/}
          <span className="hidden lg:inline-block">
            <ToggleBtn></ToggleBtn>
          </span>
          {/* login and sign up */}
          <div className="w-fit h-full flex flex-col lg:flex-row items-start lg:items-center gap-2 sm:gap-5 xl:gap-8">
            <button className="font-mulish text-base xl:text-xl text-[#dedcdc]">
              Login
            </button>
            <div className="w-[2px] h-[30px] bg-white hidden lg:inline-block"></div>
            <button className="h-[47px] px-4 xl:px-5 font-mulish bg-white text-black text-base xl:text-xl font-semibold rounded-full">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
