import React from 'react'
import styles from '../css/aside.module.scss'
import { Link } from '@reach/router'

export default ({ data }) => {
  const films = data.allCommunityEducationClasses.edges
  return (
    <aside className={styles.sidebar}>
      <ul>
        {// eslint-disable-next-line
        films.map(({ node }, index) => {
          if (node.title !== null)
            return (
              <li className={styles.listFilm} key={index}>
                <Link to={`/film/${node.episode_id}`} className={styles.link}>
                  {node.title}
                  <br />
                  {node.release_date}
                </Link>
              </li>
            )
        })}
      </ul>
    </aside>
  )
}
