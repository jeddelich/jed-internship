import Slider from "react-slick";
import { Link } from "react-router-dom";
import { carouselSettings } from "./carouselSettings";

function CarouselSkeleton() {

  return (
    <Slider {...carouselSettings}>
      {new Array(6).fill("").map((collection) => (
        <div key={collection.id}>
          <div className="nft_coll mx-1">
            <div className="nft_wrap">
              <Link to="/item-details/">
                <div className="skeleton__img"></div>
              </Link>
            </div>
            <div className="nft_coll_pp">
              <Link to="/author">
                <div className="skeleton__profile"></div>
              </Link>
              <i className="fa fa-check"></i>
            </div>
            <div className="nft_coll_info skeleton__description--wrapper">
              <Link to="/explore">
                <div className="skeleton__title"></div>
              </Link>
              <span className="skeleton__code"></span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default CarouselSkeleton;
