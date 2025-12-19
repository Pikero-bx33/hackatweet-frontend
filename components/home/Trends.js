import styles from './Trends.module.css';
import Link from 'next/link';

export default function Trends() {
  return (
    <div className={styles.trendsContainer}>
      <div className={styles.trendsHashtagContainer}>
        <Link href="/hashtagPage"><span className={styles.trendsHashtag}>#hackatweet</span></Link>
        <span className={styles.tweetCounts}>2 tweets</span>
      </div>
      <div className={styles.trendsHashtagContainer}>
        <Link href="/hashtagPage"><span className={styles.trendsHashtag}>#hackatweet</span></Link>
        <span className={styles.tweetCounts}>2 tweets</span>
      </div>
      <div className={styles.trendsHashtagContainer}>
        <Link href="/hashtagPage"><span className={styles.trendsHashtag}>#hackatweet</span></Link>
        <span className={styles.tweetCounts}>2 tweets</span>
      </div>
    </div>
  )
}