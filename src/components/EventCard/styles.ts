import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid var(--gray-200);
  display: flex;
  flex-direction: column;
  font-size: 0.4rem;
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  & > h1 {
    font-size: 1rem;
    font-weight: 500;
  }
`;
export const MarketHeader = styled.h1`
  color: var(--gray-200);
  font-size: 1rem;
  font-weight: 500;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  & > h1 {
    margin-bottom: 0.75rem;
  }
`;
export const SelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  & > * {
  }
`;
