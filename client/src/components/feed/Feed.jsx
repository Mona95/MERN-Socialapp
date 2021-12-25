// Components
import Post from '../post/Post'
import Share from '../share/Share'

// Styles
import './feed.scss'

export default function Feed() {
    return (
        <div className="feed">
            <div className="feed_wrapper">
                <Share />
                <Post />
            </div>
        </div>
    )
}