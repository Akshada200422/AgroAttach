import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className="relative w-full">
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className="w-full hidden md:block max-w-[1300px] max-h-[550px]"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className="w-full md:hidden max-w-[600px] max-h-[500px] "
      />

      <div className="absolute inset-0 flex flex-col items-end justify-start pt-60 px-4 md:pr-18 lg:pr-24">
        <h1 className="text-3xl text-white z-10 md:text-4xl lg:text-5xl font-bold text-right max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15 mt-2">
          Harvest savings, cultivate sustainability
        </h1>
        <h2 className="text-white text-1xl">—Your Trusted Argo Resale Hub!</h2>

        <div className="flex items-center mt-6 font-medium gap-9">
          <Link
            to={"/products"}
            className="group flex item-center  px-7 md:px-9 py-2 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer"
          >
            Shop Now
            <img
              className="md:hidden transition gap-4 group-focus:translate-x-1"
              src={assets.white_arrow_icon}
              alt="arrow"
            />
          </Link>
          <Link
            to={"/products"}
            className="bg-primary text-white z-10 group hidden md:flex items-center justify-center gap-1 px-7 md:px-6 py-2 rounded-md font-semibold hover:bg-primary-dull transition duration-300"
          >
            Explore Deals
            <img
              className="transition-transform duration-200 group-hover:translate-x-1"
              src={assets.white_arrow_icon}
              alt="arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
