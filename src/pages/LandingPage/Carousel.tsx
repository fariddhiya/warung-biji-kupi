import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { pict2 } from "../../assets";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CarouselComponent = () => {
  return (
    <Carousel responsive={responsive} showDots={true} autoPlay={true}>
      {Array.from({ length: 10 }).map(() => {
        return (
          <div className="">
            <div className="absolute flex h-20 w-48 flex-col items-center justify-center bg-white">
              <div>
                <p className="text-lg font-bold">WHITE HALL</p>
                <p className="font-bold text-tawny-brown">Workspace</p>
              </div>
            </div>
            <img
              src={pict2}
              alt=""
              className="h-[35rem] w-[27rem] object-cover"
            />
          </div>
        );
      })}
    </Carousel>
  );
};
export default CarouselComponent;
