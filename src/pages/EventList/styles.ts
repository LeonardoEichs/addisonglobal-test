import styled from "styled-components";

export const Container = styled.div``;

export const ContentView = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 2rem;

  @media (min-width: 520px) {
    align-items: center;
  }

  & > * {
    margin-bottom: 1rem;
    @media (min-width: 520px) {
      width: max(540px, 50%);
    }
  }
`;
