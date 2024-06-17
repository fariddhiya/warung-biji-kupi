import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import "./Slider.css";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={() => moveSlide()}
    >
      {direction === "next" ? (
        <BiRightArrow  className="w-36 h-36"/>
      ) : (
        <BiLeftArrow className="w-36 h-36"/>
      )}
    </button>
  );
}
