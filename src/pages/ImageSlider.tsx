import { useState } from "react";
import { PiArrowFatLeftLight, PiArrowFatRight } from "react-icons/pi";
import "./Slider.css"

interface ImageUrlProps {
  ImageUrls: string[];
}

const ImageSlider = ({ ImageUrls }: ImageUrlProps) => {
  const [index, setIndex] = useState(0);

  const handleNextBtn = () => {
    setIndex((index) => (index === ImageUrls.length - 1 ? 0 : index + 1));
  };

  const handlePrevBtn = () => {
    setIndex((index) => (index === 0 ? ImageUrls.length - 1 : index - 1));
  };

  return (
    <>
      <div className="flex overflow-hidden">
        {ImageUrls.map((url) => (
          <img
            className={`h-[100vh] w-full object-cover img-transition-trans flex-grow-0 flex-shrink-0 `}
            src={url}
            alt=""
            style={{ translate: `${-100 * index}%` }}
          />
        ))}
      </div>
      <button
        onClick={() => {
          handleNextBtn();
        }}
        className="font-[800] text-xl absolute transition delay-100 ease-in top-[50%] right-[5%] bg-[#00000036] text-white cursor-pointer  p-2 md:hover:bg-[#0000009f] rounded-lg shadow-orange-50 shadow-md"
      >
        <PiArrowFatRight size={30} className="slider-btn-animate" />
      </button>
      <button
        onClick={() => handlePrevBtn()}
        className="font-[800] text-xl absolute transition delay-100 ease-in top-[50%] left-[5%] bg-[#00000036] text-white cursor-pointer p-2 md:hover:bg-[#0000009f] rounded-lg shadow-orange-50 shadow-md"
      >
        <PiArrowFatLeftLight size={30} className="slider-btn-animate" />
      </button>
    </>
  );
};

export default ImageSlider;
