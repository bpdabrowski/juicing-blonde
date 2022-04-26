import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
export const ButtonRoute = styled.a`
    background-color: var(--color-accent);
    border: none;
    color: white;
    padding: var(--spacing-4) var(--spacing-8);
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: var(--spacing-20) var(--spacing-0);
    cursor: pointer;
    border-radius: 30px;
    font-family: Questrial, var(--font-heading);
    font-weight: var(--fontWeight-semibold);
    text-transform: capitalize;
    font-size: var(--fontSize-1);

  &:hover {
    background-color: white;
    color: var(--color-accent); 
  }
`