import React, { useEffect, useState, useRef } from "react";
import { Header, Form } from "./styles";
import doggyImage from "../../assets/doggy.png";
import { DogsList } from "../../components/DogsList";

export const Home = () =>  {

  const [breeds, setBreeds] = useState([]);
  const [dogName, setDogName] = useState('');
  const [dogsList, setDogsList] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const baseURL = "https://dog.ceo/api";
  const dogNameInput = useRef(null);

  useEffect(() => {
    fetch(`${baseURL}/breeds/list/all`).then(response => response.json().then(data => {
      const arrResult = Object.entries(data.message).map(breed => {
        if (breed[1].length) return breed[1].map(b => `${breed[0]}-${b}`)
        else return [breed[0]]
      })

      const arrBreeds = arrResult.flatMap(breed => breed)

      setBreeds(arrBreeds)
    })).catch(error => console.log(error.data.message))
  }, [])

  useEffect(() => {
    dogNameInput.current.focus();
  }, [dogName]);

  const handleBreeds = breed =>
    fetch(`${baseURL}/breed/${breed}/images/random`)
      .then(response => response.json().then(data => data.message))
      .catch(error => console.log(error.data.message));

  const handleAddDog = async e => {
    e.preventDefault();

    const dogImage = await handleBreeds(selectedValue);
    const newDogs = {
      breed: selectedValue,
      date: new Date(),
      name: dogName,
      img: dogImage
    };

    setDogsList(dogsList => [...dogsList, newDogs]);
    setDogName('');
    setSelectedValue('');

    localStorage.setItem("dogs", JSON.stringify(...dogsList));
  };

  return (
    <>
      <Header>
        <img src={doggyImage} alt="doggyImage" />
        <h1>Dogs register</h1>
      </Header>
      <Form onSubmit={e => handleAddDog(e)}>
        <label>dog name:</label>
        <input
          ref={dogNameInput}
          type="text"
          placeholder="type something..."
          value={dogName}
          onChange={e => setDogName(e.target.value)}
        />
        <label>dog breed:</label>
        <select
          value={selectedValue}
          onChange={e => setSelectedValue(e.target.value)}
        >
          <option value="">select something...</option>
          {breeds.map(breed => {
            return (
              <option value={breed} key={breed}>
                {breed}
              </option>
            );
          })}
        </select>
        <button type="submit" disabled={!dogName}>save</button>
      </Form>
      <DogsList dogsList={dogsList} setDogsList={setDogsList}/>
    </>
  );
}
