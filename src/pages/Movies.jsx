import React from "react";
import { movies } from '../movieDummy';
import Container from '../components/Container/Container';


function Movies() {

    return (
      <div className="movieContainer">
        <ul>
          {movies.results.map((props) => (
            <li key={props.id}>
            <Container props={props} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
export default Movies;