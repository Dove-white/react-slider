import { useEffect, useState } from "react";
import Car1 from "../assets/imgs/car-1.jpg";
import Car2 from "../assets/imgs/car-2.jpg";
import Car3 from "../assets/imgs/car-3.jpg";
import Car4 from "../assets/imgs/car-4.jpg";
import Car5 from "../assets/imgs/car-5.jpg";
import RiskSpot from "../assets/riskspot/2.png";

const Overview = () => {
  const [next, setNext] = useState(0);
  // const [clickNext, setClickNext] = useState(true);

  useEffect(() => {
    setTimeout(handleNext, 5000);
  }, [next]);

  const carImages = [Car1, Car2, Car3, Car4, Car5,RiskSpot];

  const handleNext = () => {
    if (next >= 0) setNext(next + 1);
    if (next === carImages.length - 1) setNext(0);
  };
  const handlePrevious = () => {
    if (next >= 1) setNext(next - 1);
    if (next === 0) setNext(carImages.length - 1);
  };

  return (
    <div>
      <img
        className="h-[100vh] w-full object-cover transition-all"
        src={carImages[next]}
        alt=""
      />
      <button
        onClick={() => {
          handleNext();
          // setClickNext(false);
        }}
        className="md:font-[800] md:text-xl absolute top-[50%] right-[5%] bg-[#00000036] text-white cursor-pointer w-[5rem] md:w-[8rem] p-2 md:hover:bg-[#0000009f] rounded-lg shadow-orange-50 shadow-md"
      >
        Next{" "}
      </button>
      <button
        onClick={() => handlePrevious()}
        className="md:font-[800] md:text-xl absolute top-[50%] left-[5%] bg-[#00000036] text-white cursor-pointer w-[5rem] md:w-[8rem] p-2 md:hover:bg-[#0000009f] rounded-lg shadow-orange-50 shadow-md"
      >
        Pervious{" "}
      </button>
    </div>
  );
};

export default Overview;
