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
                    <li className="friend">
                        <div className="profile">
                            <img src="/assets/person/3.jpeg" alt="" />
                            <span className="online"></span>
                        </div>
                        <span className="name">John Carter</span>
                    </li>
                    <li className="friend">
                        <div className="profile">
                            <img src="/assets/person/3.jpeg" alt="" />
                            <span className="online"></span>
                        </div>
                        <span className="name">John Carter</span>
                    </li>
                    <li className="friend">
                        <div className="profile">
                            <img src="/assets/person/3.jpeg" alt="" />
                            <span className="online"></span>
                        </div>
                        <span className="name">John Carter</span>
                    </li>
                    <li className="friend">
                        <div className="profile">
                            <img src="/assets/person/3.jpeg" alt="" />
                            <span className="online"></span>
                        </div>
                        <span className="name">John Carter</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
