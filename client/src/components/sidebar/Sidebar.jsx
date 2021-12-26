//Components
import CloseFriend from "../closeFriend/CloseFriend.jsx";

//Dummy data
import { Users } from "../../data/data.js";

// Icons 
import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
  } from "@material-ui/icons";

// Styles
import './sidebar.scss'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_wrapper">
                <ul className="sidebar-list">
                    <li className="sidebar-list_item">
                        <RssFeed className="icon" />
                        <span className="text">Feed</span>
                    </li>
                    <li className="sidebar-list_item">
                        <Chat className="icon" />
                        <span className="text">Chat</span>
                    </li>
                    <li className="sidebar-list_item">
                        <PlayCircleFilledOutlined className="icon" />
                        <span className="text">Videos</span>
                    </li>
                    <li className="sidebar-list_item">
                        <Group className="icon" />
                        <span className="text">Groups</span>
                    </li>
                    <li className="sidebar-list_item">
                        <Bookmark className="icon" />
                        <span className="text">Bookmarks</span>
                    </li>
                    <li className="sidebar-list_item">
                        <HelpOutline className="icon" />
                        <span className="text">Questions</span>
                    </li>
                    <li className="sidebar-list_item">
                        <WorkOutline className="icon" />
                        <span className="text">Jobs</span>
                    </li>
                    <li className="sidebar-list_item">
                        <Event className="icon" />
                        <span className="text">Events</span>
                    </li>
                    <li className="sidebar-list_item">
                        <School className="icon" />
                        <span className="text">Courses</span>
                    </li>
                </ul>
                <button className="sidebar-button">Show More</button>
                <hr className="sidebar-divider" />
                <ul className="sidebar-friends-list">
                    {Users.map(user=> (<CloseFriend key={user.id} user={user} />))}
                </ul>
            </div>
        </div>
    )
}
