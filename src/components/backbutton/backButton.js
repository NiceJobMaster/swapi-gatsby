import React from 'react'
import styles from './backButton.module.scss'

const back = e => {
  e.stopPropagation()
  window.history.back()
}
const Back = () => (
  <div className={styles.buttonMargin}>
    <button onClick={back} className={styles.link}>
      Back
    </button>
  </div>
)
export default Back
