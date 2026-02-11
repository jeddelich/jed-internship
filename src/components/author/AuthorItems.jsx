import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ItemCards from "../UI/ItemCards";

const AuthorItems = () => {
  const [author, setAuthor] = useState(null);

  const { id } = useParams();

  async function requestAuthor() {
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`,
    );
    setAuthor(data);
  }

  useEffect(() => {
    if (!author) {
      requestAuthor();
    } else {
      console.log(author);
    }
  }, [useParams, setAuthor, author]);

  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {author?.nftCollection.map((item) => (
            <ItemCards
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
