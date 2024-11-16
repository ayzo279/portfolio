import React from "react";
import Logo from "/images/my_logo.png";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {

  return (
    <div className="px-[4vw] h-[15vh] flex justify-between items-center">
      <Link to="/">
        <div className="flex flex-row items-center ">
          <img
            className="w-[6vw]"
            src={Logo}
            alt="Logo of an abstract A and Z styled as an infinity symbol"
          />
          <p className="text-[3vw] font-extralight">ANDY ZHUO</p>
        </div>
      </Link>
      <div className="flex flex-row items-center font-medium text-[1.2vw] space-x-[4vw]">
        <Link to="/" className="hover:text-teal-300">
          HOME
        </Link>
        <a href="#contact" className=" hover:text-teal-300">
          CONTACT
        </a>
        <a
          href="/Andy_Zhuo_resume.pdf"
          target="_blank"
          className=" hover:text-teal-300"
        >
          RESUME
        </a>
      </div>
    </div>
  );
};

export default Navbar;
