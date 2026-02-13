import axios from "axios";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/styles/react.slick.carousel.css";
import CarouselSkeleton from "../UI/CarouselSkeleton";
import Carousel from "../UI/Carousel";

const HotCollections = () => {
  const [hotCollectionsData, setHotCollectionsData] = useState(null);

  async function requestHotCollections() {
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections",
    );
    setHotCollectionsData(data);
  }

  useEffect(() => {
    // requestHotCollections();
  }, []);

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {!hotCollectionsData ? (
            <CarouselSkeleton />
          ) : (
            <Carousel hotCollectionsData={hotCollectionsData} />
          )}
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
