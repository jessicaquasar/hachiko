import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;

export const Dogs = styled.div`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  line-height: 28px;
  margin: 10px 10px;
  text-align: center;
  width: 250px;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 30px;

    img {
      height: auto;
      width: 100%;
    }

    strong {
      color:  #8D83FA;
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      color: #666;
      font-size: 1em;
    }
  }
`;
