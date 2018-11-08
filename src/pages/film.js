import React from 'react'
import { Link } from '@reach/router'
import BackButton from '../components/backButton'

const Film = props => {
  const films = props.data.allCommunityEducationClasses.edges
  // eslint-disable-next-line
  const film = films.find(({ node }) => node.episode_id == props.episodeId)
  return <Content film={film} />
}

const Content = ({ film }) => (
  <div>
    <div>
      <h1>{film.node.title}</h1>
      <ul>
        <li>Director: {film.node.director}</li>
        <li>Producer: {film.node.producer}</li>
        <li>Release Date: {film.node.release_date}</li>
        <li>
          <Link to="starships">Starships</Link>
        </li>
        <li>
          <Link to="vehicles">Vehicles</Link>
        </li>
        <li>
          <Link to="species">Species</Link>
        </li>
      </ul>
    </div>
    <BackButton where="/" />
  </div>
)

export default Film
