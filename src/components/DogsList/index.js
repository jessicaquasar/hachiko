import React from "react";
import PropTypes from "prop-types";

import doggyImage from "../../assets/doggy.png";
import { Container, Dogs } from "./styles";

export const DogsList = ({ dogsList, setDogsList }) => {

  function handleRemoveDog(dog) {
    let doggy = dog;
    setDogsList(dogsList.filter((dog)=>(dog.name !== doggy)))
  }

  return (
    <Container>
      {dogsList.map((dog, index) => (
        <Dogs key={index}>
          <li>
            <button onClick={() => handleRemoveDog(dog?.name)} aria-label="remove dog">x</button>
            <img src={dog?.img !== "Breed not found (master breed does not exist)" ? dog.img : doggyImage} alt={dog?.breed} />
            <strong>{(dog?.name).toUpperCase()}</strong>
            <small>{dog?.breed}</small>
            <small>{Intl.DateTimeFormat("pt-BR").format(dog?.date)}</small>
          </li>
        </Dogs>
      ))}
    </Container>
  )
};

DogsList.propTypes = {
  dogsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      img: PropTypes.string,
      breed: PropTypes.string,
      date: PropTypes.date
    })
  ).isRequired,
  handleRemoveDog: PropTypes.func
};
