import {useContext} from "react";
import { AuthContext } from "../AuthContext";
import {login, register, getme} from "../services/auth.api";


export const userAuth () => {
  const context = useContext(AuthContext);

  const {user, setUser, loading, setLoading} = context;

}