import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../reducers/user'
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
  console.log(postsData);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const fetchPosts = async () => {
    const res = await fetch('http://localhost:3000/posts/all', {
      method: 'GET',
      headers: {
        'token': user.token,
      }
    });
    const data = await res.json();

    setPostsData(data.posts || []);
  };

  useEffect(() => {
    if (user.token) {
      fetchPosts();
    }
  }, [user.token]);


  const handleLogout = () => {
    dispatch(logout());
  };

  const postsElement = postsData.map((data, i) => {
    return (<LastTweets
      key={i}
      {...data}
      onPostDeleted={fetchPosts}
    />)
  })

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftSection}>
        <Link href="/"><FontAwesomeIcon icon={faTwitter} style={{ color: '#ffffff' }} className={styles.twitterIcon} /></Link>
        <div>
          <div className={styles.userInfo}>
            <Image src="/user-icon.jpg" alt="user-image" width={40} height={40} className={styles.userImage} />
            <div className={styles.userDetails}>
              <p className={styles.username}>{user.firstname}</p>
              <small className={styles.small}>@{user.username}</small>
            </div>
          </div>
          <button
            className={styles.logoutBtn}
            onClick={handleLogout}
          >Logout</button>
        </div>
      </div>

      <div className={styles.middleSection}>
        <h2 className={styles.homeTitle}>Home</h2>
        <Tweet onNewTweet={fetchPosts} />
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
