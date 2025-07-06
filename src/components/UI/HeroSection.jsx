import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <main className="mt-20 400:text-center 800:text-left">
      <div className="content h-auto grid grid-cols-1 800:grid-cols-2 items-center py-5 my-6">
        <div>
          <h1 className="text-[28px] lg:text-[32px] leading-10 font-semibold mb-2">
            Discover the World, One Country at a Time.
          </h1>
          <p className="text-lg leading-6 mb-4">
            Uncover the history, culture, and beauty of every nation. Search,
            explore, and filter through countries to find the information you
            need.
          </p>
          <NavLink to="/country">
            <button className="inline-flex items-center gap-3 bg-gray-800 px-8 py-2 rounded-full border border-gray-400 cursor-pointer">
              Begin Your Journey <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>
        <div className="flex items-center justify-center lg:justify-end">
          <img
            className="size-70 800:size-80 lg:size-90 mt-4 object-cover"
            src="/images/globe.png"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
