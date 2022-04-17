import styled, {css} from 'styled-components';

export const TabContainer = styled.div `
`
export const TabWrap = styled.div `
display: flex;
width: 50%;
height: 50px;
border-bottom: 5px solid #EEEEEE;
margin: 0 auto;
justify-content: space-between;
padding: 0px 110px;
position: relative;
`
export const TabRadio = styled.input `
display: none;
&:checked + label{
    color: black;
}
`
export const TabLabel = styled.label `
font-weight:bold ;
font-size: 23px;
color: #bbb;
cursor: pointer;
`
export const SliderBar = styled.div`
width: 33%;
height: 5px;
background-color: #11ACAD;
position: absolute;
top: 50px;
${({ locations }) => css`
    left: ${locations};
  `}
  transition: 0.4s ease-out;

`