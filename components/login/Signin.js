import styles from './Signin.module.css'

export default function Signin({ onClick }) {
  return (
    <button
      className={styles.signinBtn}
      onClick={onClick}
    //onClick={() => connection() }
    >Sign in</button>
  )
}
