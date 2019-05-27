import React from "react";
import PropTypes from "prop-types";

import { Container, Dogs } from "./styles";

const DogsList = ({ dogsList }) => (
  <Container>
    <p>{dogsList}</p>
    {/* {dogs.map(dog => (
      <Dogs key={dog.id}>
        <header>
          <img src={dog.owner.avatar_url} alt={dog.owner.login} />
          <strong>{dog.name}</strong>
          <small>{dog.owner.login}</small>
        </header>

        <ul>
          <li>
            {dog.stargazers_count} <small>starts</small>
          </li>
          <li>
            {dog.forks_count} <small>forks</small>
          </li>
          <li>
            {dog.open_issues_count} <small>issues</small>
          </li>
          <li>
            {dog.lastCommit} <small>last commit</small>
          </li>
        </ul>
      </Dogs>
    ))} */}
  </Container>
);

DogsList.propTypes = {
  dogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string
      })
      // stargazers_count: PropTypes.number,
      // forks_count: PropTypes.number,
      // open_issues_count: PropTypes.number,
      // pushed_at: PropTypes.string
    })
  ).isRequired
};

export default DogsList;
