import React from 'react';
import {
  TextContainer,
  HeadTitleText,
  HeadMainText,
  ChildTextContainer,
  HeadSubText,
  LandingRightContainer
} from './LandingTextElements';

const LandingText = () => {
    return (
        <React.Fragment>
        <LandingRightContainer>
            <TextContainer flexDirection="row">
                <HeadTitleText>Go green.</HeadTitleText>
            </TextContainer>    
            <TextContainer flexDirection="row-reverse">    
                <ChildTextContainer width="50%">
                    <HeadSubText>Discover everything you need to know about your plants, treat them with kindness and they will take care of you.</HeadSubText>
                </ChildTextContainer>
                <ChildTextContainer width="50%">
                    <HeadMainText>
                        The world 
                        <br></br>
                        of plants
                    </HeadMainText>
                </ChildTextContainer>
            </TextContainer>
            </LandingRightContainer>
        </React.Fragment>
    );
  };
    
  export default LandingText;