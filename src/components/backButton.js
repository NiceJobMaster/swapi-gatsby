import React from 'react'
import styles from '../css/backButton.module.scss'

let history

if (typeof document !== 'undefined') {
  const createBrowserHistory = require('history/createBrowserHistory').default

  history = createBrowserHistory()
}
const back = e => {
  e.stopPropagation()
  history.goBack()
}

const Back = () => (
  <div className={styles.buttonMargin}>
    <button onClick={back} className={styles.link}>
      Back
    </button>
  </div>
)

export default Back
