import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const Author = () => {
 
  const [author, setAuthor] = useState(null);
  const [hasFollowed, setHasFollowed] = useState(false);
  const [followerAmount, setFollowerAmount] = useState(null);

  const { id } = useParams();

  async function requestAuthor() {
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`,
    );
    setAuthor(data);
  }

  function followRequest() {
    if (!hasFollowed) {
      setHasFollowed(true)
      setFollowerAmount(followerAmount + 1)
    }
  }

  useEffect(() => {
    if (!author) {
      requestAuthor();
    } else {
      setFollowerAmount(author.followers)
      console.log(author);
    }
  }, [useParams, setAuthor, author]);
 
  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      <img src={author?.authorImage} alt="" />

                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        <h4>
                          {author?.authorName}
                          <span className="profile_username">@{author?.tag}</span>
                          <span id="wallet" className="profile_wallet">
                            {author?.address}
                          </span>
                          <button id="btn_copy" title="Copy Text">
                            Copy
                          </button>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">{followerAmount} followers</div>
                        {
                          !hasFollowed ? 
                      <Link to="#" className="btn-main" onClick={followRequest}>Follow
                      </Link> : <Link to="#" className="btn-main" onClick={followRequest}>Unfollow
                      </Link>
                        }
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems author={author}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
