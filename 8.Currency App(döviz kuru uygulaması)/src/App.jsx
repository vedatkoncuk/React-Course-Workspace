import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Currency from './components/Currency'

function App() {


  return (
    <div style={{ display: "flex", alignContent: 'center', justifyContent: 'center', padding: "50px" }}>
      <Currency />
    </div>


  )
}

export default App
