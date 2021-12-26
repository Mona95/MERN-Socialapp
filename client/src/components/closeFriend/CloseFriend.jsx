//Styles
import "./closeFriend.scss";
export default function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_URL
  return (
    <li className="sidebar-friends-list_item">
      <img className="image" src={PF+user.profilePicture} alt="" />
      <span className="name">{user.username}</span>
    </li>
  );
}
