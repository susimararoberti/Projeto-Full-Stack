import { createContext, useContext, useState } from "react";
import { setInStorage, login } from "../api/auth";

const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const userStored = localStorage.getItem("user");
  const [user, setUser] = useState(userStored ? JSON.parse(userStored) : null);

  const signin = async (data, callback) => {
    try {
      const response = await login(data);
      const user = {
        accessToken: response.data.token,
        ...response.data.userLogin,
      };
      setInStorage("user", user);
      setUser(user);
      callback();
    } catch (error) {
      alert("Usuário ou senha inválidos");
    }
  };

  const logout = (callback) => {
    localStorage.removeItem("user");
    setUser(null);
    callback();
  };

  return <AuthContext.Provider {...props} value={{ user, signin, logout }} />;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
