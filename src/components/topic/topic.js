import React from 'react'
import BackButton from '../backbutton/backButton'

const Topic = props => {
  const topicSelected = props.match.params.topicName
  const objects = props.data.allInternalPosts.edges.find(
    // eslint-disable-next-line
    ({ node }) => node.episode_id == props.match.params.episodeId
  )
  const list = objects.node[topicSelected]
  return <TopicSelected topic={topicSelected} list={list} />
}

const TopicSelected = ({ topic, list }) => (
  <div key={topic} className="animated fadeIn">
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
