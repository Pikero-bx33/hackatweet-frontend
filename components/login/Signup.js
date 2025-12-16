import styles from './Signup.module.css'

export default function Signup() {
  return (
    <button
      className={styles.signupBtn}
    //onClick qui appelle modale Sign up
    //onClick={() => register() }
    >Sign up</button>
  )
}