import React from 'react'
import { graphql } from 'gatsby'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from '../components/layout'
import Home from './home'
import Film from './film'
import Topic from './topic'
import '../css/index.module.scss'

const IndexPage = ({ data }) => {
  return (
    <Router>
      <Layout dataFull={data}>
        <main>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/film/:episodeId"
            render={({ match }) => <Film data={data} match={match} />}
          />
          <Route
            exact
            path="/film/:episodeId/:topicName"
            render={({ match }) => <Topic data={data} match={match} />}
          />
        </main>
      </Layout>
    </Router>
  )
}

export const query = graphql`
  query {
    allCommunityEducationClasses {
      edges {
        node {
          title
          episode_id
          release_date
          director
          producer
          starships
          vehicles
          species
        }
      }
    }
  }
`

export default IndexPage
