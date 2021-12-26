//Components
import Online from "../online/Online";
//Dummy data
import { Users } from "../../data/data.js";

// Styles
import "./rightbar.scss";

export default function Rightbar({ profile }) {
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
                    <span className="info_item__value">Antalya</span>
                </div>
                <div className="info_item">
                    <span className="info_item__key">From:</span>
                    <span className="info_item__value">Iran</span>
                </div>
                <div className="info_item">
                    <span className="info_item__key">Relationship:</span>
                    <span className="info_item__value">Married</span>
                </div>
            </div>
            <h4 className="title">Followings</h4>
            <div className="followings">
                <div className="following">
                    <img src="/assets/person/2.jpeg" alt="" />
                    <span className="name">John Carter</span>
                </div>
                <div className="following">
                    <img src="/assets/person/3.jpeg" alt="" />
                    <span className="name">John Carter</span>
                </div>
                <div className="following">
                    <img src="/assets/person/4.jpeg" alt="" />
                    <span className="name">John Carter</span>
                </div>
                <div className="following">
                    <img src="/assets/person/1.jpeg" alt="" />
                    <span className="name">John Carter</span>
                </div>
            </div>
        </>
    )
  };
  return (
    <div className="rightbar">
      <div className="rightbar_wrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
