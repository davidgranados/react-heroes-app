import React, { useEffect, useReducer } from "react";
import AppRouter from "./components/routers/AppRouter";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("auth")) || { logged: false };
};

const HeroesApp = () => {
  const [authState, authDispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(authState));
  }, [authState]);
  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
      }}
    >
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default HeroesApp;
