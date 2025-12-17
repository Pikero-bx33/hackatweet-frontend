import styles from './Tweet.module.css'

export default function Tweet() {
  return (
    <div className={styles.tweetContainer}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="What's up?"
          className={styles.tweetInput}
        />
      </div>

      <div className={styles.counterBtn}>
        <p className={styles.charCounter}>0/280</p>
        <button className={styles.tweetBtn}>Tweet</button>
      </div>
    </div>

  )
}