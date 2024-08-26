import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hello  from './Greeter'
import {CoinGame}  from './Greeter'
import './App.css'

function App() {
  const bar = [1,2,3,4,5]
  const bar2 = 4
  return (
    <>
      <Hello number={[1,2,3,4,5]} number2 = {bar2}/>
      <CoinGame/>
    </>
  );
}

export default App
