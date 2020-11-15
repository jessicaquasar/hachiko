import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import doggyImage from "../../assets/doggy.png";
import { Container, Dogs } from "./styles";

const DogsL = ({ dogsList }) => (
  <Container>
    {dogsList.map((dog, index) => (
      <Dogs key={index}>
        <div>
          <img src={dog.img ?? doggyImage} alt={dog?.name} />
          <strong>{(dog?.name).toUpperCase()}</strong>
          <small>{dog?.breed}</small>
          <small>{moment(dog?.date).format("LLL")}</small>
        </div>
      </Dogs>
    ))}
  </Container>
);

DogsL.propTypes = {
  dogsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      img: PropTypes.string,
      breed: PropTypes.string,
      date: PropTypes.date
    })
  ).isRequired
};

export default DogsL;
