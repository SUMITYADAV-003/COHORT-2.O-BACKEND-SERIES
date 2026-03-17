import React from 'react'
import {Link} from "react-router"
import '../styles/form.scss'

const Register = () => {
  return (
    <main>
      <div className='form-controller'>
        <h1>Register </h1>

        <form >
          <input type="text"  placeholder='Entre Your username' />
          <input type="email"  placeholder='Entre Your email' />
          <input type="password"  placeholder='Entre Your password' />
          <button>Register</button>
        </form>
         <p>Already have an account? <Link className='toggleAuthForm' to="/login">Login</Link></p>
      </div>
      
    </main>
  )
}

export default Register