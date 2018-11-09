import React from 'react'
import styles from '../css/backButton.module.scss'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
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
