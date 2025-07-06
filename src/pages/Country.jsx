import React, { useEffect, useState, useTransition } from "react";
import { getCountriesData } from "../api/CountryApi";
import Loader from "../components/UI/Loader";
import CountryCard from "../components/layout/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountriesData();
      setCountries(res.data);
    });
  }, []);

  console.log(countries);
  if (isPending) {
    return <Loader />;
  }

  const searchCountry = (currCountry) => {
    return currCountry.name.common.toLowerCase().includes(search.toLowerCase());
  };

  const filterCountries = (currCountry) => {
    if (filter === "all") return currCountry;
    return currCountry.region === filter;
  };

  const filteredCountries = countries.filter(
    (currCountry) => searchCountry(currCountry) && filterCountries(currCountry)
  );

  return (
    <div className="content min-h-[48.5vh] mt-25 mb-10">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <ul className="grid grid-cols-1 600:grid-cols-2 600:gap-15 900:grid-cols-3 xl:grid-cols-4 gap-7 justify-items-center">
        {filteredCountries.map((currCountry) => {
          return (
            <CountryCard
              key={currCountry.name.official}
              currCountry={currCountry}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Country;
