import React from "react";
import graph from "../assets/Frame 1000001108.png";
const AgencySection = () => {
  return (
    <div className="bg-[#000] flex justify-center items-center mx-auto py-10 md:py-20 md:px-0 px-6">
      <div className="flex md:flex-row flex-col gap-10 md:gap-40">
        <div>
        <h2 className="heading2 md:hidden block text-[36px] leading-[96px] font-bold mt-4">
            Agency
          </h2>
          <img src={graph} alt="graph" className="w-[500px]" />
        </div>
        <div className=" w-[88vw] md:w-[519px] flex justify-center flex-col items-start">
          <h2 className="heading2 md:block hidden md:text-[80px] leading-[96px] font-bold mt-4">
            Agency
          </h2>
          <p className="text-white text-[19px] leading-[32px] font-normal mt-6">
            Echio believes in Promoting partnerships, which goes on to define us
            and our community approach. We believe in building mutually
            beneficial relationships with agencies, supporting each other and
            delivering the best output.
          </p>
          <div className="flex md:flex-row flex-col w-full gap-6 md:gap-8 mt-6">
            <button
              type="button"
              className="text-[#090B0B] text-[20px] bg-[#19C2D9] hover:bg-[#3b8b96]  font-medium rounded-md px-5 py-2.5 me-2 mb-2 flex justify-center items-center"
            >
              Agency Login{" "}
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
              className="text-white bg-transparent border border-gray-300 focus:outline-none  font-medium rounded-md text-[20px] px-5 py-2.5 me-2 mb-2 "
            >
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencySection;
