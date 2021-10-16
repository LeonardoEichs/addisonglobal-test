import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Panel = styled.div`
  background-color: var(--white);
  border: 2px solid var(--gray-200);
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 1.25rem;
  float: right;
  width: 80%;
  height: 100vh;

  span {
    font-size: 3rem;
    color: var(--gray-800);
  }
`;

export const SelectedItemsDisplay = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;
export const SelectedItems = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;
  & > * {
    margin-bottom: 1.25rem;
  }

  h1 {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--gray-800);
  }
`;
