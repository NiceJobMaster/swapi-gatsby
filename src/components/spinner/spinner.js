import React from 'react'
import spinner from '../../images/puff.svg'
import styles from './spinner.module.scss'

const Spinner = props => (
  <div className={styles.spinner}>
    <img src={spinner} alt="loading" />
  </div>
)

export default Spinner
