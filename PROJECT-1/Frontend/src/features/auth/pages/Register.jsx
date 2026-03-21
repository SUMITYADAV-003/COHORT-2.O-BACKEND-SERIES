
import {Link} from "react-router"

const Register = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Rigister</h1>
        <form >
          <input 
          type="text"
          name="username"
          id="username"
          placeholder='Enter Your Name' />
          <input 
          type="email"
          name="email"
          id='email'
          placeholder='Enter You email' />
          <input 
          type="password"
          name="password"
          id='password'
          placeholder='Enter You password' />
          <button className='button primary-button'>Register</button>
        </form>
         <p>Already have an account ? <Link to={"/login"} >Login to account.</Link></p>

      </div>
      

    </main>
  )
}

export default Register