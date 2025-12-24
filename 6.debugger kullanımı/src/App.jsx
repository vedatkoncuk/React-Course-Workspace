import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// debuglar tarayıcıda incele kısmında source aracında kontrol edilir gerekli sayfayı( ÖRN: app.jsx) açıp adım adım ilerleterek hatayı bulabiliriz

function App() {
  const [vize1, setVize1] = useState(0);
  const [vize2, setVize2] = useState(0);

  const ortalamaBul = () => {
    debugger
    const ortalama = topla() / 2;
    yazdir(ortalama);
  }

  const topla = () => {
    debugger
    const toplam = vize1 + vize2;
    return toplam;
  }

  const yazdir = (sonuc) => {
    debugger
    console.log(`Ortalama : ${sonuc}`);
  }


  return (
    <>
      <div><input type="number" value={vize1} onChange={(e) => setVize1(Number(e.target.value))} placeholder='vize1 giriş' /></div>

      <div><input type="number" value={vize2} onChange={(e) => setVize2(Number(e.target.value))} placeholder='vize2 giriş' /></div>

      <div><button onClick={ortalamaBul}>Ortalama Hesapla</button></div>
    </>
  )
}

export default App
