//Styles
import "./online.scss";

export default function Online({ user }) {
  return (
    <li className="friend">
      <div className="profile">
        <img src={user.profilePicture} alt="" />
        <span className="online"></span>
      </div>
      <span className="name">{user.username}</span>
    </li>
  );
}
