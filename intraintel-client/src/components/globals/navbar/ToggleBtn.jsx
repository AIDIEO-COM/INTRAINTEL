import Image from 'next/image';
import React from 'react';
import { BsMoonFill } from 'react-icons/bs';

const ToggleBtn = () => {
    return (
        <div className="w-[85px] h-[34px] sm:h-[40px] md:w-[129px] md:h-[47px] rounded-full bg-primary  relative" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"}}>
            <div className="absolute w-full h-full z-[3]">
              <div className=" flex items-center justify-between w-full h-full z-[3] px-[12.5%] cursor-pointer">
                <Image
                  src={"/icons/light.svg"}
                  alt="light"
                  width={34}
                  height={32}
                  className='w-[27px] h-[26px] md:w-[34px] md:h-[32px]'
                ></Image>
                <BsMoonFill className="w-[21px] h-[23px] md:w-[31px] md:h-[27px] rotate-[215deg]" />
              </div>
            </div>
            {/* marker bg */}
            <div className="absolute right-0 top-0 bottom-0 w-[50%] z-[2] bg-white rounded-full "></div>
          </div>
    );
};

export default ToggleBtn;