import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  min-height: 100vh;
`;

export const Itens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    padding: 0.3rem 0;
    margin: 1rem 0;

    @media (min-width: 900px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }
`;
