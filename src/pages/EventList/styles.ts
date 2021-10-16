import styled from "styled-components";

export const Container = styled.div``;

export const ContentView = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 2rem;

  & > * {
    margin-bottom: 1rem;
  }
`;
