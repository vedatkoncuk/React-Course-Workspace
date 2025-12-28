import React from 'react'
import '../css/currency.css'
import { FaArrowRight } from "react-icons/fa";

function Currency() {
  return (
    <div>
      <div className="currency-div">
        <div>
          <h3 style={{ padding: "10px", borderRadius: "5px", backgroundColor: 'black', color: "#fff", position: 'absolute', top: "140px", left: "250px" }}>DÖVİZ KURU UYGULAMASI</h3>
        </div>

        <div>
          <input type="number" className='amount' />
          <select className="from-currency-option">
            <option>USD</option>
            <option>EUR</option>
            <option>TL</option>
          </select>

          <FaArrowRight style={{ border: "3px solid", borderRadius: "50%", fontSize: "25px", marginLeft: "5px" }} />

          <select className="to-currency-option">
            <option>TL</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
          <input type="number" className='amount' />
        </div>

        <div>
          <button className="exchange-button">Çevir</button>
        </div>

      </div>


    </div>
  )
}

export default Currency