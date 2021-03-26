
import styled from 'styled-components';

const Cta = styled.button`
width: 91px;
height: 48px;
margin:${props=> props.margin};
margin-left: ,:${props=> props.ml};
margin-right:${props=> props.mr};
margin-bottom: ,:${props=> props.mb};
margin-top:${props=> props.mt};

right: 0px;
top: calc(50% - 42px/2);
color:${props=>(props.outLined ? '#3C64B1':'#fff')};
font-family: Mulish;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 18px;
/* Accent / Default */
outline: none;
cursor: pointer;
border:none ;
background:${props=>(props.outLined ? '#00000000':'#3C64B1')} ;
transition: all 0.25s ease 0s;

&:hover {
    background-color:${props=>(props.outLined ? 'rgba(96, 176, 207, 0.2)' : '#00000000')} ;
    color: ${props=>(!props.outLined ? '#3C64B1' : '#3C64B1')};
    
    border: ${props=>(props.outLined ? '1px solid #BACEF5' : 'none')};

  }
`;
//const CtaStyle = Sty

export default Cta;