import { Link } from "react-router-dom";
import Slider from "react-slick";
import Countdown from "./Countdown";
import { carouselSettings } from "./carouselSettings";
import "../../css/styles/newItemsSkeleton.css";

function NewItemsSkeleton() {
  return (
    <Slider {...carouselSettings}>
      {new Array(6).fill("").map((item, index) => (
        <div key={item.id}>
          <div className="nft__item mx-1">
            <div className="author_list_pp">
              <Link
                to={`/author/${item.authorId}`}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Creator: Monica Lucas"
              >
                <div className="skeleton__img"></div>
                <i className="fa fa-check"></i>
              </Link>
            </div>
            {item.expiryDate && <Countdown expiryDate={item.expiryDate} />}
            <div className="nft__item_wrap nft__item_wrap-skeleton">
              <div className="nft__item_extra">
                <div className="nft__item_buttons">
                  <button>Buy Now</button>
                  <div className="nft__item_share">
                    <h4>Share</h4>
                    <a href="" target="_blank" rel="noreferrer">
                      <i className="fa fa-facebook fa-lg"></i>
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                      <i className="fa fa-twitter fa-lg"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-envelope fa-lg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <Link to={`/item-details/${item.nftId}`}>
                <img
                  src={item.nftImage}
                  className="lazy nft__item_preview"
                  alt=""
                />
              </Link>
            </div>
            <div className="nft__item_info nft__item_info-skeleton">
              <Link to="/item-details">
                <h4></h4>
              </Link>
              <div className="nft__item_bottom-skeleton">
                <div className="nft__item_price-skeleton"></div>
                <div className="nft__item_like-skeleton"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default NewItemsSkeleton;
