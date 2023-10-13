import SectionTitle from "@/components/common/SectionTitle";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-fit relative">
      <div className="max-width section-gap">
        <SectionTitle>Contact Us</SectionTitle>
        <div className="w-full h-full grid lg:grid-cols-2 gap-[60px]">
          <div className="w-full h-full mx-auto max-w-[559px] min-h-[502px]  px-7 py-7 sm:px-10 py-5 sm:py-10 contact-form">
            <h1 className="text-3xl md:text-[40px] font-extrabold font-manrope text-white">
              Get In Touch
            </h1>
            <form className="w-full h-fit mt-[50px] space-y-5">
              <input
                className="h-[62px] text-3xl text-white font-manrope w-full outline-none px-5 md:px-7 placeholder:text-white"
                style={{
                  borderRadius: "110px",
                  background:
                    "linear-gradient(0deg, rgba(185, 54, 245, 0.25) 0%, rgba(185, 54, 245, 0.25) 100%), rgba(185, 54, 245, 0.25)",
                  boxShadow: "0px 60px 50px -40px #F284EE",
                }}
                placeholder="Email"
                type="email"
              ></input>
              <input
                className="h-[62px] text-3xl text-white font-manrope w-full outline-none px-5 md:px-7 placeholder:text-white"
                style={{
                  borderRadius: "110px",
                  background:
                    "linear-gradient(0deg, rgba(185, 54, 245, 0.25) 0%, rgba(185, 54, 245, 0.25) 100%), rgba(185, 54, 245, 0.25)",
                  boxShadow: "0px 60px 50px -40px #F284EE",
                }}
                placeholder="Subject"
                type="text"
              ></input>
              <input
                className="h-[62px] text-3xl text-white font-manrope w-full outline-none px-5 md:px-7 placeholder:text-white"
                style={{
                  borderRadius: "110px",
                  background:
                    "linear-gradient(0deg, rgba(185, 54, 245, 0.25) 0%, rgba(185, 54, 245, 0.25) 100%), rgba(185, 54, 245, 0.25)",
                  boxShadow: "0px 60px 50px -40px #F284EE",
                }}
                placeholder="Message"
                type="text"
              ></input>
              <div className="w-full flex justify-center pt-[37px]">
                <button className="h-[62px] w-fit mx-auto px-5 lg:px-7 bg-primary rounded-full text-[26px] text-white font-extrabold font-mulish">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="w-full h-full lg:flex flex-col justify-around text-3xl font-mulish text-white hidden ">
            <p className="max-w-[570px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit. consectetur adipiscing elit. consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
