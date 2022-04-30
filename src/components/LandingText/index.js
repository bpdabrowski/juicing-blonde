import React from 'react';
import {
  TextContainer,
  PoppinsText,
  LargePoppinsText,
  ChildTextConteiner,
  SmallPoppinsText
} from './LandingTextElements';
import { HeadingText } from '../Stateless/HeadingText';

const LandingText = () => {
    return (
        <TextContainer>
            <PoppinsText>Go green.</PoppinsText>
            <ChildTextConteiner>
                <LargePoppinsText>The world of plants.</LargePoppinsText>
                <SmallPoppinsText>Discover everything you need to know about your plants, treat them with kindness and they will take care of you.</SmallPoppinsText>
            </ChildTextConteiner>
        </TextContainer>
    );
  };
    
  export default LandingText;