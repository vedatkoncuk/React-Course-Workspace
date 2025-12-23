import React from 'react'

function product(props) {
  const { productName, price } = props;
  return (
    <>
      <div>Ürün Bilgileri</div>

      <div>
        <div>ürün Adi: {productName}</div>
        <div>ürün Adi: {price}</div>
        <hr />
      </div>

    </>

  )
}

export default product