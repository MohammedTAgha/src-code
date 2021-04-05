import React,{ useState, useEffect } from 'react';

import "./../Styles.css";
import {Input,SmallText,HeadingText ,BodyText,Button,Chip} from'../Elements/Eements'
const Db = () => {
    const [coulomns, setcoulomns] = useState([])
    const [col, setCol] = useState('')
    /////////////////////////////////////////////////
    function genarateTxt(){
        var version = 1
        var databaseName ="db_name"
        var Table  ="tb_name"
    
        function companionobj(colArray){
            var comanionCol=''
            colArray.map((c) =>comanionCol=+`private val c = "${c}" \n` )
            return comanionCol
        }
    
        var dbCode=`
        class Handler(context: Context): SQLiteOpenHelper(context,DATABASE_NAME,null,DATABASE_VERSION) { \n
            companion object {
                private val DATABASE_VERSION = ${version}
                private val DATABASE_NAME = "${databaseName}"
                private val TABLE_CONTACTS = "${Table}"
                ${companionobj(['id' ,' name'])}
                
                private val KEY_NAME = "name"
                private val KEY_EMAIL = "email"
                private val KEY_PHONE = "phone"
                private val KEY_MAJOR = "major"
                private val KEY_SALARY = "salary"
            }
        
        `
        return dbCode
    }
/////////////////////////////////////////////////////////    
    useEffect(() => {
       

      
    }, [coulomns])
    const handleInputChange = (text) => {
        setCol(text.target.value)
        
    }
    const handleRemove = (id) => {
        console.log(id)
        const newList = coulomns.filter((item) => item.id !== id);
 
        setcoulomns(newList);
        console.log(coulomns)
      }
    const removeItem =(index) =>{
        var i =index.target.attributes.value.value
        setcoulomns(coulomns.splice(i, 1))
       
        console.log(coulomns)
        //console.log('🗑🗑'+i +'🏁'+coulomns)
    }
      const ctaHandler = () => {
        console.log("♦♦♦")
        coulomns.push({id: Date.now(),data:col})
        console.log(coulomns)
        setCol('')
        // // test 
        // const newList = coulomns.splice(3, 1);

        // console.log('newList //')
        // console.log(newList)
        // console.log('col //')
        // console.log(coulomns)
      }
      const chipHandler = (e) => {
       // console.log(e.target.attributes.value.value)
        var deletedId=e.target.attributes.value.value
        var data=coulomns
        const updatedHero = coulomns.filter(item => item.id != deletedId);
        var filteredItems = data.filter(function (x) {
        //  console.log('x')
        //  console.log(x)

             return (x.id != deletedId);
          });
          setcoulomns(filteredItems)
         console.log('id //')
         console.log(deletedId)
         console.log('filteredItems //')
        console.log(filteredItems)
        console.log('coulomns //')
        console.log(coulomns)

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
        
        { coulomns.map((i, index) => (
        <Chip key={i.id}   value={i.id} onClick={e =>chipHandler(e)} >{i.data}</Chip>
        ))}
        <p>{genarateTxt()}</p>
       

        </div>
        </section> 
        </div>
        </>
     );
}
 
export default Db;