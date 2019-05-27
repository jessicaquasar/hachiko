import React from "react";
import PropTypes from "prop-types";

import moment from "moment";

import { Container, Dogs } from "./styles";

const DogsL = ({ dogsList }) => (
  <Container>
    {dogsList.map((dog, index) => (
      <Dogs key={index}>
        <header>
          <img src={dog.img} alt={dog.name} />
          <strong>{dog.name}</strong>
          <small>{dog.breed}</small>
          <small>{moment(dog.date).format("LLL")}</small>
        </header>
      </Dogs>
    ))}
  </Container>
);

// DogsList.propTypes = {
//   dogs: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       img: PropTypes.string,
//       breed: PropTypes.string,
//       date: PropTypes.date
//     })
//   ).isRequired
// };

export default DogsL;
