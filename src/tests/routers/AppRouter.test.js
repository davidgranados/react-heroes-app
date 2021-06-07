import React from "react";
import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import AppRouter from "../../components/routers/AppRouter";

describe("Pruebas en <AppRouter />", () => {
  const contextValue = {
    authDispatch: jest.fn(),
    authState: {
      logged: false,
    },
  };

  test("debe de mostrar login si no está autenticado", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar el componente marvel si está autenticado", () => {
    const contextValue = {
      authDispatch: jest.fn(),
      authState: {
        logged: true,
        name: "Juan",
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper.find(".navbar").exists()).toBe(true);
  });
});
