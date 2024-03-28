import Car1 from "../assets/imgs/car-1.jpg";
import Car2 from "../assets/imgs/car-2.jpg";
import Car3 from "../assets/imgs/car-3.jpg";
import Car4 from "../assets/imgs/car-4.jpg";
import Car5 from "../assets/imgs/car-5.jpg";
import ImageSlider from "./ImageSlider";

const Overview = () => {
  const carImages = [
    { url: Car1, alt: "Car image one" },
    { url: Car2, alt: "Car image two" },
    { url: Car3, alt: "Car image three" },
    { url: Car4, alt: "Car image four" },
    { url: Car5, alt: "Car image five" },
   
  ];

  return (
    <div>
      <ImageSlider images={carImages} />
    </div>
  );
};

export default Overview;
