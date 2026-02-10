import { Link } from "react-router-dom";
import "../../css/styles/topSellersSkeleton.css"

function TopSellersSkeleton() {
  return new Array(12).fill("").map((seller, index) => (
    <li key={index}>
      <div className="author_list_pp">
        <Link to="/author/">
          <div className="author__img--skeleton"></div>
          <i className="fa fa-check"></i>
        </Link>
      </div>
      <div className="author_list_info">
        <Link to="/author/">
        <div className="author__name--skeleton"></div>
        </Link>
        <span className="price--skeleton"></span>
      </div>
    </li>
  ))
}

export default TopSellersSkeleton;
