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
    <footer className="bg-[#151414] font-poppins">
      <div className="content grid grid-cols-1 700:grid-cols-2 700:gap-7 lg:grid-cols-3 text-sm gap-10 items-center py-5">
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
      <div className="bg-[#202020]">
        <div className="content grid grid-cols-1 lg:grid-cols-2 lg:text-left items-center text-center  gap-2 py-5">
          <div className="text-[#878787] leading-6">
            Copyright &copy; 2024, All Right Reserved
          </div>
          <div>
            <ul className="flex flex-col lg:flex-row lg:justify-end gap-2 text-[#878787]">
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
