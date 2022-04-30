import styled from 'styled-components';

export const TextContainer = styled.div`
  ${'' /* display: flex;
  width: 100%;
  justify-content: right; */}
  width: 54%;
  ${'' /* border: 1px solid #c3c3c3; */}
  ${'' /* display: flex; */}
  float: right;
  margin-right: 78px;
  margin-top: 50px;
`

export const ChildTextConteiner = styled.div`
    width: 100%;
  ${'' /* border: 1px solid #c3c3c3; */}
  display: flex;
  float: right;
  margin-top: 18px;
`

export const PoppinsText = styled.div`
    font-family: "Poppins", var(--font-heading);
    padding: 4px;
    font-size: 28px;
    font-weight: var(--fontWeight-semibold);
    color: var(--color-accent);
`

export const LargePoppinsText = styled.div`
    font-family: "Poppins", var(--font-heading);
    padding: 4px;
    font-size: 69px;
    font-weight: var(--fontWeight-semibold)
`

export const SmallPoppinsText = styled.div`
    font-family: "Poppins", var(--font-heading);
    padding: 4px;
    font-size: 18px;
    margin-top: 18px;
    margin-left: 30px;
    padding-top: 30px;
`