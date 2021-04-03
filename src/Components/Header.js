
import React from 'react'
import ReactDOM from 'react-dom'

import "./../Styles.css";
import hero from './../Assets/heroImg.png'
import {Cta,Button} from "./../Elements/Eements";
import Second from './Second'
function Header() {
  return (
    <>
    <div>
      <div class='head-container'>
      <div className="headd">
        <section className="text">
          <div className="txt1">
            <div style={{marginLeft: 14,}}>
              <span>what is surse code</span>
              <div className="htext">
                Code will be <br />
                Fast, Easy, Efficiency
              </div>
              <article>
              With scorse code you coding journy will be easyer It enables you to get all the codes you need easily and save time and effort , Here you find thousands of ready-made and precisely written codes
              </article>
              <div>
              <Button w='125px' >Explore code</Button>
              <Button outLined w='125px' ml={'12px'}>Projects</Button>

              </div>
            </div>
          </div>
        </section>
        <section className="img">
          <img src={hero}></img>
        </section>
      </div>
      </div>
     
    </div>
    <Second/>
    </>
  );
}

export default Header;
