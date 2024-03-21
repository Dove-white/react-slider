import { useState } from "react";

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
      <img
        className="h-[100vh] w-full object-cover transition-all"
        src={ImageUrls[index]}
        alt=""
      />
      <button
        onClick={() => {
          handleNextBtn();
        }}
        className="md:font-[800] md:text-xl absolute transition delay-100 ease-in top-[50%] right-[5%] bg-[#00000036] text-white cursor-pointer w-[5rem] md:w-[8rem] p-2 md:hover:bg-[#0000009f] rounded-lg shadow-orange-50 shadow-md"
      >
        Next{" "}
      </button>
      <button
        onClick={() => handlePrevBtn()}
        className="md:font-[800] md:text-xl absolute transition delay-100 ease-in top-[50%] left-[5%] bg-[#00000036] text-white cursor-pointer w-[5rem] md:w-[8rem] p-2 md:hover:bg-[#0000009f] rounded-lg shadow-orange-50 shadow-md"
      >
        Pervious{" "}
      </button>
    </>
  );
};

export default ImageSlider;
