import { useState, useEffect } from 'react'
import styles from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Tweet from './Tweet';
import LastTweets from './LastTweets';
import Trends from './Trends'
import Link from 'next/link'
import Image from 'next/image';

function Home() {
  const [postsData, setPostsData] = useState([])

  const fetchPosts = async () => {
    const res = await fetch('http://localhost:3000/posts/all');
    const data = await res.json();
    setPostsData(data.posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/posts/all')
      .then(response => response.json())
      .then(data => {
        console.log(data.posts);
        setPostsData(data.posts)
      });
  }, []);

  const postsElement = postsData.map((data, i) => {
    return <LastTweets key={i} {...data} />
  })

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
        <Tweet updateNewTweet={fetchPosts} />
        <div className={styles.tweetList}>
          {postsElement}
        </div>
      </div>

      <div className={styles.rightSection}>
        <h2>Trends</h2>
        <Trends />
      </div>

    </div>
  );
}

export default Home;
