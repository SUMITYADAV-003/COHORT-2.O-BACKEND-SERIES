import React from 'react'
import {Link} from "react-router"
import "../styles/form.scss"

const Login = () => {
  return (
    <main>
      <div className="form-controller">
        <h1>Login</h1>

        <form >
          <input type="text"  placeholder='Enter User Name'/>
           <input type="password" placeholder='Enter password ' />
           <button>Login</button>
        </form>
        <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Register</Link></p>
      </div>
    </main>
  )
}

export default Login