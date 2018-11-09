import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import styles from '../css/header.module.scss'

const Header = ({ siteTitle }) => (
  <div className={styles.content}>
    <Link to="/">
      <img src={logo} alt={siteTitle} className={styles.logo} />
    </Link>
  </div>
)

export default Header
