import React from 'react'
import BackButton from '../components/backButton'

const Topic = props => {
  const topicSelected = props.topicName
  const films = props.data.allCommunityEducationClasses.edges
  // eslint-disable-next-line
  const objects = films.find(({ node }) => node.episode_id == props.episodeId)
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
    <BackButton where="../" />
  </div>
)

export default Topic
