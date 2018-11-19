import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../header/header'
import Aside from '../aside/aside'
import styles from './layout.module.scss'
import { BrowserRouter as Router } from 'react-router-dom'

const Layout = ({ children, data }) => (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Star Wars' },
          { name: 'keywords', content: 'swapi, swapi.co' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Router>
        <div>
          <Header data={data} />
            <div className={`animated zoomIn ${styles.root}`}>
              <Aside data={data} />
              {children}
            </div>
        </div>
      </Router>
    </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
