import { useState, useEffect, useContext } from "react";
import axios from "axios";

// Components
import Post from "../post/Post";
import Share from "../share/Share";

// Styles
import "./feed.scss";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get(`/posts/timeline/${user._id}`);
      setPosts(res.data);
    };
    fetchPosts();
  }, [username, user._id]);

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
