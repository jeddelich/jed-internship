import "../../css/styles/authorSkeleton.css"

function AuthorSkeleton() {
  return (
    <div className="col-md-12">
      <div className="d_profile de-flex">
        <div className="de-flex-col">
          <div className="profile_avatar">
            <div className="author__img--skeleton"></div>

            <i className="fa fa-check"></i>
            <div className="profile_name">
              <h4 className="author__name--skeleton">
              </h4>
                
                <span className="profile_username author__username--skeleton"></span>
                <span id="wallet" className="profile_wallet author__address--skeleton">
                 
                </span>
            </div>
          </div>
        </div>
        <div className="profile_follow de-flex">
          <div className="de-flex-col">
            <div className="profile_follower author__followers--skeleton"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorSkeleton;
