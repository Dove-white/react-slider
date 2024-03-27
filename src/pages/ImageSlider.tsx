import { useState } from "react";
import { PiArrowFatLeftLight, PiArrowFatRight } from "react-icons/pi";
import "./Slider.css";
import { LuCircleDot } from "react-icons/lu";
import { MdOutlineCircle } from "react-icons/md";

interface ImageUrlProps {
  ImageUrls: string[];
  className?: string;
}

const ImageSlider = ({ ImageUrls, className }: ImageUrlProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleNextBtn = () => {
    setImageIndex((index) => (index === ImageUrls.length - 1 ? 0 : index + 1));
  };

  const handlePrevBtn = () => {
    setImageIndex((index) => (index === 0 ? ImageUrls.length - 1 : index - 1));
  };

  return (
    <section className={`max-md:relative  max-md:h-[20rem] ${className}`}>
      <div className="flex w-full h-full overflow-hidden">
        {ImageUrls.map((url, index) => (
          <img
            key={index}
            className={`h-[100vh]  max-md:h-[100%] w-full object-cover img-transition-trans flex-grow-0 flex-shrink-0 `}
            src={url}
            alt=""
            style={{ translate: `${-100 * imageIndex}%` }}
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
      <div className="absolute bottom-5 right-[50%] translate-x-[50%] flex gap-4">
        {ImageUrls.map((_, index) => (
          <button
            key={index}
            onClick={() => setImageIndex(index)}
            className=" text-white"
          >
            {index === imageIndex ? (
              <LuCircleDot className="bg-black rounded-full" />
            ) : (
              <MdOutlineCircle className="bg-black rounded-full" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
