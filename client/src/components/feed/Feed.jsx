import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Post from "../post/Post";
import Share from "../share/Share";

// Styles
import "./feed.scss";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("/posts/timeline/61c0050348b1fd9f404508d9");
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feed_wrapper">
        <Share />
        {posts.length > 0 &&
          posts.map((post) => <Post key={post._id} post={post} />)}
      </div>
    </div>
  );
}
