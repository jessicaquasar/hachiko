import styled from "styled-components";

export const Header = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  img {
    height: 300px;
    width: 300px;
  }
`;

  export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  font-size: 1em;
  justify-content: center;
  padding: 0 12px;

  @media all and (max-width: 425px) {
    justify-content: space-evenly;
  }

  label {
    font-weight: bold;
    line-height: 36px;
    margin-right: 10px;
  }

  input {
    background-color: #fff;
    border: none;
    border-radius: 4px;
    color: #444;
    flex: 1;
    font-size: 1em;
    font-weight: bold;
    height: 50px;
    margin-right: 10px;
    max-width: 300px;
    width: 232px;
    padding: 0 20px;

    @media all and (max-width: 425px) {
      margin-bottom: 10px;
      margin-right: 0;
      width: 60vw;
    }
  }

  button {
    background-color: #A69F80;
    border: 0;
    border-radius: 4px;
    color: #000;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
    height: 50px;
    margin-left: 10px;
    padding: 0 20px;

    &:disabled {
      opacity: 0.5;
    }

    @media all and (max-width: 425px) {
      margin-left: 0;
      width: 100%;
    }
  }

  select {
    appearance: none;
    background-color: #e9ecf2;
    border: 2px solid #aaadbf;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
    height: 50px;
    padding: 10px;
    -webkit-appearance: none;
    width: 232px;

    @media all and (max-width: 425px) {
      margin-bottom: 10px;
      margin-left: 0;
      width: 62vw;
    }
  }
`;
