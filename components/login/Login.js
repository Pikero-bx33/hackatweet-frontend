import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Signup from './Signup';
import Signup from './Signup';
import styles from '../styles/Login.module.css';

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftSection}>
        <FontAwesomeIcon icon={faTwitter} className={styles.faTwitter} />
      </div>
      <div className={styles.rightSection}>
        <FontAwesomeIcon icon={faTwitter} style={{ color: 'red' }} />
        <h1>See what's happening</h1>
        <h2>Join Hackatweet today.</h2>
        <Signup />
        <p>Already have an account?</p>
        <Signup />
      </div>
    </div>
  )
}