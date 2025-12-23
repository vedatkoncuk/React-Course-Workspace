import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './product'
import Container from './container'

function App() {
  return (
    <div>
      <Container>
        <Product productName="Buzdolabi" price="15000" />
      </Container>
    </div>

  )
}

export default App
