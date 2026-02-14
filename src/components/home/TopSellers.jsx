import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TopSellersSkeleton from "../UI/TopSellersSkeleton";

const TopSellers = () => {
  const [topSellers, setTopSellers] = useState(null);

  async function requestTopSellers() {
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers",
    );
    setTopSellers(data);
  }

  useEffect(() => {
    requestTopSellers()
  }, []);
  
  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true" className="col-md-12">
            <ol className="author_list">
              {
              topSellers ?
              topSellers.map((seller, index) => (
                <li key={seller.id}>
                  <div className="author_list_pp">
                    <Link to={`/author/${seller.authorId}`}>
                      <img
                        className="lazy pp-author"
                        src={seller.authorImage}
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  <div className="author_list_info">
                    <Link to={`/author/${seller.authorId}`}>{seller.authorName}</Link>
                    <span>{seller.price} ETH</span>
                  </div>
                </li>
              )) : <TopSellersSkeleton />
            }
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
