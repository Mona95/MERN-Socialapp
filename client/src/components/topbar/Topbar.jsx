import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

//Icons
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

// Styles
import "./topbar.scss";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_URL;
  return (
    <div className="topbar-container">
      <div className="topbar-container_left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Social App</span>
        </Link>
      </div>
      <div className="topbar-container_center">
        <div className="searchbar">
          <Search className="search-icon" />
          <input
            placeholder="Search for friend, post or video"
            className="searhinput"
          />
        </div>
      </div>
      <div className="topbar-container_right">
        <div className="topbar-container_right__links">
          <span className="topbar-link">Homepage</span>
          <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbar-container_right__icons">
          <div className="item">
            <Person />
            <span className="item_badge">1</span>
          </div>
          <div className="item">
            <Chat />
            <span className="item_badge">2</span>
          </div>
          <div className="item">
            <Notifications />
            <span className="item_badge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img src={user.profilePicture ? PF+user.profilePicture : PF+'person/no-avatar-1.jpeg'} alt="profile" className="topbar-img" />
        </Link>
      </div>
    </div>
  );
}
