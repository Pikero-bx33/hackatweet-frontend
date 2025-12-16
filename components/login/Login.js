import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Signup from './Signup';
import Signin from './Signin';
import styles from './Login.module.css';

export default function Login() {
  const [signupFirstname, setSignupFirstname] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const [signinUsername, setSigninUsername] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  const [isSignupModalVisible, setIsSignupModalVisible] = useState(false);
  const [isSigninModalVisible, setIsSigninModalVisible] = useState(false);

  const handleRegister = () => {
    fetch('http://localhost:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstname: signupFirstname, username: signupUsername, password: signupPassword }),
    }).then(response => response.json())
      .then(data => {
        if (data.result) {
          //dispatch(login({ username: signupUsername, token: data.token }));
          setSignupFirstname('');
          setSignupUsername('');
          setSignupPassword('');
        }
      });
  };

  const handleConnection = () => {

    fetch('http://localhost:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: signinUsername, password: signinPassword }),
    }).then(response => response.json())
      .then(data => {
        if (data.result) {
          //dispatch(login({ username: signinUsername, token: data.token }));
          setSigninUsername('');
          setSigninPassword('');
        }
      });
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftSection}>
        <Image src="/logo-twitter-blanc-png.png" alt="logo" width={400} height={400} />
      </div>
      <div className={styles.rightSection}>
        <FontAwesomeIcon icon={faTwitter} style={{ color: '#ffffff' }} className={styles.twitterIcon} />
        <h1 className={styles.mainTitle}>See what's <br />happening</h1>
        <h2 className={styles.secondTitle}>Join Hackatweet today.</h2>
        <Signup />
        <p className={styles.haveAccount}>Already have an account?</p>
        <Signin />


        {/* Modale */}
        <div className={styles.modalContainer}>
          {/* SIGN UP */}
          <div className={styles.regiterContainer}>
            <div className={styles.faXmarkIcon}>
              <FontAwesomeIcon icon={faXmark} style={{ color: "#FFFFFF" }} />
            </div>
            <div className={styles.registerSection}>
              <FontAwesomeIcon icon={faTwitter} style={{ color: '#ffffff' }} className={styles.twitterIcon} />
              <h2>Create your Hackatweet account</h2>
              <input
                type="text"
                id="signUpFirstname"
                placeholder="Firstname"
                value={signupFirstname}
                onChange={(e) => setSignupFirstname(e.target.value)}
              />
              <input
                type="text"
                id="signUpUsername"
                placeholder="Username"
                value={signupUsername}
                onChange={(e) => setSignupUsername(e.target.value)}
              />
              <input
                type="password"
                id="signUpPassword"
                placeholder="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
              <button
                className={styles.signupBtn}
                onClick={() => handleRegister()}
              >Sign up</button>
            </div>
          </div>

          {/* SIGN IN */}
          <div className={styles.regiterContainer}>
            <div className={styles.faXmarkIcon}>
              <FontAwesomeIcon icon={faXmark} style={{ color: "#FFFFFF" }} />
            </div>
            <div className={styles.registerSection}>
              <FontAwesomeIcon icon={faTwitter} style={{ color: '#ffffff' }} className={styles.twitterIcon} />
              <h2>Connect to Hackatweet</h2>
              <input
                type="text"
                id="signinUsername"
                placeholder="Username"
                value={signinUsername}
                onChange={(e) => setSigninUsername(e.target.value)}
              />
              <input
                type="password"
                id="signinPassword"
                placeholder="Password"
                value={signinPassword}
                onChange={(e) => setSigninPassword(e.target.value)}
              />
              <button
                className={styles.signInBtn}
                onChange={() => handleConnection()}
              >Sign in</button>
            </div>
          </div>
        </div>

      </div>

    </div >
  )
}