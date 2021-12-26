//Styles
import "./online.scss";

export default function Online({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_URL
  return (
    <li className="friend">
      <div className="profile">
        <img src={PF+user.profilePicture} alt="" />
        <span className="online"></span>
      </div>
      <span className="name">{user.username}</span>
    </li>
  );
}
