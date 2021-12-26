//Components
import Online from "../online/Online"
//Dummy data
import { Users } from "../../data/data.js";

// Styles
import './rightbar.scss'

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbar_wrapper">
                <div className="birthday">
                    <img src="/assets/gift.png" alt="Birthday" />
                    <span><b>Pola Foster</b> and <b>3 other friends</b> have birthday today</span> 
                </div>
                <img className="ad" src="/assets/ad.png" alt="" />
                <h4 className="title">Online Friends</h4>
                <ul className="friends-list">
                    {Users.map(user=> (
                        <Online key={user.id} user={user} />
                    ))}
                </ul>
            </div>
        </div>
    )
}
