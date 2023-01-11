import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
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
    color: var(--random3);
    border-bottom: 1rem;
  }

  button {
    width: 25%;
    border-radius: 10px 0 0 0;
    color: var(--whiteFixed);
    background-color: var(--random2);
    max-width: max-content;

    &:hover {
      background-color: var(--random3);
    }

    @media (max-width: 615px) {
      width: 45%;
      font-size: 12px;
    }
  }
`;

export const BoxImage = styled.div`
  margin-top: 4rem;
  align-items: center;
  justify-content: center;

  div {
    margin-bottom: 2rem;
    align-items: center;
    justify-content: center;

    span {
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      color: var(--random6);
    }
  }

  img {
    border-radius: 20px;
    max-width: 80vw;
    max-height: 80vh;
  }
`;
