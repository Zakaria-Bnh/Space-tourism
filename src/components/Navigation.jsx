import { useState } from "react";
import { IconClose, IconHamburger, Logo } from "../assets/shared/index";
import { Link, useLocation } from "react-router-dom";
import {data} from "../data/data";

const Navigation = () => {
  const [isOpen, setisOpen] = useState(false);
  const {pathname} = useLocation()

  const HandleToggleMenu = () => setisOpen((prev) => !prev);

  return (
    <nav className="flex items-center sm:items-stretch justify-between">
      {/* this is the logo  */}
      <Link to="/home" className="py-6 lg:py-3 mr-12">
        <img src={Logo} alt="space tourism company logo" />
      </Link>
      {/* menu toggle hamburger/close-menu */}
      <img
        src={isOpen ? IconClose : IconHamburger}
        className="z-10 sm:hidden"
        onClick={HandleToggleMenu}
        alt="menu icon"
      />
      {/* navigation links and line through */}
      <div
        className={`flex-1 sm:flex justify-end items-center ${
          isOpen
            ? "absolute w-[80%] h-full top-0 pt-[20vh] right-0 pl-[10vw] ml-auto backdrop-blur-55"
            : "hidden sm:flex"
        }`}
      >
        <div className="line-through | hidden sm:block h-[1px] bg-gray-500 w-full mr-[-1.5rem] z-10"></div>
        <ul className={`flex flex-col h-full sm:flex-row sm:pr-[12%] sm:pl-8 md:pl-10 sm:backdrop-blur-55 gap-8 sm:gap-4 text-white`}>
          {data.navLinks.map( link => (
            <li key={link.key} className="flex items-center justify-start sm:justify-center relative">
              <Link to={link.url}>
                <span className="font-bold mr-1 sm:hidden lg:inline">{link.number}</span>
                {link.text}
              </Link>
              <div className={`${pathname === link.url ? 'active-line | hidden sm:block absolute h-[2px] w-full bg-white bottom-0': 'hidden'}`}></div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
