import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

//Components
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

// Styles
import "./profile.scss";

export default function Profile() {
  const [user, setUser] = useState({});
  const params = useParams();

  const PF = process.env.REACT_APP_PUBLIC_URL;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${params.username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [params.username]);
  return (
    <>
      <Topbar />
      <div className="profile-container">
        <Sidebar />
        <div className="profile-container_right">
          <div className="profile-container_right__top">
            <div className="profile-cover">
              <img
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "person/no-cover.jpeg"
                }
                alt=""
                className="cover-img"
              />
              <img
                src={
                  user.profilePicture
                    ? PF.user.profilePicture
                    : PF + "person/no-avatar-1.jpeg"
                }
                alt=""
                className="profile-img"
              />
            </div>
            <div className="profile-info">
              <h4 className="name">{user.username}</h4>
              <span className="description">{user.description}</span>
            </div>
          </div>
          <div className="profile-container_right__bottom">
            <Feed username={params.username} />
            {user && <Rightbar user={user} />}
          </div>
        </div>
      </div>
    </>
  );
}
