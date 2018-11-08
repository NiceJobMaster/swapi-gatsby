import React from 'react'
import { Link } from '@reach/router'
import styles from '../css/backButton.module.scss'

const Back = ({ where }) => (
  <div className={styles.buttonMargin}>
    <Link to={where} className={styles.link}>
      Back
    </Link>
  </div>
)

export default Back
