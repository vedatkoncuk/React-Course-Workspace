import React from 'react'

function Login() {
  return (
    <>
      <div>

        <div>
          <p>kullanici adiniz: </p>
          <input type="text" name="name" id="name-input" />
        </div>

        <div>
          <p>sifreniz:</p>
          <input type="text" />
        </div>

        <div>

          <button>Giriş Yap</button>
        </div>
      </div >
    </>
  )
}

export default Login