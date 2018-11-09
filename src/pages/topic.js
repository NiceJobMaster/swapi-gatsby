import React from 'react'
import BackButton from '../components/backButton'

const Topic = ({ match, data }) => {
  const topicSelected = match.params.topicName
  const films = data.allCommunityEducationClasses.edges
  const objects = films.find(
    // eslint-disable-next-line
    ({ node }) => node.episode_id == match.params.episodeId
  )
  const list = objects.node[topicSelected]
  return <TopicSelected topic={topicSelected} list={list} />
}

const TopicSelected = ({ topic, list }) => (
  <div>
    <h1 style={{ textTransform: 'capitalize' }}>{topic}</h1>
    <ul>
      {list.map(url => (
        <li key={url}>
          <a href={url}>{url}</a>
        </li>
      ))}
    </ul>
    <BackButton />
  </div>
)

export default Topic
