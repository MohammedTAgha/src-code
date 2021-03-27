
import styled from 'styled-components';

export const Cta = styled.button`
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
//// btn
export const Button = styled.button`
// main styles
width:${props=> props.w};
height: 48px;
height: ${props=> props.h};
position:${props=> props.position};


// margin 

left:${props=> props.l};
right:${props=> props.r};
bottom:${props=> props.b};
top:${props=> props.t};

// margin 
margin:${props=> props.ml};
margin-left:${props=> props.ml};
margin-right:${props=> props.mr};
margin-bottom:${props=> props.mb};
margin-top:${props=> props.mt};
// padding
padding:0px 18px;
padding:${props=> props.margin};
padding-left:${props=> props.pl};
padding-right:${props=> props.pr};
padding-bottom:${props=> props.pb};
padding-top:${props=> props.pt};
color:${props=>(props.outLined ? '#3C64B1':'#fff')};
background:${props=>(props.outLined ? '#00000000':'#3C64B1')} ;
border:none ;
border: ${props=>(props.outLined ? '1px solid #3C64B1' : 'none')};
// font props
font-family: Mulish;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 18px;
/* Accent / Default */
outline: none;
cursor: pointer;

transition: all 0.25s ease 0s;

// hover styles 


&:hover {
  ${props=>(props.outLined ?
    'background-color:rgba(96, 176, 207, 0.2);'
    :'background:#00000000 ;' +
    'color:#3C64B1 ;'+
    'border:1px solid #3C64B1' )}
}

`

export const Card = styled.div`
width: 350px;
height: 490px;
background: #E4ECF9;
box-shadow: 0px 3px 25px rgba(119, 129, 147, 0.19);
 display: flex;
 align-items: center;
 flex-direction: column;
 


`

/// texts 
export const Text = styled.div`

// margin 
margin:${props=> props.ml};
margin-left:${props=> props.ml};
margin-right:${props=> props.mr};
margin-bottom:${props=> props.mb};
margin-top:${props=> props.mt};
// padding
padding:0px 0px;
padding:${props=> props.margin};
padding-left:${props=> props.pl};
padding-right:${props=> props.pr};
padding-bottom:${props=> props.pb};
padding-top:${props=> props.pt};



font-family: Mulish;
font-style: normal;
font-weight: ${props=> props.fw} ;
font-size: 24px;
font-size:${props=> props.fs} ;



color: #3C64B1;


`





