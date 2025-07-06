import React from "react";

const CountryInterestingFacts = ({ currCountry }) => {
  const { id, countryName, capital, population, region, interestingFact } =
    currCountry;
  return (
    <div
      key={id}
      className="bg-gradient-to-br from-[#080509] via-[#1d1919] to-[#080509] p-8 mx-3 border border-gray-500 rounded-2xl"
    >
      <div className="text-sm tracking-tight">
        <h1 className="text-2xl mb-4 font-semibold underline underline-offset-4">
          {countryName}
        </h1>
        <p className="mb-2">
          <span className="text-lg font-semibold mr-2">Capital:</span>{capital}
        </p>
        <p className="mb-2">
          <span className="text-lg font-semibold mr-2">Population:</span>{population}
        </p>
        <p className="mb-2">
          <span className="text-lg font-semibold mr-2">Region:</span>{region}
        </p>
        <p className="mb-2">
          <span className="text-lg font-semibold mr-2">InterestingFact:</span>{interestingFact}
        </p>
      </div>
    </div>
  );
};

export default CountryInterestingFacts;
