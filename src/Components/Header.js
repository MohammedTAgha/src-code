
import React from 'react'
import ReactDOM from 'react-dom'

import "./../Styles.css";
//import { Button } from "reactstrap";
import hero from './../Assets/heroImg.png'
import {Cta,Button} from "./../Elements/Eements";

function Header() {
  return (
    <div>
      <div class="nav-bar">
        {/* logo */}
        <div class="nav-content">
          <div class="logo">surce code</div>
          {/* mnue */}
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">CODES</a>
            </li>
            <li>
              <a href="/">PRICING</a>
            </li>
            <li>
              <a href="/">PROJECTS</a>
            </li>
            <li>
              <a href="/">ABOUT</a>
            </li>
          </ul>
          <div>
            <Cta outLined ml={"10px"} mr={"10px"}>
              SIGN UP
            </Cta>
            <Cta ml={"10px"} mr={"10px"}>
              LOG IN
            </Cta>
          </div>
        </div>
        {/* buttons */}
      </div>
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
  );
}

export default Header;
