import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import "../styles/form.scss";
import { useAuth } from "../Hooks/useAuth";


const Login = () => {

  const {user, loading, handleLogin}  = useAuth()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const useNavigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault()

    await  handleLogin(username, password)
    navigator('/')

  }

  if(loading){
    return ( <main>
      <h1>Loading.....</h1>
    </main>)
  }

  return (
    <main>
      <div className="form-controller">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <input
          onInput={(e) => {setUsername(e.target.value)}}
          type="text"
          name='username'
          placeholder="Enter User Name" />
          <input 
          onInput={(e) => {setPassword(e.target.value)}}
          type="password"
          name="password"
          placeholder="Enter password "
           />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link className="toggleAuthForm" to="/register">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
