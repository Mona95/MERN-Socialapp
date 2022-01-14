import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
//Components
import Online from "../online/Online";
//Dummy data
import { Users } from "../../data/data.js";

// Styles
import "./rightbar.scss";

export default function Rightbar({ user }) {
  const [friends, setFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_URL;

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendsList = await axios.get(`/users/friends/${user._id}`);
        setFriends(friendsList);
      } catch (e) {
        console.log(e);
      }
    };

    getFriends();
  }, []);
  // Inner component HomeRightbar
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday">
          <img src="/assets/gift.png" alt="Birthday" />
          <span>
            <b>Pola Foster</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img className="ad" src="/assets/ad.png" alt="" />
        <h4 className="title">Online Friends</h4>
        <ul className="friends-list">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };
  // Inner component ProfileRightbar
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="title">User Information</h4>
        <div className="info">
          <div className="info_item">
            <span className="info_item__key">City:</span>
            <span className="info_item__value">{user.city}</span>
          </div>
          <div className="info_item">
            <span className="info_item__key">From:</span>
            <span className="info_item__value">{user.from}</span>
          </div>
          <div className="info_item">
            <span className="info_item__key">Relationship:</span>
            <span className="info_item__value">
              {user.relationship === 1
                ? "Single"
                : user.relations === 2
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="title">Followings</h4>
        <div className="followings">
          {friends.length > 0 &&
            friends.map((friend) => (
              <Link to={`/profile/${friend.username}`}>
                <div className="following">
                  <img
                    src={
                      friend.profilePicture
                        ? friend.profilePicture
                        : PF + "person/no-avatar-1.jpeg"
                    }
                    alt=""
                  />
                  <span className="name">{friend.username}</span>
                </div>
              </Link>
            ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbar_wrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
