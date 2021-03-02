import styled from "styled-components";

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  justify-content: center;
  justify-items: center;
  margin-top: 50px;
`;

export const Dogs = styled.li`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  line-height: 28px;
  margin: 10px 10px;
  position: relative;
  text-align: center;
  width: 250px;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 30px;
    word-break: break-word;

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
      max-height:200px;
      max-width:220px;
      width: auto;
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
