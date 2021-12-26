import {useState} from 'react'
// Icons
import { MoreVert } from "@material-ui/icons";

// Dummy data
import {Users} from '../../data/data.js'

// Styles
import "./post.scss";

export default function Post({post}) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)
  const findUser = () => {
    const user = Users.filter(user => user.id === post?.userId)
    return {
      name: user[0].username,
      image: user[0].profilePicture
    }
  }
  const likeHandler = () => {
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="post_wrapper">
        <div className="post_wrapper__top">
          <div className="left">
            <img src={findUser().image} alt="" />
            <span className="name">{findUser().name}</span>
            <span className="date">{post?.date}</span>
          </div>
          <div className="right">
            <MoreVert />
          </div>
        </div>
        <div className="post_wrapper__center">
            <span className="description">
                {post?.desc}
            </span>
            <img src={post?.photo} alt="" />
        </div>
        <div className="post_wrapper__bottom">
            <div className="left">
                <img src="/assets/like.png" alt="" onClick={likeHandler} />
                <img src="/assets/heart.png" alt="" onClick={likeHandler} />
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
