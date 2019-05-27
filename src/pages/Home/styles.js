import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  img {
    width: 16%;
  }
`;

export const Form = styled.form`
  display: flex;
  max-width: 400px;
  width: 100%;

  input {
    background-color: #fff;
    border: none;
    border-radius: 4px;
    color: #444;
    flex: 1;
    font-size: 18px;
    font-weight: bold;
    height: 50px;
    margin-right: 10px;
    padding: 0 20px;
  }

  button {
    background-color: #bf8fb7;
    border: 0;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    height: 50px;
    margin-left: 10px;
    padding: 0 20px;
    width: 100%;

    &:hover {
      background-color: #ab6fa1;
    }
  }

  select {
    appearance: none;
    background-color: #e9ecf2;
    border: 2px solid #aaadbf;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    height: 50px;
    padding: 10px;
    -webkit-appearance: none;
  }
`;
