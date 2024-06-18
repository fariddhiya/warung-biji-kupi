import { useState } from "react";
import "./Slider.css";
import { pict1 } from "../../assets";
import BtnSlider from "./BtnSlider";

const dataSlider = [
  { id: "d7014a8b-b832-4d7f-9413-8b44f95c8ee4" },
  { id: "340a1aaa-90e7-48d4-920b-7c194bb78b19" },
  { id: "06712c67-ac5b-4e4b-8818-bdc7f7ca6835" },
  { id: "4ad6b506-f654-40d2-95a5-64a62b5dedad" },
  { id: "53fba88e-2fca-4b1b-bf6f-81eff88f4ddf" },
  { id: "e9fde616-35e6-4280-bf24-ca5c420d73ba" },
  { id: "08eb8176-4dd0-46ea-a16b-dcd641b215f8" },
];

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <div className="flex w-80">
      <div>
        <BtnSlider moveSlide={() => prevSlide()} direction={"prev"} />
        {dataSlider.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <img src={pict1} className="w-52" />
            </div>
          );
        })}
        <BtnSlider moveSlide={() => nextSlide()} direction={"next"} />
      </div>

      {/* <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div> */}
    </div>
  );
}
