import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 83px;
`
export const ButtonRoute = styled.a`
    background-color: #5E9270;
    border: none;
    color: white;
    padding: 14px 26px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 21px;
    font-family: Questrial;
    font-weight: var(--fontWeight-semibold);
    text-transform: capitalize;
    font-size: 15px;

  &:hover {
    background-color: white;
    color: #5E9270; 
  }
`