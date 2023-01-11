import styled from "styled-components";

export const Button = styled.button`
  text-align: center;
  cursor: pointer;
  font-weight: 600;
  border-radius: 8px;
  border-style: none;
  color: var(--whiteFixed);
  background-color: var(--random4);
  padding: 10px;
  height: 6vh;
  width: max-content;

  &:hover {
    background-color: var(--random12);
  }

  @media (max-width: 250px) {
    font-size: 0.6rem;
  }
`;
