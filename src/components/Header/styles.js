import styled from "styled-components";

export const Box = styled.header`
  display: flex;
  align-items: center;
  width: 100vw;
  padding: 0 3rem 0 3rem;
  height: 80px;
  color: var(--grey2);

  div {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
    width: 100%;

    button {
      width: 25%;
      height: 40px;
      border-radius: 0 10px 0 0;
      color: var(--whiteFixed);
      background-color: var(--random2);
      max-width: max-content;

      &:hover {
        background-color: var(--random3);
      }

      @media (max-width: 615px) {
        font-size: 10px;
      }
    }
  }
`;
