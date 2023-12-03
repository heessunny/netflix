import React from 'react'
import { programs } from '../tvDummy';
import Container from '../components/Container/Container';

function TV() {
    return (
        <div className="movieContainer">
          <ul>
            {programs.results.map((props) => (
              <li key={props.id}>
              <Container props={props} />
              </li>
            ))}
          </ul>
        </div>
      );
}

export default TV;