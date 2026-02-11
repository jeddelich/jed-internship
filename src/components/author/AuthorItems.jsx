import ItemCards from "../UI/ItemCards";
import ItemSkeleton from "../UI/ItemSkeleton";

const AuthorItems = ({ author }) => {
  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {author ? (
            <>
              {author.nftCollection.map((item) => (
                <ItemCards
                  author={author}
                  key={item.id}
                  item={item}
                  wrapperClass="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12 w-full"
                  wrapperStyle={{ display: "block", backgroundSize: "cover" }}
                />
              ))}
            </>
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
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
