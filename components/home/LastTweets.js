import styles from './LastTweets.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


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


export default function LastTweets(props) {
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
      <div className={styles.heartContainer}>
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: '#ffffff' }}
          className={styles.heartIcon}
        />
        <span className={styles.heartCount}>0</span>
      </div>
    </div>
  )
}