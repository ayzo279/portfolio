import React from "react";
import Logo from "../assets/images/my_logo.png";

const Navbar: React.FC = () => {
  return (
    <div className="px-[4vw] h-[15vh] flex justify-between items-center">
      <a href="/">
        <div className="flex flex-row items-center ">
          <img
            className="w-[6vw]"
            src={Logo}
            alt="Logo of an abstract A and Z styled as an infinity symbol"
          />
          <p className="text-[3vw] font-extralight">ANDY ZHUO</p>
        </div>
      </a>
      <div className="flex flex-row items-center font-medium text-[1.2vw] space-x-[4vw]">
        <a href="/" className="hover:text-teal-300">
          HOME
        </a>
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
