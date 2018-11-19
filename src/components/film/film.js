import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../backbutton/backButton";

const Film = props => {
  const film =
    props.data &&
    props.data.allInternalPosts.edges.find(
      // eslint-disable-next-line
      ({ node }) => node.episode_id == props.match.params.episodeId
    );
  return <Content props={props} film={film} />;
};

const Content = ({ film, props }) => (
  <div key={film && film.node.episode_id} className="animated fadeIn">
    <div>
      <h1>{film && film.node.title}</h1>
      <ul>
        <li>Director: {film && film.node.director}</li>
        <li>Producer: {film && film.node.producer}</li>
        <li>Release Date: {film && film.node.release_date}</li>
        <li>
          <Link
            to={`${props.data.site.pathPrefix}/film/${film &&
              film.node.episode_id}/starships`}
          >
            Starships
          </Link>
        </li>
        <li>
          <Link
            to={`${props.data.site.pathPrefix}/film/${film &&
              film.node.episode_id}/vehicles`}
          >
            Vehicles
          </Link>
        </li>
        <li>
          <Link
            to={`${props.data.site.pathPrefix}/film/${film &&
              film.node.episode_id}/species`}
          >
            Species
          </Link>
        </li>
      </ul>
    </div>
    <BackButton />
  </div>
);

export default Film;
