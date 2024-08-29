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

function App() {  
  return (
    <>
      <ColorBox colors = {[
        "#32CD32",
        "#FF6347",
        "#FFDAB9",
        "#6B8E23",
        "#87CEFA",
      ]}/>
    </>
  );
}

export default App
