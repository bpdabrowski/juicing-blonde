import React from 'react';
import {
    ButtonContainer,
    ButtonRoute
  } from './PillButtonElements';
  
const PillButton = () => {
  return (
    <ButtonContainer>
        <ButtonRoute href="../all-posts">
            View Posts
        </ButtonRoute>
    </ButtonContainer>
  );
};
  
export default PillButton;