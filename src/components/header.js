import React from 'react'
import { Link } from 'gatsby'

import styles from '../css/header.module.scss'

const Header = ({ siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.content}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" className={styles.title}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
