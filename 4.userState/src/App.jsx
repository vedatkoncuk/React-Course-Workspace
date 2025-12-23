import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [names, setnames] = useState(["Vedat", "Cansu", "Sevda", "Ali"])

  // const handleChange = () => {
  //   nameses("Cansu")

  // console.log(names)

  const [count, setcount] = useState(0);

  let arttir = () => {
    setcount(count + 1)
  }

  let azalt = () => {
    setcount(count - 1)
  }

  console.log("Component render edildi")

  return (
    <>
      {/* <div><button onClick={() => { nameses('Cansu') }}>İsmi Değistir</button></div> */}

      {/* <div>{names} {lastName}</div>
      <div><button onClick={handleChange}>İsmi Değiştir</button></div> */}

      {/* <div>
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div> */}
      <div>{count}</div>

      <div style={{ margin: "10px" }}><button onClick={arttir}>Arttir</button></div>
      <div><button onClick={azalt}>Azalt</button></div>

    </>
  )
}


export default App
