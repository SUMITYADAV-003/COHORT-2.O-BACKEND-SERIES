import React, {useState}  from "react";
import {Link} from "react-router"
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

const Register = () => {
  const {user, loading, handleRegister} = useAuth();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // e.preventDefault
    e.preventDefault();

    await handleRegister(username,password,email);
    navigate('/home')
    
if(loading) {
    return (<main>
      <h1>Loading......</h1>
    </main>)
  }

  }


  return (
    <main>
      <div className="form-container">
        <h1>Rigister</h1>
        <form onSubmit={handleSubmit}>
          <input 
          onInput={(e) => {setUsername(e.target.value)}}
          type="text"
          name="username"
          id="username"
          placeholder='Enter Your Name' />
          <input 
          onInput={(e) => {setEmail(e.target.value)}}
          type="email"
          name="email"
          id='email'
          placeholder='Enter You email' />
          <input 
          onInput={(e) => {setPassword(e.target.value)}}
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