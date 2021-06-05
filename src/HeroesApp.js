import React, { useReducer } from "react";
import AppRouter from "./components/routers/AppRouter";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

const HeroesApp = () => {
  const [authState, dispatchState] = useReducer(authReducer, {}, init);

  return (
    <AuthContext.Provider
      value={{
        authState,
        dispatchState,
      }}
    >
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default HeroesApp;
