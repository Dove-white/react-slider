import { useEffect, useRef, useState } from "react";
import { PiArrowFatLeftLight, PiArrowFatRight } from "react-icons/pi";
import "./Slider.css";
import { LuCircleDot } from "react-icons/lu";
import { MdOutlineCircle } from "react-icons/md";

interface ImageUrlProps {
  images: {
    url: String;
    alt: string;
  }[];
  className?: string;
}

const ImageSlider = ({ images, className }: ImageUrlProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [stop, setStop] = useState(false);
  const timeoutIdRef = useRef<number | null>(null);

  const handleNextBtn = () => {
    setStop(true);
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  const handlePrevBtn = () => {
    setStop(true);
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  function startTimeout() {
    timeoutIdRef.current = setTimeout(
      () =>
        imageIndex === images.length - 1
          ? setImageIndex(0)
          : setImageIndex(imageIndex + 1),
      5000
    );
  }

  function clearTimeoutOnCondition() {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }
  }

  useEffect(() => {
    if (stop) {
      setTimeout(clearTimeoutOnCondition, 0);
      setTimeout(() => setStop(false), 7000);
    }

    if (stop === false) {
      startTimeout();
    }
  }, [imageIndex, stop]);

  return (
    <section className={`max-md:relative  max-md:h-[20rem] ${className}`}>
      <div className="flex w-full h-full overflow-hidden">
        {images.map(({ url, alt }, index) => (
          <img
            key={index}
            className={`h-[100vh]  max-md:h-[100%] w-full object-cover img-transition-trans flex-grow-0 flex-shrink-0 `}
            src={`${url}`}
            alt={alt}
            aria-hidden={imageIndex !== index}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={() => {
          handleNextBtn();
        }}
        aria-label="slider next button"
        className="font-[800] text-xl absolute transition delay-100 ease-in top-[50%] right-[5%] bg-[#00000036] text-white cursor-pointer  p-2 md:hover:bg-[#0000009f] rounded-lg shadow-orange-50 shadow-md"
      >
        <PiArrowFatRight size={30} aria-hidden className="slider-btn-animate" />
      </button>
      <button
        onClick={() => handlePrevBtn()}
        aria-label="slider previous button"
        className="font-[800] text-xl absolute transition delay-100 ease-in top-[50%] left-[5%] bg-[#00000036] text-white cursor-pointer p-2 md:hover:bg-[#0000009f] rounded-lg shadow-orange-50 shadow-md"
      >
        <PiArrowFatLeftLight
          aria-hidden
          size={30}
          className="slider-btn-animate"
        />
      </button>
      <div className="absolute bottom-5 right-[50%] translate-x-[50%] flex gap-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setImageIndex(index);
              setStop(true);
            }}
            className=" text-white preview-btn"
            aria-label={`Show slider ${index}`}
          >
            {index === imageIndex ? (
              <LuCircleDot aria-hidden className="bg-black rounded-full" />
            ) : (
              <MdOutlineCircle aria-hidden className="bg-black rounded-full" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
