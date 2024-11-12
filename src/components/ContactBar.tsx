import React from "react";
import { MailOutline, GitHub, LinkedIn } from "@mui/icons-material";

const ContactBar: React.FC = () => {
  return (
    <div id="contact">
      <div className="flex flex-col py-[4vw] items-center space-y-[1.5vw]">
        <p className="text-[1.5vw] leading-[1.5vw]">CONNECT WITH ME</p>
        <div className="flex flex-row space-x-[0.4vw]">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-white h-[0.15vw] w-[0.15vw]" />
          ))}
          <div className="bg-white h-[0.15vw] w-[9.75vw]" />
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-white h-[0.15vw] w-[0.15vw]" />
          ))}
        </div>
        <div className="flex flex-row items-center space-x-[2vw]">
          <a href="mailto:andyzhuo101@gmail.com">
            <MailOutline
              sx={{ fontSize: "2vw" }}
              className="hover:text-teal-300"
            />
          </a>
          <a href="https://github.com/ayzo279" target="_blank">
            <GitHub
              sx={{ fontSize: "1.8vw" }}
              className="hover:text-teal-300"
            />
          </a>
          <a href="https://linkedin.com/in/andyzhuo" target="_blank">
            <LinkedIn
              sx={{ fontSize: "2vw" }}
              className="hover:text-teal-300"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
