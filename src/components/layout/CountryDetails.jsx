import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getIndividualCountryData } from "../../api/CountryApi";
import Loader from "../UI/Loader";
import { FaLongArrowAltRight } from "react-icons/fa";

const CountryDetails = () => {
  const params = useParams();
  const { id } = params;

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getIndividualCountryData(id);
      setCountry(res.data[0]);
      window.scrollTo(0,0)
    });
  }, [id]);

  if (isPending || !country) {
    return <Loader />;
  }

  const {
    name,
    borders,
    tld,
    population,
    region,
    subregion,
    flags,
    capital,
    currencies,
    languages,
  } = country;

  return (
    <div className="w-[85vw] mx-auto 500:w-[60vw] lg:w-[85vw] mt-20 p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-items-center lg:gap-10 items-center">
        {country && (
          <>
            <div className="mt-5">
              <img className="size-45 500:size-50 md:size-66 object-contain" src={flags.svg} alt="" />
            </div>
            <div className="flex flex-col gap-2 text-[15px] 500:text-[16px] md:text-lg lg:text-xl py-5 ">
              <h1 className="text-2xl my-5 font-bold tracking-wider">{name.official}</h1>
              <p>
                <span className="font-semibold underline underline-offset-4">Native names :</span>{" "}
                {Object.keys(name.nativeName)
                  .map((key) => name.nativeName[key].common)
                  .join(", ")}
              </p>
              <p>
                <span className="font-semibold underline underline-offset-4">Population :</span> {population}
              </p>
              <p>
                <span className="font-semibold underline underline-offset-4">Region :</span> {region}
              </p>
              <p>
                <span className="font-semibold underline underline-offset-4">Sub-Region :</span> {subregion}
              </p>
              <p>
                <span className="font-semibold underline underline-offset-4">Capital :</span> {capital[0]}
              </p>
              <p>
                <span className="font-semibold underline underline-offset-4">Languages :</span> {" "}
                {Object.keys(languages)
                  .map((currLanguage) => languages[currLanguage])
                  .join(", ")}
              </p>
              <p>
                <span className="font-semibold underline underline-offset-4">Borders :</span> {borders && borders.length > 0 ? borders.join(", ") : "No bordering countries"}
              </p>
              <p>
                <span className="font-semibold underline underline-offset-4">Top Level Domain :</span> "{tld}"
              </p>
              <p>
                <span className="font-semibold underline underline-offset-4">Currency :</span> {" "}
                {Object.keys(currencies).map(
                  (currCurrency) => currencies[currCurrency].name
                )}
              </p>
              <p>
                <span className="font-semibold underline underline-offset-4" > Currency Symbol :</span>{" "}
                {Object.keys(currencies).map(
                  (currCurrency) => currencies[currCurrency].symbol
                )}
              </p>
              <NavLink to="/country">
                <button className="inline-flex items-center gap-3 bg-gray-800 px-6 py-1 my-1 -ml-1 rounded-xl border border-gray-400 cursor-pointer mt-2">Go Back  <FaLongArrowAltRight/> </button>
              </NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CountryDetails;