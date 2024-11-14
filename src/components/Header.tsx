import React from 'react'

interface HeaderProps {
    label: string,
    title: string,
    image?: string,
}

const Header:React.FC<HeaderProps> = ({label, title, image}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-[0.75vw]">
        <div className="flex flex-row space-x-[1vw] items-center">
            <div className="w-[3vw] h-[0.2vw] bg-white" />
            <p className="text-[1.5vw] leading-[1.5vw] font-bold">{label}</p>
            <div className="w-[3vw] h-[0.2vw] bg-white" />
        </div>
        <p className="text-[3vw] leading-[3vw] font-bold">{title}</p>
       {image ? (<div className="w-[60vw]"><img src={image} className="w-full pt-[1vw]"/></div>) : ""}
    </div>
  )
}

export default Header