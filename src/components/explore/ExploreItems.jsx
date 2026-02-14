import { Link } from "react-router-dom";
import ItemCards from "../UI/ItemCards";
import ItemSkeleton from "../UI/ItemSkeleton";

const ExploreItems = ({
  displayMore,
  changeFilter,
  cardsDisplayed,
  exploreData,
}) => {
  return (
    <>
      <div>
        <select id="filter-items" defaultValue="" onChange={changeFilter}>
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {exploreData ? (
        exploreData
          .slice(0, cardsDisplayed)
          .map((item) => (
            <ItemCards
              key={item.id}
              item={item}
              wrapperClass="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12 w-full"
              wrapperStyle={{ display: "block", backgroundSize: "cover" }}
            />
          ))
      ) : (
        <>
          {new Array(8).fill("").map((item) => (
            <ItemSkeleton
              key={item.id}
              item={item}
              wrapperClass="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12 w-full"
              wrapperStyle={{ display: "block", backgroundSize: "cover" }}
            />
          ))}
        </>
      )}
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
