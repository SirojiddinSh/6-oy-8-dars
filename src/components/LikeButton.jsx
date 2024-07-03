import "./LikeButton.css";
import { useState } from "react";

const LikeButton = () => {
    const [liked, setLiked] = useState(false);
    let handleLike = () => {
        setLiked(!liked);
    };
    return (
        <div className="like-button" onClick={handleLike}>
            <span role="img" aria-label="Heart Emoji">
                {liked ? "❤️" : "🤍"}
            </span>
        </div>
    );
};

export default LikeButton;
