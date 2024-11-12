import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  leftAlign: boolean;
  projectType: string;
  title: string;
  workType: string;
  year: string;
  description: string;
  preview: string;
  linkTo: string;
  gradient: string;
}

const ProjectCard: React.FC<CardProps> = ({
  leftAlign,
  projectType,
  title,
  workType,
  year,
  description,
  preview,
  linkTo,
  gradient,
}) => {
  return (
    <div
      className={`flex ${
        leftAlign ? "flex-row" : "flex-row-reverse"
      } justify-between items-center px-[8vw] h-[33.33vw] bg-cover bg-center ${gradient}`}
    >
      <div className={`flex flex-col space-y-[4.5vw] items-center w-[30vw] ${leftAlign ? 'ml-[6vw]' : 'mr-[4vw]'}`}>
        <div className="flex flex-col space-y-[4vw] items-start">
          <div className="text-left">
            <p className="text-[1.05vw] leading-[0.5vw]">{projectType}</p>
            <p className="text-[4vw] font-semibold leading-[4vw]">{title}</p>
          </div>
          <div className="text-[1.05vw] leading-[1.5vw]">
            <p>
              {workType} • {year}
            </p>
            <div className="my-[0.5vw] w-[6vw] h-[1px] bg-white"></div>
            <p className="max-w-[23vw]">{description}</p>
          </div>
        </div>
        <div className="items-center">
          <Link
            to={linkTo}
            className="border-2 px-[1vw] py-[0.75vw] hover:bg-white hover:text-slate-950 text-[1.25vw] leading-[1.25vw]"
          >
            VIEW CASE
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center min-w-[50vw]">
      <img src={preview} className="h-[27vw]" />
      </div>
    </div>
  );
};

export default ProjectCard;
