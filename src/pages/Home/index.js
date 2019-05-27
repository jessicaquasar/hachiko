import React, { Component } from "react";
import moment from "moment";

import { Wrapper, Form } from "./styles";

import image from "../../assets/akita.png";

import DogsList from "../../components/DogsList";
import api from "../../services/api";

export default class Home extends Component {
  state = {
    breeds: [],
    dogsList: [],
    dogNameInput: ""
  };

  componentDidMount() {
    api
      .get(`/list/all`)
      .then(response => {
        console.log(response);
        this.setState({
          breeds: response.data.message
        });
      })
      .catch(error => console.log(error.response));
  }

  handleAddDog = e => {
    e.preventDefault();

    const { dogNameInput, dogsList } = this.state;

    const hour = new Date();

    // const hour = hour.moment().format('LLL')

    this.setState({
      dogsList: dogNameInput,
      dogNameInput: ""
    });

    localStorage.setItem("dogs", JSON.stringify(dogNameInput));
  };

  render() {
    const { breeds, dogsList, dogNameInput } = this.state;

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
          <select value={this.state.breeds} onChange={this.handleChange}>
            {breeds &&
              breeds.length > 0 &&
              breeds.map(breed => {
                return <option> {breed.data.message}</option>;
              })}
          </select>
          <button type="submit">Cadastrar</button>
        </Form>
        <DogsList dogsList={dogsList} />
      </Wrapper>
    );
  }
}
