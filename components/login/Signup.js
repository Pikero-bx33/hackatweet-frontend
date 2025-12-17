import styles from './Signup.module.css'

export default function Signup({ onClick }) {
  return (
    <button
      className={styles.signupBtn}
      onClick={onClick}
    >Sign up</button>
  )
}