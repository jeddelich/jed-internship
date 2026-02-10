import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { carouselSettings } from "../UI/carouselSettings";
import NewItemsSkeleton from "../UI/NewItemsSkeleton";
import ItemCards from "../UI/ItemCards";

const NewItems = () => {
  const [newItemsData, setNewItemsData] = useState(null);

  async function requestNewItems() {
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems",
    );
    setNewItemsData(data);
  }

  useEffect(() => {
    requestNewItems();
  }, []);

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {newItemsData ? (
            <Slider {...carouselSettings}>
              {newItemsData.map((item) => (<ItemCards key={item.id} item={item} />))}
            </Slider>
          ) : (
            <NewItemsSkeleton />
          )}
        </div>
      </div>
    </section>
  );
};

export default NewItems;
