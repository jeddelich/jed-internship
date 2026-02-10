import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ItemCards from "../UI/ItemCards";

const ExploreItems = () => {
  const [exploreData, setExploreData] = useState(null);
  const [cardsDisplayed, setCardsDisplayed] = useState(8);

  async function requestExploreData() {
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore",
    );
    setExploreData(data);
  }

  function displayMore(event) {
    event.preventDefault();
    if (cardsDisplayed < exploreData?.length) {
      setCardsDisplayed(cardsDisplayed + 4);
    }
  }

  useEffect(() => {
    requestExploreData();
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
      {exploreData?.slice(0, cardsDisplayed).map((item) => (
        <ItemCards
          key={item.id}
          item={item}
          wrapperClass="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12 w-full"
          wrapperStyle={{ display: "block", backgroundSize: "cover" }}
        />
      ))}
      <div className="col-md-12 text-center">
        {cardsDisplayed < exploreData?.length && (
          <Link
            to=""
            id="loadmore"
            className="btn-main lead"
            onClick={displayMore}
          >
            Load more
          </Link>
        )}
      </div>
    </>
  );
};

export default ExploreItems;
