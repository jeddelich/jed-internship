import ItemCards from "../UI/ItemCards";

const AuthorItems = ({ author }) => {

  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {author?.nftCollection.map((item) => (
            <ItemCards
              author={author}
              key={item.id}
              item={item}
              wrapperClass="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12 w-full"
              wrapperStyle={{ display: "block", backgroundSize: "cover" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
