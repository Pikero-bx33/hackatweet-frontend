import styles from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Tweet from './Tweet';
import LastTweets from './LastTweets';
import Link from 'next/link'
import Image from 'next/image';

function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftSection}>
        <Link href="/"><FontAwesomeIcon icon={faTwitter} style={{ color: '#ffffff' }} className={styles.twitterIcon} /></Link>
        <div>
          <div className={styles.userInfo}>
            <Image src="/user-icon.jpg" alt="user-image" width={40} height={40} className={styles.userImage} />
            <div className={styles.userDetails}>
              <p className={styles.username}>John</p>
              <small className={styles.small}>@JohnCena</small>
            </div>
          </div>
          <button className={styles.logoutBtn}>Logout</button>
        </div>
      </div>

      <div className={styles.middleSection}>
        <h2 className={styles.homeTitle}>Home</h2>
        <div className={styles.tweetSection}>
          <Tweet />
          <LastTweets />
        </div>
      </div>

      <div className={styles.rightSection}>
        <h2>Trends</h2>
      </div>

    </div>
  );
}

export default Home;
