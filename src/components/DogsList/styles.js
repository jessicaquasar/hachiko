import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const Dogs = styled.div`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
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
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      color: #666;
      font-size: 14px;
    }
  }
`;
