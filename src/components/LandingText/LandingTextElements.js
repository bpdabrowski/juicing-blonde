import styled from 'styled-components';

export const LandingRightContainer = styled.div`
  width: var(--maxWidth-3xl);
  min-width: var(--maxWidth-3xl);
  float: right;
  margin-right: var(--spacing-20);
  margin-top: var(--spacing-12);
  @media (max-width: 915px) {
    min-width: 0px;
    width: 100vw;
    float: left;
  }
`

export const TextContainer = styled.div`
  width: var(--maxWidth-3xl);
  min-width: var(--maxWidth-3xl);
  flex-direction: ${props => props.flexDirection};
  float: right;
  @media (max-width: 915px) {
    min-width: var(--spacing-0);
    width: 100vw;
    float: left;
    display: flex;
    flex-direction: column-reverse;
  }
`

export const ChildTextContainer = styled.div`
  width: ${props => props.width};
  display: flex;
  float: right;
  margin-top: var(--spacing-5);
  min-width: 25%;
  @media (max-width: 915px) {
    width: 100%;
  }
`

export const HeadTitleText = styled.div`
    font-family: "Poppins", var(--font-heading);
    padding: var(--spacing-1);
    font-size: var(--fontSize-4);
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