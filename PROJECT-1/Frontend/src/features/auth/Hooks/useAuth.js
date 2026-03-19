import {useContext} from "react";
import { AuthContext } from "../AuthContext";
import {login, register, getme} from "../services/auth.api";


export const userAuth () => {
  const context = useContext(AuthContext);

  const {user, setUser, loading, setLoading} = context;


  const handleLogin = async (username,password) => {

     setLoading(true);

     const response = await login(username.password);

     setUser(response.user);

     setLoading(false);
  }

  const handleRegister = async (username,email, password) => {
    setLoading(true);
    const response = await register(username,email, password)

    setUser(response.user)
  }

  return {
    user, loading, handleLogin, handleRegister
  }
 



}