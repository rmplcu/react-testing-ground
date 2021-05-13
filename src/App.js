//import logo from './logo.svg';
import './App.css'
import './Element.css'
import './Dropdown.css'
import './Card.css'
import './Nasa.css'
import React, {useState} from 'react'
import Todos from './components/Todos'
import Shop from './components/Shop'
import Dropdown from './components/Dropdown'
import Card from './components/Card'
import Nasa from './components/Nasa'
import LovePercentage from './components/LovePercentage'

function App() {
  const [active, setActive] = useState(-1)

  return (
    <div >
      <div className="mydiv">
        <Dropdown />
        <div>
          <h2 className="position-left" style={{marginLeft:"10px", marginRight:"10px", fontFamily:"sans-serif", color:"rgba(255, 255, 255, 0.85)"}}>These are my projects: </h2>
          <button className="mybutton position-left" onClick={() => {setActive(0)}}>To do's</button>
          <button className="mybutton position-left" onClick={() => {setActive(1)}}>Shop</button>
          <button className="mybutton position-left" onClick={() => {setActive(2)}}>Cards</button>
          <button className="mybutton position-left" onClick={() => {setActive(3)}}>Space Img</button>
          <button className="mybutton position-left" onClick={() => {setActive(4)}}>Love Percentage</button>
        </div>
        <div style={{clear:"both"}}></div>
      </div>
      
      
      {
        active === 0 ? <Todos /> : active === 1 ? <Shop /> : active === 2 ? <Card /> : active === 3 ? <Nasa /> : active === 4 ? <LovePercentage/> :
        <>
        
        <div className="homepage" style={{marginTop: "0px"}}>
          <h3 className="h3">Hi</h3>
        </div>
        </>
      }
    </div>
  );
}

export default App;
