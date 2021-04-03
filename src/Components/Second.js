import React from 'react'
import ReactDOM from 'react-dom'
import CardItem from './CardItem'

import "./../Styles.css";


function Second() {
    var Codes={
        dialog:{
            title:'android dialog',
            description:'Android AlertDialog can be used to display the dialog message with OK and Cancel buttons. It can be used to interrupt and ask the user about his/her choice to continue or discontinue.',
            img:'android dialog',
        },
        listView:{
            title:'android listview',
            description:'Displays a vertically-scrollable collection of views, where each view is positioned immediatelybelow the previous view in the list. For a more modern, flexible, and performant approach to displaying lists',
            img:'listview',
        },
        database:{
            title:'android database',
            description:'Saving data to a database is ideal for repeating or structured data, such as contact information.',
            img:'database',
        },
        notification:{
            title:'android notification',
            description:'Android Notification provides short, timely information about the action happened in the application, even it is not running. The notification displays the icon, title and some amount of the content text.',
            img:'notification',
        },
    }
    return (
        <div class='second'>
         <article>“ Copy-and-Paste was programmed by programmers <br/> for programmers actually .”</article>
         <div class='cards'>
          
          {
           Object.keys(Codes).map((item, i) => (
            <CardItem data={Codes[item]} key={i}></CardItem>
           ))}

         </div>
      </div>
    )
    }
export default Second 