import React, { Component } from "react";

import { Wrapper, Form } from "./styles";

import image from "../../assets/akita.png";

import DogsList from "../../components/DogsList";
import api from "../../services/api";
import { className } from "postcss-selector-parser";

export default class Home extends Component {
  state = {
    breeds: [],
    dogNameInput: "",
    dogsList: [],
    selectedValue: ""
  };

  componentDidMount() {
    api
      .get(`breeds/list/all`)
      .then(response => {
        const arrResult = Object.entries(response.data.message).map(breed => {
          if (breed[1].length) {
            return breed[1].map(b => `${breed[0]}-${b}`);
          } else {
            return [breed[0]];
          }
        });

        const arrBreeds = arrResult.flatMap(breed => breed);

        this.setState({
          breeds: arrBreeds
        });
      })
      .catch(error => console.log(error.response));
  }

  handleBreeds = breed =>
    api
      .get(`breed/${breed}/images/random`)
      .then(response => response.data.message)
      .catch(error => console.log(error.response));

  handleAddDog = async e => {
    e.preventDefault();

    const { dogNameInput, selectedValue, dogsList } = this.state;
    console.log(dogsList);

    const dogImage = await this.handleBreeds(selectedValue);
    const newDogs = {
      breed: selectedValue,
      date: new Date(),
      name: dogNameInput,
      img: dogImage
    };

    let listDog = dogsList;

    listDog.push(newDogs);

    this.setState({
      dogNameInput: "",
      dogsList: listDog
    });

    localStorage.setItem("dogs", JSON.stringify(listDog));
  };

  render() {
    const { breeds, dogsList, dogNameInput, selectedValue } = this.state;

    return (
      <Wrapper>
        <img src={image} alt="Hachiko" />

        <Form onSubmit={e => this.handleAddDog(e)}>
          <input
            type="text"
            placeholder="nome do cãozinho"
            value={dogNameInput}
            onChange={e => this.setState({ dogNameInput: e.target.value })}
          />
          <select
            value={selectedValue}
            onChange={e => this.setState({ selectedValue: e.target.value })}
          >
            <option value="">Raça</option>
            {breeds.map(breed => {
              return <option value={breed}>{breed}</option>;
            })}
          </select>
          <button type="submit">Cadastrar</button>
        </Form>
        <DogsList dogsList={dogsList} />
      </Wrapper>
    );
  }
}
