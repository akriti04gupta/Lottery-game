import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottery from './Lottery'


function App() {
  return (
    <>
    <Lottery n={3} winingSum={15} />
    </>
  )
}

export default App
