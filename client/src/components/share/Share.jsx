import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

//Icons
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

//Styles
import "./share.scss";

export default function Share() {
  const [file, setFile] = useState(null);
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_URL;

  const description = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      description: description.current.value,
    };
    if(file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file)
      data.append("name", fileName)
      newPost.image = fileName
      try{
        await axios.post("/upload", data);
      }catch(err) {
        console.log(err)
      }
    }
    try {
      await axios.post("/posts", newPost);
    } catch (error) {}
  };
  return (
    <div className="share">
      <div className="share_wrapper">
        <div className="share_wrapper__top">
          <img
            className="profile"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/no-avatar-1.jpeg"
            }
            alt="person"
          />
          <input
            ref={description}
            className="input"
            placeholder={`What's in your mind ${user.username}?`}
          />
        </div>
        <hr className="share-divider" />
        <form className="share_wrapper__bottom" onSubmit={handleSubmit}>
          <div className="options">
            <label htmlFor="file" className="option">
              <PermMedia htmlColor="tomato" className="icon" />
              <span className="option_text">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png, .jpg, .jpeg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
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
          <button className="share-button" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
