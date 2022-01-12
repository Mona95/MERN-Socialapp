import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
// Icons
import { MoreVert } from "@material-ui/icons";

// Styles
import "./post.scss";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const{user: currentUser} = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id))
  }, [currentUser._id, post.likes])

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const PF = process.env.REACT_APP_PUBLIC_URL;
  const likeHandler = () => {
    try{
      axios.put(`/posts/${post._id}/like`, {
        userId: currentUser._id
      })
    }catch(e){}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="post_wrapper">
        <div className="post_wrapper__top">
          <div className="left">
            <Link to={`profile/${user.username}`}>
              <img src={user.profilePicture ? PF+user.profilePicture : PF+'person/no-avatar-1.jpeg'} alt="" />
            </Link>
            <span className="name">{user.username}</span>
            <span className="date">{post.createdAt}</span>
          </div>
          <div className="right">
            <MoreVert />
          </div>
        </div>
        <div className="post_wrapper__center">
          <span className="description">{post?.description}</span>
          {post.image && <img src={PF + post?.image} alt="" />}
        </div>
        <div className="post_wrapper__bottom">
          <div className="left">
            <img src={`${PF}like.png`} alt="" onClick={likeHandler} />
            <img src={`${PF}heart.png`} alt="" onClick={likeHandler} />
            <span className="counter">{like} people liked it</span>
          </div>
          <div className="right">
            <span className="comments">{post.comment} comment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
