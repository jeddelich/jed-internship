import "../../css/styles/itemDetailsSkeleton.css"

function ItemDetailsSkeleton() {
  return (
    <>
      <div className="col-md-6 text-center">
        <div className="item-details__img--skeleton img-fluid img-rounded mb-sm-30 nft-image"></div>
      </div>
      <div className="col-md-6">
        <div className="item_info">
          <h2 className="item-details__title--skeleton">
          </h2>

          <div className="item_info_counts">
            <div className="item_info_views">
              <i className="fa fa-eye eye--skeleton"></i>
        
            </div>
            <div className="item_info_like">
              <i className="fa fa-heart heart--skeleton"></i>
        
            </div>
          </div>
          <p className="item-details__description--skeleton"></p>
          <div className="d-flex flex-row">
            <div className="mr40">
              <h6>Owner</h6>
              <div className="item_author">
                <div className="author_list_pp">
                    <div className="item-details__author--skeleton"></div>
                </div>
                <div className="author_list_info">
                  <div className="item-details__name--skeleton"></div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="de_tab tab_simple">
            <div className="de_tab_content">
              <h6>Creator</h6>
              <div className="item_author">
                <div className="author_list_pp">
                    <div className="item-details__author--skeleton"></div>
                </div>
                <div className="author_list_info">
                  <div className="item-details__name--skeleton"></div>
                </div>
              </div>
            </div>
            <div className="spacer-40"></div>
            <h6>Price</h6>
            <div className="nft-item-price">
              <div className="item-details__price--skeleton"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetailsSkeleton;
