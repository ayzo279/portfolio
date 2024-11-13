import React, { useState } from "react";

type CarouselProps = {
  children: React.ReactNode;
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = React.Children.toArray(children);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="relative">
      <div className="relative overflow-hidden">
        {/* Carousel Content */}
        <div
          className="flex transition-transform duration-300 w-[50vw] ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              {item}
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={prevItem}
        className="absolute top-1/2 left-[-2vw] transform -translate-y-1/2 text-white"
      >
        &#10094;
      </button>
      <button
        onClick={nextItem}
        className="absolute top-1/2 right-[-2vw] transform -translate-y-1/2 text-white"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
