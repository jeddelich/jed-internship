import Slider from "react-slick";
import { carouselSettings } from "./carouselSettings";
import "../../css/styles/carouselSkeleton.css"

function CarouselSkeleton() {

  return (
    <Slider {...carouselSettings}>
      {new Array(6).fill("").map((__, index) => (
        <div key={index}>
          <div className="nft_coll mx-1">
            <div className="nft_wrap">
                <div className="carousel__img--skeleton"></div>
            </div>
            <div className="nft_coll_pp">
                <div className="skeleton__profile"></div>
              <i className="fa fa-check"></i>
            </div>
            <div className="nft_coll_info skeleton__description--wrapper">
                <div className="skeleton__title"></div>
              <span className="skeleton__code"></span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default CarouselSkeleton;
