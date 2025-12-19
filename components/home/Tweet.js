import { useState, useEffect } from 'react'
import styles from './Tweet.module.css'

export default function Tweet({ onNewTweet }) {
  const [inputData, setInputData] = useState("");

  function handleInput(e) {
    setInputData(e.target.value)
  }

  async function handleTweet() {
    if (!inputData.trim()) return;
    /* if (!user.token) return;  */ // depuis reducer

    const response = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: 'xxxxxx',
        content: inputData,
      }),
    });

    const data = await response.json();

    if (data.result) {
      setInputData('');
      onNewTweet?.();
    }
  }

  return (
    <div className={styles.tweetContainer}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="What's up?"
          className={styles.tweetInput}
          value={inputData}
          maxLength={280}
          onChange={handleInput}

        />
      </div>

      <div className={styles.counterBtn}>
        <p className={styles.charCounter}>{inputData.length}/280</p>
        <button
          className={styles.tweetBtn}
          onClick={handleTweet}
          disabled={inputData.length === 0 || inputData.length > 280}
        >Tweet</button>
      </div>
    </div>

  )
}