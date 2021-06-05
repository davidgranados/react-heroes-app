import React, { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";


const LoginScreen = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    password: "",
  });
  const { authDispatch } = useContext(AuthContext);

  const { name, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    authDispatch({
      type: types.login,
      payload: {
        name,
      },
    });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          className={"form-control"}
          type="text"
          placeholder={"username"}
          autoComplete={"off"}
          name={"name"}
          value={name}
          onChange={handleInputChange}
        />
        <input
          className={"form-control"}
          placeholder={"password"}
          type="password"
          name={"password"}
          value={password}
          onChange={handleInputChange}
        />
        <button type={"submit"} className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};
export default LoginScreen;
