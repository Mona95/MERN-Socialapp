// Icons
import { MoreVert } from "@material-ui/icons";

// Styles
import "./post.scss";

export default function Post() {
  return (
    <div className="post">
      <div className="post_wrapper">
        <div className="post_wrapper__top">
          <div className="left">
            <img src="/assets/person/1.jpeg" alt="" />
            <span className="name">Mona</span>
            <span className="date">5 mins ago</span>
          </div>
          <div className="right">
            <MoreVert />
          </div>
        </div>
        <div className="post_wrapper__center">
            <span className="description">
                Hey!its my first post :)
            </span>
            <img src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="post_wrapper__bottom">
            <div className="left">
                <img src="/assets/like.png" alt="" />
                <img src="/assets/heart.png" alt="" />
                <span className="counter">32 people liked it</span>
            </div>
            <div className="right">
                <span className="comments">9 comment</span>
            </div>
        </div>
      </div>
    </div>
  );
}
