import React from 'react'

import "./../Styles.css";
import {Cta,Button, Card, Text} from "./../Elements/Eements";
import list from "./../Assets/ListView.svg";


function CardItem(props) {
    var name =props.data.title
    var description =props.data.description

    return (
        <Card>
            <div className="imgg">
              <img src={list} className='card-img'></img>
            </div>
            <div class='txt-container'>
              <Text
              fw='bold'
              mt='14px'
              >{name}</Text>
              <div className='description'>{description}</div>
              <Button className='explore' >Explore Code</Button>
            </div>
          </Card>
    )
    }
export default CardItem 