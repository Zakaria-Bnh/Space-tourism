import { BgHomeDesktop, BgHomeMobile, BgHomeTablet } from "../assets/home";
import {
  BgDestinationDesktop,
  BgDestinationMobile,
  BgDestinationTablet,
} from "../assets/destination";
import { BgCrewDesktop, BgCrewMobile, BgCrewTablet } from "../assets/crew";
import {
  BgTechnologyDesktop,
  BgTechnologyMobile,
  BgTechnologyTablet,
} from "../assets/technology";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BgImage = ({ children }) => {
  const { pathname } = useLocation();
  const [currentbg, setcurrentbg] = useState(null);

  const paths = {
    "/": {
      mobile: BgHomeMobile,
      tablet: BgHomeTablet,
      desktop: BgHomeDesktop,
    },
    "/home": {
      mobile: BgHomeMobile,
      tablet: BgHomeTablet,
      desktop: BgHomeDesktop,
    },
    "/destination": {
      mobile: BgDestinationMobile,
      tablet: BgDestinationTablet,
      desktop: BgDestinationDesktop,
    },
    "/crew": {
      mobile: BgCrewMobile,
      tablet: BgCrewTablet,
      desktop: BgCrewDesktop,
    },
    "/technology": {
      mobile: BgTechnologyMobile,
      tablet: BgTechnologyTablet,
      desktop: BgTechnologyDesktop,
    },
  };

  console.log(paths[pathname].mobile);
  const { mobile, tablet, desktop } = paths[pathname];
  const HandleBgImg = () => {
    if (window.innerWidth < 640) {
      return setcurrentbg(mobile);
    } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
      return setcurrentbg(tablet);
    } else if (window.innerWidth >= 1024) {
      return setcurrentbg(desktop);
    }
  };
  useEffect(() => {
    HandleBgImg();
    window.addEventListener("resize", HandleBgImg);
    return () => {
      window.removeEventListener("resize", HandleBgImg);
    };
  }, [pathname]);

  return (
    <div
      className="bg-cover  bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${currentbg})` }}
    >
      {children}
    </div>
  );
};

export default BgImage;
