import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { use } from 'react'

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log("Her zaman çalişir")
  })

  useEffect(() => {
    console.log("ilk render edildiğinde çalişir.")
  }, [])

  useEffect(() => {
    console.log("ilk render edildiğinde ve firstName state değeri değiştiğinde çalişir.")
  }, [firstName])

  useEffect(() => {
    console.log("ilk render edildiğinde ve lastName state değeri değiştiğinde çalişir.")
  }, [lastName])

  return (
    <>
      <div><button onClick={() => { setFirstName("Vedat") }}>Adi Değiştir</button></div>

      <div><button onClick={() => { setLastName("Koncuk") }}>Soyadi Değiştir</button></div>
    </>
  )
}

export default App
