
import styled from 'styled-components';

export const Cta = styled.button`
width: 91px;
height: 48px;
width:${props=> props.w};
height: ${props=> props.h};
position:${props=> props.position};

margin:${props=> props.margin};
margin-left: :${props=> props.ml};
margin-right:${props=> props.mr};
margin-bottom: :${props=> props.mb};
margin-top:${props=> props.mt};

right: 0px;

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

// main styles
width:${props=> props.w};
height: 48px;
height: ${props=> props.h};
position:${props=> props.position};

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


left:${props=> props.l};
right:${props=> props.r};
bottom:${props=> props.b};
top:${props=> props.t};

font-family: Mulish;
font-style: normal;
font-weight: ${props=> props.fw} ;
font-size: 24px;
font-size:${props=> props.fs} ;
color: #3C64B1;

`
export const Input = styled.input`

// main styles
width: 176px;
width:${props=> props.w};
height: 48px;
height: ${props=> props.h};
position:${props=> props.position};

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


left:${props=> props.l};
right:${props=> props.r};
bottom:${props=> props.b};
top:${props=> props.t};

padding-left:12px;

// font 
font-family: Mulish;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;

letter-spacing: 0.3px;

color: #1A2946;

background: rgba(186, 206, 245, 0.26);
border: 2px solid #3C64B1;
box-sizing: border-box;
outline: none;

transition: all 0.5s ease 0s;

&:hover {
  border: 3px solid #3C64B1;
}
`

export const SmallText = styled.div`
// main styles
width:${props=> props.w};
height: 48px;
height: ${props=> props.h};
position:${props=> props.position};

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


left:${props=> props.l};
right:${props=> props.r};
bottom:${props=> props.b};
top:${props=> props.t};


font-weight: ${props=> props.fw} ;
font-size:${props=> props.fs} ;
font-family: ${props=> props.fs};

font-family: Mulish;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 22px;
/* identical to box height, or 157% */

letter-spacing: 0.3px;

color: #1A2946;
`

export const HeadingText = styled.div`

// main styles
width:${props=> props.w};
height: 48px;
height: ${props=> props.h};
position:${props=> props.position};

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


left:${props=> props.l};
right:${props=> props.r};
bottom:${props=> props.b};
top:${props=> props.t};


font-weight: ${props=> props.fw} ;
font-size:${props=> props.fs} ;
font-family: ${props=> props.fs};

font-family: Mulish;
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 56px;
/* identical to box height, or 165% */

color: #2B5CB9;
`




export const BodyText = styled.div`
// main styles
width:${props=> props.w};
height: ${props=> props.h};
position:${props=> props.position};

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


left:${props=> props.l};
right:${props=> props.r};
bottom:${props=> props.b};
top:${props=> props.t};


font-weight: ${props=> props.fw} ;
font-size:${props=> props.fs} ;
font-family: ${props=> props.fs};

font-family: Mulish;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 56px;
/* identical to box height, or 233% */

text-align: ${props=> props.align};
letter-spacing: 0.2px;

color: #2B5CB9;
`


export const Chip = styled.div`
// main styles
width: fit-content;

width:${props=> props.w};

height: ${props=> props.h};
position:${props=> props.position};

padding:4px 14px;
padding:${props=> props.margin};
padding-left:${props=> props.pl};
padding-right:${props=> props.pr};
padding-bottom:${props=> props.pb};
padding-top:${props=> props.pt};


background: rgba(186, 206, 245, 0.26);
border: 1px solid #3C64B1;
box-sizing: border-box;
border-radius: 200px;
cursor: pointer;

`


