import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hello  from './Greeter'
import {CoinGame, Click, Submit}  from './Greeter'
import './App.css'
import SlotMachine  from './SlotMachine'
import Item  from './items'
import Accommodation from './Accommodation'
import SmileTogle from './SmileToggle'
import ColorBox from './ColorBox'
import Score from './Score'
import RandomTogle from './RandomToggle'
import ToggleClone from './ToggleClone'
import Scoreboard from './Scoreboard'


function App() {  
  return (
    <>
      <Scoreboard user = {5} winScore={3}/>
    </>
  );
}

export default App
