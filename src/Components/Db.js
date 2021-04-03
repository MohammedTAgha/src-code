import React,{ useState, useEffect } from 'react';

import "./../Styles.css";
import {Input,SmallText,HeadingText ,BodyText,Button,Chip} from'../Elements/Eements'
const Db = () => {
    const [coulomns, setcoulomns] = useState(['hhh','wret'])
    const [col, setCol] = useState('')
    
    const handleInputChange = (text) => {
        setCol(text.target.value)
        console.log(col)
      }
    
      const ctaHandler = () => {
        console.log("♦♦♦")
        setcoulomns([...coulomns, col])
        setCol('')
      }
    return ( 
        <>
        <div className='database-container'>
        <section className='database'>
            <HeadingText mt='24px' mb='24px'>Helper file genarator</HeadingText>
            <div className='inputs' >
                <Input placeholder={'DB name'}></Input>
                <Input placeholder={'Table name'}></Input>
                <Input placeholder={'version'} w='98px'></Input>
            </div>
            <BodyText mt='12px'>
            Add coulomns
            </BodyText>
            <div className='inputs' >
        <Input placeholder={'col'}value={col} onChange={e => handleInputChange(e)}></Input>
        <Button w='auto'  onClick={() => ctaHandler()}>Add Colomn</Button>
        </div>
        <div className='chips'>
        { coulomns.map(i => (<Chip key={i} > {i} </Chip>))}
       

        </div>
        </section> 
        </div>
        </>
     );
}
 
export default Db;