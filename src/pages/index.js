import React from 'react'
import { graphql } from 'gatsby'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import Home from './home'
import Film from './film'
import Topic from './topic'
import NotFoundPage from './404'
import '../css/index.module.scss'

const IndexPage = ({ data }) => (
  <Layout dataFull={data}>
    <main>
      <Router>
        <Home path="/" />
        <Film path="film/:episodeId" data={data} />
        <Topic path="film/:episodeId/:topicName" data={data} />
        <NotFoundPage default />
      </Router>
    </main>
  </Layout>
)

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
