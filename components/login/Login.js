import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../reducers/user'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Signup from './Signup';
import Signin from './Signin';
import styles from './Login.module.css';

export default function Login() {
  const dispatch = useDispatch();

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
      body: JSON.stringify({
        fullName: signupFirstname,
        username: signupUsername,
        password: signupPassword
      }),
    }).then(response => response.json())
      .then(data => {
        console.log(data);

        if (data.result) {
          dispatch(login({
            username: data.userId.username,
            firstname: data.userId.fullName,
            token: data.userId.token
          }));
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
          dispatch(login({
            username: data.userId.username,
            firstname: data.userId.fullName,
            token: data.userId.token
          }));
          setSignupUsername('');
          setSignupPassword('');
        }
      });
  };

  function showSignupModal() {
    setIsSignupModalVisible(!isSignupModalVisible)
  }

  function showSigninModal() {
    setIsSigninModalVisible(!isSigninModalVisible)
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftSection}>
        <Image src="/logo-twitter-blanc-png.png" alt="logo" width={400} height={400} />
      </div>
      <div className={styles.rightSection}>
        <FontAwesomeIcon icon={faTwitter} style={{ color: '#ffffff' }} className={styles.twitterIcon} />
        <h1 className={styles.mainTitle}>See what's <br />happening</h1>
        <h2 className={styles.secondTitle}>Join Hackatweet today.</h2>
        <Signup
          onClick={showSignupModal}
        />
        <p className={styles.haveAccount}>Already have an account?</p>
        <Signin
          onClick={showSigninModal}
        />


        {/* Modale */}
        <div className={styles.modalContainer}>
          {/* SIGN UP */}
          {isSignupModalVisible && (<div className={styles.regiterContainer}>
            <div className={styles.faXmarkIcon}>
              <FontAwesomeIcon
                icon={faXmark}
                style={{ color: "#FFFFFF", cursor: "pointer" }}
                onClick={showSignupModal}
              />
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
          </div>)}

          {/* SIGN IN */}
          {isSigninModalVisible && (<div className={styles.regiterContainer}>
            <div className={styles.faXmarkIcon}>
              <FontAwesomeIcon
                icon={faXmark}
                style={{ color: "#FFFFFF", cursor: "pointer" }}
                onClick={showSigninModal}
              />
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
                className={styles.signinBtn}
                onClick={() => handleConnection()}
              >Sign in</button>
            </div>
          </div>)}
        </div>

      </div>

    </div >
  )
}