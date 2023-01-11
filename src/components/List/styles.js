import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  margin: 0.5rem;
  background-color: var(--alert3);
  border-radius: 20px 0 0 0;
  border: 2px solid var(--random2);

  div {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 4px;

    h1 {
      font-size: 1.5rem;
      color: var(--random3);
      font-weight: 700;
      padding: 5px 0;
    }

    img {
      border-radius: 100%;
    }

    p {
      font-size: 1rem;
      color: var(--random12);
      padding: 5px 0;
      font-weight: 600;
    }
  }

  @media (min-width: 900px) {
    width: 40%;
  }
`;
