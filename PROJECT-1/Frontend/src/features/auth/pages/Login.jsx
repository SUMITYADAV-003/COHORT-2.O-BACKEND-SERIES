
import {Link} from "react-router"
import "../style/form.scss";

const Login = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Login </h1>
        <form >
          <input type="text" placeholder='Enter Your username' name="username" id="username" />
          <input type="password" name="password" id="password" placeholder='Enter Your password' />
         <button className='button primary-button' type='submit'>Login</button>
        </form>
        <p>Don't have an account ? <Link to={"/register"} >Create One.</Link></p>
      </div>
    </main>
  )
}

export default Login