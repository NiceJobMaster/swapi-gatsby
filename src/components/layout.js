import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Aside from '../components/aside'
import styles from '../css/layout.module.scss'
import { BrowserRouter as Router } from 'react-router-dom'

const Layout = ({ children, dataFull }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
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
          <div className={styles.all}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className={styles.root}>
              <Aside data={dataFull} />
              {children}
            </div>
          </div>
        </Router>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
