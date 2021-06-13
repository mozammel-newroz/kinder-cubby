import React from "react";
import { useLocation } from "react-router-dom";
import NavBarOne from "./NavBarOne";

const NavBarMain = () => {
  const location = useLocation().pathname;
  if (
    location === "/documentation" ||
    location === "/try-it-free" ||
    location === "/contact-us" ||
    location === "/support-center"
  ) {
    return "";
  } else {
    return (
      <>
        <NavBarOne />
      </>
    );
  }
};

export default NavBarMain;
