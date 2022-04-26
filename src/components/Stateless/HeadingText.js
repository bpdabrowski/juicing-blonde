import styled from 'styled-components';

export const HeadingText = styled.h2`
    font-family: "Roboto", var(--font-heading);
    text-align: center;
    margin-bottom: var(--spacing-20);
    font-size: ${props => props.fontSize};
    font-weight: var(--fontWeight-semibold)
`