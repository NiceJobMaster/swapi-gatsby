import React from "react";
import styles from "./aside.module.scss";
import { NavLink } from "react-router-dom";

export default ({ data }) => {
  const films = data.allInternalPosts.edges;
  return (
    <aside className={styles.sidebar}>
      <ul>
        {// eslint-disable-next-line
        films.map(({ node }) => {
          if (node.title !== null)
            return (
              <li className={styles.listFilm} key={node.episode_id}>
                <NavLink
                  to={`${data.site.pathPrefix}/film/${node.episode_id}`}
                  className={styles.link}
                >
                  {node.title}
                  <br />
                  {node.release_date}
                </NavLink>
              </li>
            );
        })}
      </ul>
    </aside>
  );
};
