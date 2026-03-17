import React, {useState}from 'react'
import {Link} from "react-router"
import '../styles/form.scss'
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e){
    e.preventDefault();

    axios.post("http://localhost:3001/api/auth/register", {
      username,
      password,
      email,
    }, {withCredentials: true})
    .then(res => {
      console.log(res.data);
    })

    
  } 


  return (
    <main>
      <div className='form-controller'>
        <h1> Register </h1>

        <form onSubmit={handleSubmit}>
          <input 
          type="text"
          name="username"
          onInput={(e) => {setUsername(e.target.value)}}
          placeholder='Entre Your username' />

          <input 
          type="email" 
          name="email"
          onInput={(e) => {setEmail(e.target.value)}}
          placeholder='Entre Your email' />
          <input 
          type="password"
          name="password"
          onInput={(e) => {setPassword(e.target.value)}}
          placeholder='Entre Your password' />
          <button type='submit'>Register</button>
        </form>
         <p>Already have an account? <Link className='toggleAuthForm' to="/login">Login</Link></p>
      </div>
      
    </main>
  )
}

export default Register