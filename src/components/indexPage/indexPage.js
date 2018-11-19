import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Route, Switch } from 'react-router-dom'
import Layout from '../layout/layout'
import Home from '../home/home'
import Film from '../film/film'
import Topic from '../topic/topic'
import NotFound from '../../pages/404'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query HomePageQuery {
        site {
          siteMetadata {
            title
          }
        }
        allInternalPosts {
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
    `}
    render={data => (
      <Layout data={data}>
        <main>
          <Switch>
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
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </Layout>
    )}
  />
)

export default IndexPage
