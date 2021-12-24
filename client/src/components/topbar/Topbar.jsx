import { Search, Person, Chat, Notifications } from "@material-ui/icons";

// Styles
import "./topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar-container">
      <div className="topbar-container_left">
        <span className="logo">Social App</span>
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
          <img src="/assets/person/1.jpeg" alt="profile" className="topbar-img" />
      </div>
    </div>
  );
}
