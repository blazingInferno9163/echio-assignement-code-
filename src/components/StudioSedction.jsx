import React from "react";
import studio from "../assets/Group 6300.png";
import Man from '../assets/Image (3).png'
import studiomob from '../assets/Image (4).png'

const StudioSedction = () => {
  return (
    <div className="bg-[#000] px-6 md:px-0 flex flex-col justify-center items-center py-16">
      <div className=" flex flex-col text-center w-[88vw] md:w-[60vw] justify-center items-start md:items-center mb-16">
        <h2 className="heading2 text-[36px] md:text-[80px] md:leading-[96px] font-bold mt-4">
          Studio
        </h2>
        <p className="text-[#fff] text-[19px] text-start leading-[32px] font-normal mt-6">
          A place for executing what's possible, our studio is ready to meet
          every requirement of the content creation journey along with special
          catering to brand’s advertising requirements
        </p>
      </div>
      <div>
        <img src={studio} alt="studio" className="md:block hidden" />
        <img src={Man} alt="studio" className="md:hidden block mb-8" />
        <img src={studiomob} alt="studio" className="md:hidden block" />
      </div>
    </div>
  );
};

export default StudioSedction;
