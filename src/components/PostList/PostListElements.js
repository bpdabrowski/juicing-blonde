import styled from 'styled-components';

export const CellHolder = styled.div`
  float: left;
  width: 43%;
  margin-top: ${props => props.marginTop};
  margin-right: var(--spacing-8);
  margin-bottom: ${props => props.marginBottom};
  margin-left: var(--spacing-8);

  @media screen and (max-width: 954px) {
    width: 100%;
    margin: var(--spacing-8) auto;
  }
`

export const StretchWrapper = styled.div`
	width: 100%;
	padding-bottom: 125%; /* 4:5 aspect ratio*/
	position: relative;
    background-size: cover;
    border-radius: var(--img-borderRadius);

    & > div {
        position: absolute;
	    top: 0; bottom: 0; left: 0; right: 0;
        display: flex;
        background: linear-gradient(#00000000, #00000038);
        border-radius: var(--img-borderRadius);
    }
`

export const PostTitle = styled.div`
    align-self: flex-end;
    margin: var(--spacing-4);
    color: white;
    font-family: var(--font-heading);

    & > h2 {
        font-family: var(--font-heading);
        font-weight: var(--fontWeight-normal);
        color: white;
    }
`

export const LinkSpanner = styled.span`
    position: absolute; 
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
`