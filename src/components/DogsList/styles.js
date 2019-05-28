import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  max-width: 1100px;
`;

export const Dogs = styled.div`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  width: 250px;

  header {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 30px;

    img {
      width: 100%;
    }

    strong {
      color: #90536b;
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      color: #666;
      font-size: 14px;
    }
  }
`;
