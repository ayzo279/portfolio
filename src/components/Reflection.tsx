import React from "react";

interface ReflectionProps {
  reflections: string[][];
}

const Reflection: React.FC<ReflectionProps> = ({ reflections }) => {
  return (
    <div className="flex flex-col w-[50vw] space-y-[5vw]">
      <div className="flex flex-col space-y-[0.5vw]">
        <p className="text-[1.5vw] font-semibold">REFLECTIONS</p>
        <div className="w-[20vw] h-[0.1vw] bg-white" />
      </div>
      {reflections.map((reflection, index) => (
        <div
          key={index}
          className="flex flex-row space-x-[10vw] jutify-between"
        >
          <p className="italic text-[1.5vw] leading-[1.5vw] w-[10vw]">{reflection[0]}</p>
          <p className="w-[30vw]">{reflection[1]}</p>
        </div>
      ))}
    </div>
  );
};

export default Reflection;
