import Car1 from "../assets/imgs/car-1.jpg";
import Car2 from "../assets/imgs/car-2.jpg";
import Car3 from "../assets/imgs/car-3.jpg";
import Car4 from "../assets/imgs/car-4.jpg";
import Car5 from "../assets/imgs/car-5.jpg";
import ImageSlider from "./ImageSlider";

const Overview = () => {

  const carImages = [Car1, Car2, Car3, Car4, Car5];

  return (
    <div>
      <ImageSlider ImageUrls={carImages} />
    </div>
  );
};

export default Overview;
