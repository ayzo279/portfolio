import React from "react";

interface BannerProps {
  leftAlign: boolean;
  projectType: string;
  title: string;
  description: string;
  client: string;
  role: string;
  timeline: string;
  backgroundImage: string;
}

const Banner: React.FC<BannerProps> = ({
  leftAlign,
  projectType,
  title,
  description,
  client,
  role,
  timeline,
  backgroundImage,
}) => {
  return (
    <div
      className={`relative h-[85vh] bg-auto-110 bg-center ${backgroundImage}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black-translucent from-[23%] to-transparent to-[76%]" />
      <div className="absolute flex inset-0 items-center pl-[15vw]">
        <div className="flex flex-col space-y-[5vw]">
          <div className="flex flex-col space-y-[1vw]">
            <div>
              <p className="text-[1.2vw] leading-[1vw] font-light">
                {projectType}
              </p>
              <p className="text-[5vw] leading-[5vw] font-semibold pb-[1vw]">
                {title}
              </p>
            </div>
            <div className="h-[0.1vw] w-[16vw] bg-white" />
            <p className="max-w-[28vw] text-[1.2vw] leading-[1.5vw] font-light">
              {description}
            </p>
          </div>
          <div className="flex flex-col space-y-[0.5vw] text-[1.2vw] leading-[1.2vw]">
            <div className="flex flex-row space-x-[2vw]">
              <p className="font-semibold min-w-[5.5vw]">CLIENT</p>
              <p className="font-light min-w-[5.5vw]">{client}</p>
            </div>
            <div className="flex flex-row space-x-[2vw]">
              <p className="font-semibold min-w-[5.5vw]">MY ROLE</p>
              <p className="font-light min-w-[5.5vw]">{role}</p>
            </div>
            <div className="flex flex-row space-x-[2vw]">
              <p className="font-semibold min-w-[5.5vw]">TIMELINE</p>
              <p className="font-light min-w-[5.5vw]">{timeline}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
