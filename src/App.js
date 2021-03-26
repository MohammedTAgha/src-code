import logo from './logo.svg';
import './Styles.css';
import { Button } from 'reactstrap';
import Cta from './Elements/Eements';

function App() {
  return (
    <>
      <div class="nav-bar" >
        {/* logo */}
        <div class="nav-content" >


          <div class="logo" >surce code</div>
          {/* mnue */}
          <ul >
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
            <Cta outLined ml={'10px'} mr={'10px'} >
              SIGN UP
        </Cta>
            <Cta ml={'10px'} mr={'10px'}>
              LOG IN
        </Cta>
          </div>
        </div>
        {/* buttons */}


      </div>
      <div className='headd' >
        <section className='text'>
          <div className='txt1'>
            <div>
              <span>what is surse code</span>
              <div className='htext'>Code will be 	<br/>
              Fast, Easy, Efficiency </div>
            </div>

          </div>

        </section>
        <section className='img'>
          3
      </section>
      </div>
    </>
  );
}

export default App;
