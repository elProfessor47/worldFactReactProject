import React from "react";
import CountriesData from "../api/CountriesData.json";
import { DiVim } from "react-icons/di";
import CountryInterestingFacts from "../components/layout/CountryInterestingFacts";

const About = () => {
  return (
    <div className="content flex flex-col justify-center mt-30 mb-12 font-poppins tracking-wide">
      <h1 className="text-3xl font-semibold text-center tracking-wider leading-10">
        Explore Fascinating Facts About
        <br />
        Our World
      </h1>
      <div className="content justify-items-center grid grid-cols-3 gap-5 mt-10">
        {CountriesData.map((currCountry) => {
          return <CountryInterestingFacts key={currCountry.id} currCountry={currCountry}/>
        })}
      </div>
    </div>
  );
};

export default About;
