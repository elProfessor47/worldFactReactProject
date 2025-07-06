import React from "react";
import FooterData from "../../api/FooterData.json";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const iconsObj = {
    FaDiscord: <FaDiscord />,
    FaInstagram: <FaInstagram />,
    TbMailPlus: <TbMailPlus />,
  };
  return (
    <footer className="h-20 bg-[#151414] font-poppins">
      <div className="content grid grid-cols-3 gap-10 h-20 items-center">
        {FooterData.map((currObj) => {
          const { title, icon, details } = currObj;
          return (
            <div key={icon} className="flex gap-5 items-center">
              <div className="text-4xl text-blue-600">{iconsObj[icon]}</div>
              <div>
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-[#202020] h-18">
        <div className="h-18 content grid grid-cols-2 items-center">
          <div className="text-[#878787]">
            Copyright &copy; 2024, All Right Reserved
          </div>
          <div>
            <ul className="flex gap-5 justify-end text-[#878787]">
              <li className="hover:text-white">
                <NavLink
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                  className="underline underline-offset-4 decoration-[#878787] hover:decoration-white"
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:text-white">
                <NavLink
                  to="https://github.com/elProfessor47?tab=repositories"
                  target="_blank"
                  className="underline underline-offset-4 decoration-[#878787] hover:decoration-white"
                >
                  Github Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
