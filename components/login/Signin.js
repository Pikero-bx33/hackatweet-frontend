import styles from './Signin.module.css'

export default function Signin() {
  return (
    <button
      className={styles.signinBtn}
    //onClick qui appelle modale Sign in
    //onClick={() => connection() }
    >Sign in</button>
  )
}
