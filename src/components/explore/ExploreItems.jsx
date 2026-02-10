import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import Countdown from "../UI/Countdown";
import ItemCards from "../UI/ItemCards";

const ExploreItems = () => {
  const [exploreData, setExploreData] = useState(null);

  async function requestExploreData() {
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore",
    );
    setExploreData(data);
  }

  useEffect(() => {
    requestExploreData().then(console.log(exploreData))
  }, []);
  
  return (
    <>
      <div>
        <select id="filter-items" defaultValue="">
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {
        exploreData?.map((item) =>(
          <ItemCards key={item.id} item={item} wrapperClass="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12 w-full" wrapperStyle={{ display: "block", backgroundSize: "cover" }}/>
        ))
      }
      <div className="col-md-12 text-center">
        <Link to="" id="loadmore" className="btn-main lead">
          Load more
        </Link>
      </div>
    </>
  );
};

export default ExploreItems;
