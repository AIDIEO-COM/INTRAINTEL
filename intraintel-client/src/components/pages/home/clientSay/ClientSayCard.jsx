import Image from 'next/image';
import React from 'react';

const ClientSayCard = ({profile, title, name, email}) => {
    return (
        <div className="client-say-card h-[178px] w-[340px] sm:w-[365px] py-6  px-6 flex flex-col justify-between">
                <p className="text-white font-bold text-sm"><span className="text-[#F7B603] pr-8">starstar</span>star</p>
                <p className="text-base md:text-xl font-normal font-mulish text-white">{title}</p>
                <div className="w-full h-fit flex items-center gap-[15px]">
                    <Image src={profile} alt="profile1" width={48} height={47} className="w-auto h-auto"></Image>
                    <div className="w-full h-fit -space-y-1.5">
                        <p className="text-white text-base md:text-lg font-medium">{name}</p>
                        <p className="text-[#EB4468] text-base font-normal">{email}</p>
                    </div>
                </div>
            </div>
    );
};

export default ClientSayCard;