import React from 'react';
import {
    ButtonContainer,
    ButtonRoute
  } from './PillButtonElements';
  
const PillButton = ({ text, action, position, margin }) => {

  return (
    <ButtonContainer position={position}>
        <ButtonRoute href={action} margin={`var(--spacing-${margin})`}>
            {text}
        </ButtonRoute>
    </ButtonContainer>
  );
};
  
export default PillButton;