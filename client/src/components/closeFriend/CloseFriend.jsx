//Styles
import "./closeFriend.scss";
export default function CloseFriend({ user }) {
  return (
    <li className="sidebar-friends-list_item">
      <img className="image" src={user.profilePicture} alt="" />
      <span className="name">{user.username}</span>
    </li>
  );
}
