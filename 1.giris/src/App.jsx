import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Javascript kodları buraya yazılır.
  let a = 15;
  const firstName = "Vedat";

  let vize1 = 60;
  let vize2 = 80;

  let sonuc = false;

  let isimler = [
    "Vedat",
    "Cansu",
    "Sevda"
  ]

  let products = [
    "Samsung",
    "Iphone",
    "Xhomi"
  ]

  return (
    // HTML kodları buraya yazılır
    <div>
      <p>a değişkeninin değeri : {a} dir</p>

      <p>Müşterinin Adi : {firstName}</p>

      <p>Ortalama : {(vize1 + vize2) / 2}</p>

      {sonuc ? <p>Ehliyeti alabilirsin</p> : <p>Ehliyeti alamazsin!</p>}

      {/* {(vize1 + vize2) / 2 >= 50 ? <p>Dersten gectin aferin</p> : <p>kaldin geçmiş olsun</p>} */}

      {
        isimler.map((isim, index) => (
          <div style={{ borde }}>{isim}</div>
        ))
      }

      {
        // products.map((product, index) => (
        //   <div key={index}><br />{product}</div>
        // ))
      }

    </div>
  )
}

export default App
