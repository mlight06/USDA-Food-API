import React, { useEffect, useState } from "react";
import classNames from "classnames";

export default function LikeButton() {
  const [likes, setLikes] = useState(100);
  const [isLiked, setIsLiked] = useState(false);
  const btnClass = classNames({
    'like-button': true,
    'liked': isLiked
  })

  function handleLikes() {
    if (!isLiked) {
      setIsLiked(!isLiked)
      setLikes(likes + 1);
    } else {
      setIsLiked(!isLiked)
      setLikes(likes - 1);
    }
  }
  return (
    <div>
      <button onClick={handleLikes} className={btnClass}>
        Like | <span className="likes-counter">{likes}</span>
      </button>
    </div>
  )
}