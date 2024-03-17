import React from "react";
import Applepromo from "../assets/App promo.png";
import Applepromo1 from "../assets/App promo (1).png";
const Mobilesection = () => {
  return (
    <div className="bg-[#fff] flex flex-col justify-center items-center mx-auto py-4 md:py-20 md:px-0 px-6">
      <div className="flex md:flex-row flex-col-reverse gap-10 my-10">
        <div className=" w-[88vw] md:w-[519px] flex justify-center flex-col items-start">
          <h2 className="heading2 text-[80px] leading-[96px] font-bold mt-4 md:block hidden">
            Influencers
          </h2>
          <p className="text-[#000] text-[19px] leading-[32px] font-normal mt-6">
            Yes influencers, we have an exclusive place just for you, with not
            just catching up with the trends but creating ones, facilitating
            your growth, taking care of your everyday requirements and topping
            it off with monetization.
          </p>
          <div className="flex md:flex-row flex-col w-full gap-6 md:gap-8 mt-6">
            <button
              type="button"
              className="text-[#fff] text-[20px] bg-[#000]   font-medium rounded-md px-5 py-2.5 me-2 mb-2 flex justify-center items-center"
            >
              View Services{" "}
              <svg
                width="34"
                height="35"
                viewBox="0 0 34 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4065 23.1577L21.4055 12.4331"
                  stroke="white"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.5437 13.2959L21.4055 12.4331L22.2683 22.2949"
                  stroke="white"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="text-[#000] bg-transparent border border-[#000] focus:outline-none  font-medium rounded-md text-[20px] px-5 py-2.5 me-2 mb-2 "
            >
              More Details
            </button>
          </div>
        </div>
        <div>
        <h2 className="heading2 text-[36px] md:text-[80px] md:leading-[96px] font-bold mb-4 md:hidden block">
            Influencers
          </h2>
          <img src={Applepromo} alt="multicard" />
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-10 mt-10 md:mt-48">
        <div>
        <h2 className="heading2 text-[36px] md:text-[80px] md:leading-[96px] md:hidden block font-bold mb-4">
            Our Services
          </h2>
          <img src={Applepromo1} alt="multicard" />
        </div>

        <div className="w-[88vw] md:w-[519px] flex justify-center flex-col items-start ">
          <h2 className="heading2 text-[80px] leading-[96px] md:block hidden font-bold mt-4">
            Our Services
          </h2>
          <p className="text-[#000] text-[19px] leading-[32px] font-normal mt-6">
            Yes influencers, we have an exclusive place just for you, with not
            just catching up with the trends but creating ones, facilitating
            your growth, taking care of your everyday requirements and topping
            it off with monetization.
          </p>
          <div className="flex md:flex-row flex-col w-full gap-6 md:gap-8 mt-6">
            <button
              type="button"
              className="text-[#fff] text-[20px] bg-[#000]  font-medium rounded-md px-5 py-2.5 me-2 mb-2 flex justify-center items-center"
            >
              View Services{" "}
              <svg
                width="34"
                height="35"
                viewBox="0 0 34 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4065 23.1577L21.4055 12.4331"
                  stroke="white"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.5437 13.2959L21.4055 12.4331L22.2683 22.2949"
                  stroke="white"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="text-[#000] bg-transparent border border-[#000] focus:outline-none  font-medium rounded-md text-[20px] px-5 py-2.5 me-2 mb-2 "
            >
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobilesection;
