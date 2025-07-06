import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Country", path: "/country" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="z-10 h-20 bg-[#202020] w-full fixed top-0">
      <div className=" content grid grid-cols-[.5fr_1fr] h-20 items-center">
        <NavLink to="/">
          <div className="text-3xl font-semibold text-white">Factoria</div>
        </NavLink>

        <nav className="hidden md:block">
          <ul className="flex justify-end gap-8 text-white text-base lg:text-lg">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-white" : "" 
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex md:hidden justify-end">
          {!showNav ? (
            <GiHamburgerMenu
              onClick={() => setShowNav(true)}
              className="text-3xl text-white"
            />
          ) : (
            <MdCancel
              onClick={() => setShowNav(false)}
              className="text-3xl bg-white rounded-full text-black"
            />
          )}
        </div>

        {showNav && (
          <nav className="absolute left-0 top-20 w-full bg-[#202020] z-50">
            <ul className="flex items-center flex-col text-[18px] gap-6 py-3 text-white ">
              {navItems.map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "border-b-2 border-white" : ""
                    }
                    onClick={() => {
                      setShowNav(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
