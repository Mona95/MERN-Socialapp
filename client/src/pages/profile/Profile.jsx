//Components
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

// Styles
import "./profile.scss";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile-container">
        <Sidebar />
        <div className="profile-container_right">
          <div className="profile-container_right__top">
            <div className="profile-cover">
              <img src="/assets/post/3.jpeg" alt="" className="cover-img" />
              <img src="/assets/person/1.jpeg" alt="" className="profile-img" />
            </div>
            <div className="profile-info">
              <h4 className="name">Mona Zarkandi</h4>
              <span className="description">Hello my friends</span>
            </div>
          </div>
          <div className="profile-container_right__bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
