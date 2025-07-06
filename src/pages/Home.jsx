import React from "react";
import HeroSection from "../components/UI/HeroSection";
import About from "./About";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="-mt-25">
      <About />
      </div>
    </>
  );
};

export default Home;
