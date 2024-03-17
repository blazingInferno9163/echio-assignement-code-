import React from "react";
import Light from "../assets/light.png";
const HeroSection = () => {
  return (
    <div className="bg-gradient-to-t flex  justify-center flex-col from-[#000] to-[#181717] pt-16 md:pt-36">
      <div className="flex justify-center items-center md:mb-16">
        <div className="flex md:flex-col md:text-[110px] text-[32px] flex-row text-center gap-2">
          <h2 className=" font-bold leading-[89px] heading1 mb-3">
            Makes You
          </h2>
          <h2 className=" font-bold leading-[89px] heading2">
            Viral.
          </h2>
        </div>
      </div>
      <div className="flex md:flex-row md:items-start items-center  flex-col-reverse gap-8 md:ml-16">
        <div className="md:w-[411px] w-[88vw] flex flex-col items-center">
          <p className="text-white text-center mb-5 text-[20px] md:mt-6">
            Dive into Echio&apos;s AI-driven ecosystem and explore the
            intriguing possibilities lying with redefined influencer experience
            for all.
          </p>
          <button
            type="button"
            class="text-[#090B0B] text-[20px] w-full  md:w-auto mb-6 bg-[#19C2D9] hover:bg-[#3b8b96]  font-medium rounded-md px-5 py-2.5 me-2 md:mb-2 flex justify-center items-center"
          >
            Get Started{" "}
            <svg
              width="35"
              height="34"
              viewBox="0 0 35 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0005 22.3623L21.9995 11.6377"
                stroke="#090B0B"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.1377 12.5005L21.9995 11.6377L22.8623 21.4995"
                stroke="#090B0B"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div>
          <img src={Light} alt="light" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
