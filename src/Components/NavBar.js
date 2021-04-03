import React from 'react'

import "./../Styles.css";
import {Cta,Button} from "./../Elements/Eements";

const NavBar = () => {
    return ( 
        <>
         {/* nav */}
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
      {/* nav end */}
     
        </>
     );
}
 
export default NavBar;
