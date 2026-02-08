import Slider from "react-slick";
import { Link } from "react-router-dom";
import { carouselSettings } from "./carouselSettings";

function Carousel({ hotCollectionsData }) {

  return (
    <Slider {...carouselSettings}>
      {hotCollectionsData?.map((collection) => (
        <div key={collection.id}>
          <div className="nft_coll mx-1">
            <div className="nft_wrap">
              <Link to="/item-details/">
                <img
                  src={collection.nftImage}
                  className="lazy img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="nft_coll_pp">
              <Link to="/author">
                <img
                  className="lazy pp-coll"
                  src={collection.authorImage}
                  alt=""
                />
              </Link>
              <i className="fa fa-check"></i>
            </div>
            <div className="nft_coll_info">
              <Link to="/explore">
                <h4>{collection.title}</h4>
              </Link>
              <span>ERC-{collection.code}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
