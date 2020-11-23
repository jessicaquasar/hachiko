import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  justify-content: center;
  justify-items: center;
  margin-top: 50px;
`;

export const Dogs = styled.ul`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  line-height: 28px;
  margin: 10px 10px;
  position: relative;
  text-align: center;
  width: 250px;

  li {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 30px;

    button {
      background: none;
      border: none;
      color:  #676453;
      cursor: pointer;
      font-size: 18px;
      font-weight: 600;
      position: absolute;
      top: 6px;
      right: 12px;
    }

    img {
      border-radius: 8px;
      height: auto;
      width: 100%;
    }

    strong {
      color:  #8A8468;
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      color: #666;
      font-size: 1em;
      font-weight: 600;
    }
  }
`;
