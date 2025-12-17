import styles from './LastTweets.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function LastTweets() {
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
        <p className={styles.username}>Antoine</p>
        <small>@AntoineLeProf</small>
        <span className={styles.time}>- 5 hours</span>
      </div>
      <p className={styles.tweetContent}>Welcome to <strong>#hackatweet</strong> guys 😎</p>
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