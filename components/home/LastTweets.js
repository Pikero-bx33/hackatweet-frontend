import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './LastTweets.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';


export default function LastTweets(props) {
  const [isLiked, setIsLiked] = useState(props.isLiking);
  const [likesCount, setLikesCount] = useState(props.likesCount);
  console.log(likesCount, typeof props.likesCount);

  const user = useSelector((state) => state.user.value);

  function timeAgo(date) {
    const now = new Date();
    const createdDate = new Date(date);
    const seconds = Math.floor((now - createdDate) / 1000);

    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d`;
    const weeks = Math.floor(days / 7);
    return `${weeks}w`;
  };

  const handleDeletePost = async () => {
    await fetch('http://localhost:3000/posts', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: user.token,
        postId: props._id,
      }),
    });

    props.onPostDeleted?.();
  };

  const handleClickLike = async () => {
    const newLikeState = !isLiked;
    //setIsLiked(newLikeState);


    console.log(newLikeState);


    const res = await fetch('http://localhost:3000/posts', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: user.token,
        postId: props._id,
        isLiked: newLikeState,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (data.result) {
      setIsLiked(data.isLiking);
      setLikesCount(data.likesCount)
    }

    if (!data.result) {
      setIsLiked(!newLikeState);

    }
  };

  return (
    <div className={styles.lastTweetsContainer}>
      <div className={styles.userInfo}>
        <Image
          src="/user-icon.jpg"
          alt="user-image"
          width={40}
          height={40}
          className={styles.userImage}
        />
        <p className={styles.username}>{props.userId.fullName}</p>
        <small>@{props.userId.username}</small>
        <span className={styles.time}>- {timeAgo(props.createdAt)}</span>
      </div>
      <p className={styles.tweetContent}>{props.content}</p>
      <div className={styles.iconContainer}>
        <div className={styles.heartContainer}>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: isLiked ? 'red' : '#ffffff' }}
            className={styles.heartIcon}
            onClick={handleClickLike}
          />
          <span className={styles.heartCount}>{likesCount}</span>
        </div>
        {props.isOwner && <div>
          <FontAwesomeIcon
            icon={faTrash}
            style={{ color: '#ffffff' }}
            className={styles.trashIcon}
            onClick={handleDeletePost}
          />
        </div>}
      </div>

    </div>
  )
}