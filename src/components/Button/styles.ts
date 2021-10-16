import styled from "styled-components";

export const Container = styled.button`
  background-color: transparent;
  background-image: none;
  border: 2px solid var(--gray-200);
  border-radius: 0.25rem;
  padding: 0.4rem 1rem;
  font-size: 0.75rem;
  cursor: pointer;

  &.selected {
    background-color: var(--success);
    border-color: var(--success);
    color: var(--white);
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledButton = styled.button`
  background-color: transparent;
  background-image: none;
  border-radius: 0.25rem;
  padding: 0.4rem 1rem;
  font-size: 0.75rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledWhiteButton = styled(StyledButton)`
  border: 2px solid var(--gray-200);

  &.selected {
    background-color: var(--success);
    border-color: var(--success);
    color: var(--white);
  }
`;

export const StyledDarkButton = styled(StyledButton)`
  border: 2px solid var(--gray-800);
  background: var(--gray-800);
  color: var(--white);

  &.selected {
    background-color: var(--success);
    border-color: var(--success);
    color: var(--white);
  }
`;
