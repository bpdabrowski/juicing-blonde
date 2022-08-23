import React from 'react';
import {
  TextContainer,
  HeadTitleText,
  HeadMainText,
  ChildTextContainer,
  HeadSubText,
  LandingRightContainer,
  MainLandingContainer,
  ImageContainer,
} from './LandingTextElements';
import { StaticImage } from "gatsby-plugin-image"
import PillButton from '../PillButton'

const LandingText = () => {
    return (
        <React.Fragment>
            <MainLandingContainer>
                <LandingRightContainer>
                </LandingRightContainer>
                <LandingRightContainer>
                    <TextContainer paddingTop="var(--spacing-20)">
                        <HeadTitleText>Juicing Blonde</HeadTitleText>
                    </TextContainer>   
                    <TextContainer>
                        <ChildTextContainer width="37%">
                            <HeadMainText>
                                The world
                                <br></br>
                                of juicing
                            </HeadMainText>
                        </ChildTextContainer>
                        <ChildTextContainer width="50%">
                            <HeadSubText>Discover everything you need to know about juicing, treat your body with kindness and it will take care of you.</HeadSubText>
                        </ChildTextContainer>
                    </TextContainer>
                        <PillButton text="Contact Me" action="mailto: ashley@juicingblonde.com" margin="8"/>
                </LandingRightContainer>
                <ImageContainer width="33%">
                    <StaticImage 
                        src="/Users/bdabrowski/Projects/juicing-blonde/react/content/assets/mainLandingPicture.png" 
                        placeholder="blurred"                            
                    />    
                </ImageContainer>
            </MainLandingContainer>
        </React.Fragment>
    );
  };
    
  export default LandingText;