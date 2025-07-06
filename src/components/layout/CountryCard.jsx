import React from "react";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const CountryCard = ({ currCountry }) => {
  const { flags, name, population, region, capital } = currCountry;

  return (
    <li className="flex flex-col justify-center bg-[#2e2e2e] items-center w-65 450:w-85 600:w-65 700:w-75 900:w-65 1100:w-77 xl:w-65 2xl:w-77 border border-gray-500 px-5 py-4 rounded-2xl shadow-[1px_1px_5px_2px_#2e2e2e] hover:shadow-[1px_1px_5px_5px_#2e2e2e] duration-300 shadow-gray-500 hover:scale-103 transition-all">
      <div>
        <img
          className="object-contain w-60 h-30 my-2"
          loading="lazy"
          src={flags?.svg}
          alt={flags?.alt}
        />
      </div>
      <div>
        <h1 className="text-center text-2xl font-poppins font-semibold truncate w-50 mt-4 mb-3">
          {name.common}
        </h1>

        <p className="mb-2 text-center">
          <span>Capital:</span>
          {capital[0]}
        </p>
        <p className="mb-2 text-center">
          <span>Population:</span>
          {population.toLocaleString()}
        </p>
        <p className="mb-2 text-center">
          <span>Region:</span>
          {region}
        </p>
        <NavLink to={`/country/${name.common}`}>
        <button className="cursor-pointer inline-flex items-center gap-3 justify-center bg-[#202020] border border-gray-500 px-8 py-1  rounded-full">
            Read More <FaLongArrowAltRight />
        </button>
        </NavLink>
      </div>
    </li>
  );
};

export default CountryCard;
