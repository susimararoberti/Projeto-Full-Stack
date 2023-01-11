import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(var(--grey8), var(--grey9));
`;

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-top: 3rem;
  gap: 2rem;

  h1 {
    font-weight: 600;
    font-size: 22px;
    color: var(--random9);
    border-bottom: 1rem;
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 1rem;
    border: solid 3px var(--random8);
    border-radius: 10px 0 0 0;
    margin-bottom: 3rem;
    background-color: var(--sucess3);

    input {
      padding: 1rem;
      border-radius: 10px 0 0 0;
      border: solid 1px var(--random7);
      margin-right: 1rem;
      font-size: 16px;
      font-weight: 600;
      color: var(--random9);
      background-color: var(--grey10);

      @media (max-width: 615px) {
        font-size: 12px;
      }
    }

    button {
      width: 25%;
      border-radius: 10px 0 0 0;
      color: var(--whiteFixed);
      background-color: var(--random7);

      &:hover {
        background-color: var(--random9);
      }

      @media (max-width: 615px) {
        font-size: 12px;
      }
    }
  }
`;

export const BoxImage = styled.div`
  img {
    border-radius: 20px;
  }
`;
