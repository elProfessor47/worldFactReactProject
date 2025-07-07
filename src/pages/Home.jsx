import React, { useEffect } from "react";
import HeroSection from "../components/UI/HeroSection";
import About from "./About";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
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
