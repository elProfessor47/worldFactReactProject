import React from "react";

const SearchFilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {
  const filterObj = [
    { value: "all", display: "All" },
    { value: "Africa", display: "Africa" },
    { value: "Americas", display: "Americas" },
    { value: "Asia", display: "Asia" },
    { value: "Europe", display: "Europe" },
    { value: "Oceania", display: "Oceania" },
  ];

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "ASC" 
      ? a.name.common.localeCompare(b.name.common)
      : b.name.common.localeCompare(a.name.common)
    })
    setCountries(sortCountry)
  }

  return (
    <div className="flex justify-around items-center h-25 mb-5">
      <input
        className="border border-gray-500 my-3 px-5 py-2 rounded-xl w-60 h-10"
        type="text"
        placeholder="Search Country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      <button onClick={() => sortCountries("ASC")} className=" bg-gray-800 px-8 py-2 h-10 rounded-full border border-gray-400 cursor-pointer">Ascending Order</button>
      <button onClick={() => sortCountries("DESC")} className=" bg-gray-800 px-8 py-2 h-10 rounded-full border border-gray-400 cursor-pointer">Descending Order</button>
      <select
        className="border cursor-pointer border-gray-500 h-10 my-3 px-5 py-2 rounded-xl w-60 bg-black text-gray-500 outline-none"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        {filterObj.map((currOption) => (
          <option className="cursor-pointer" value={currOption.value}>{currOption.display}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter;
