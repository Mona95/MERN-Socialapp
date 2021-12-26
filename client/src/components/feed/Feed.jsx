// Components
import Post from "../post/Post";
import Share from "../share/Share";

//Dummy data
import { Posts } from "../../data/data.js";

// Styles
import "./feed.scss";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feed_wrapper">
        <Share />
        {Posts.length>0 && Posts.map(post=> (
            <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
