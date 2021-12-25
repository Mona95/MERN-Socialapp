//Icons
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

//Styles
import "./share.scss";

export default function Share() {
  return (
    <div className="share">
      <div className="share_wrapper">
        <div className="share_wrapper__top">
          <img className="profile" src="/assets/person/1.jpeg" alt="person" />
          <input className="input" placeholder="What's in your mind?" />
        </div>
        <hr className="share-divider" />
        <div className="share_wrapper__bottom">
          <div className="options">
            <div className="option">
              <PermMedia htmlColor="tomato" className="icon" />
              <span className="option_text">Photo or Video</span>
            </div>
            <div className="option">
              <Label htmlColor="blue" className="icon" />
              <span className="option_text">Tag</span>
            </div>
            <div className="option">
              <Room htmlColor="green" className="icon" />
              <span className="option_text">Location</span>
            </div>
            <div className="option">
              <EmojiEmotions htmlColor="goldenrod" className="icon" />
              <span className="option_text">Feelings</span>
            </div>
          </div>
            <button className="share-button">
                Share
            </button>
        </div>
      </div>
    </div>
  );
}
