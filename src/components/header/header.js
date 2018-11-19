import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import styles from './header.module.scss'

const Header = ({ data }) => (
    <div className={`animated zoomIn ${styles.content}`}>
      <Link to={`${data.site.pathPrefix}/`}>
        <img src={logo} alt="Star Wars Logo" className={styles.logo} />
      </Link>
    </div>
)

export default Header
