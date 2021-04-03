import React, { useState, useEffect } from 'react'
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from './firebase';

import list from "./Assets/ListView.svg";

import "./Styles.css";
//import { Button } from "reactstrap";
import hero from './Assets/heroImg.png'
import {Header , NavBar , Db} from './Components'
import CardItem from './Components/CardItem'



import {Cta,Button, Card, Text} from "./Elements/Eements";

const App=()=> {
  const [codes,setCodes]=useState()
  const itemsRef = firebase.database().ref('items');
  useEffect(() => {
    getData()
  }, [codes])
  function addData(data){
    
    const item = {
      title:'mohammed' ,
      user: '3333'
    }
    itemsRef.push(data);
  }
 
  function getData(){
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push(item)
        console.log(item)
      }
    })}
   
   
  
  return (
    <Router>
    <div>
      <NavBar/>
      
        <Switch>
        <Route path="/" component={Header} exact />
        <Route path="/database" component={Db} exact  />

        </Switch>
     

      
    </div>
    </Router>
  );
}

export default App;
