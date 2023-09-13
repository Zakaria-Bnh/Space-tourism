import { useState } from "react";
import { IconClose, IconHamburger, Logo } from "../assets/shared/index";
import { Link, useLocation } from "react-router-dom";
import Data from "../data/data.json";

const Navigation = () => {
  const [isOpen, setisOpen] = useState(false);
  const {pathname} = useLocation()

  const HandleToggleMenu = () => setisOpen((prev) => !prev);
  console.log(window.location.pathname);

  return (
    <nav className="flex items-center sm:items-stretch justify-between w-[90%] m-auto sm:ml-auto sm:mr-0 sm:w-[95%] ">
      {/* this is the logo  */}
      <Link to="/home" className="py-3 mr-12">
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
            ? "absolute w-[80%] h-full top-0 right-0 ml-auto bg-black"
            : "hidden sm:flex"
        }`}
      >
        <div className="line-through | hidden sm:block h-[1px] bg-gray-600 w-full mr-[-1.5rem] z-10"></div>
        <ul className={`flex flex-col h-full sm:flex-row sm:pr-[10%] sm:pl-8 md:pl-10 sm:backdrop-blur-55 gap-4 text-white`}>
          {Data.navLinks.map( (link, index) => (
            <li key={link.key} className="flex items-center justify-start sm:justify-center relative">
              <Link to={link.url}>
                <span className="font-bold mr-1 sm:hidden lg:inline">{link.number}</span>
                {link.text}
              </Link>
              <div className={`${pathname === link.url ? 'active-line | hidden sm:block absolute h-[1px] w-full bg-white bottom-0': 'hidden'}`}></div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
