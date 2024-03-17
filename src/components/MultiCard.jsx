import React from "react";
import Multicard from "../assets/Multi-cards.png";
const MultiCard = () => {
  return (
    <div className="bg-[#000] flex  justify-center items-center mx-auto py-20 md:px-0 px-6">
      <div className="flex md:flex-row flex-col-reverse gap-6">
        <div>
          <img src={Multicard} alt="multicard" />
        </div>
        <div className=" w-[88vw] md:w-[519px] flex justify-center flex-col items-start">
          <h2 className="heading2 text-[80px] leading-[96px] font-bold mt-4">Brand</h2>
          <p className="text-white text-[19px] leading-[32px] font-normal mt-6">
            Automate your influencer marketing journey from day zero with the
            magic of data and AI, creating impact for your brand, tracking
            performance and achieving results.
          </p>
          <div className="flex md:flex-row w-full flex-col gap-6 md:gap-8 mt-6">
            <button
              type="button"
              className="text-[#090B0B]  text-[20px] bg-[#19C2D9] hover:bg-[#3b8b96]  font-medium rounded-md px-5 py-2.5 me-2 mb-2 flex justify-center items-center"
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
            <button
              type="button"
              className="text-white  bg-transparent border border-gray-300 focus:outline-none  font-medium rounded-md text-[20px] px-5 py-2.5 me-2 mb-2 "
            >
             More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCard;
