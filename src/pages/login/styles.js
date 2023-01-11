import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: 5vh;

  button {
    border-radius: 0 10px 0 0;
  }
`;

export const Errors = styled.span`
  font-size: 0.8rem;
  color: var(--alert1);
`;
