import styled from 'styled-components';

export const MainLandingContainer = styled.div`
  float: right;
  @media (max-width: 915px) {
    min-width: 0px;
    width: 100vw;
    float: left;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const LandingRightContainer = styled.div`
  width: 66vw;
  min-width: var(--maxWidth-3xl);
  float: right;
  padding-left: var(--spacing-20);
  padding-right: var(--spacing-20);
  @media (max-width: 915px) {
    min-width: 0px;
    width: 100vw;
    float: left;
  }
`

export const TextContainer = styled.div`
  padding-top: ${props => props.paddingTop};
  @media (max-width: 915px) {
    min-width: var(--spacing-0);
    width: 100vw;
    float: left;
    display: flex;
    flex-direction: column;
  }
`

export const ChildTextContainer = styled.div`
  width: ${props => props.width};
  float: left;
  min-width: 25%;
  @media (max-width: 915px) {
    width: 100%;
  }
`

export const ImageContainer = styled.div`
  width: ${props => props.width};
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 75%, transparent 100%);
  min-width: 25%;
  @media (max-width: 915px) {
    width: 100%;
  }
`

export const HeadTitleText = styled.div`
    font-family: "Poppins", var(--font-heading);
    padding: var(--spacing-1);
    font-size: var(--fontSize-5);
    font-weight: var(--fontWeight-semibold);
    color: var(--color-accent);
`

export const HeadMainText = styled.div`
    font-family: "Poppins", var(--font-heading);
    padding: var(--spacing-1);
    font-size: 69px;
    font-weight: var(--fontWeight-semibold);
`

export const HeadSubText = styled.div`
    font-family: "Poppins", var(--font-heading);
    padding: var(--spacing-1);
    font-size: var(--fontSize-2);
    margin-top: var(--spacing-0);
    margin-left: var(--spacing-8);
    padding-top: var(--spacing-8);
    line-height: 2.0;
    @media (max-width: 915px) {
      margin-left: var(--spacing-0);
    }
`