import React from "react";
import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { MemoryRouter } from "react-router-dom";
import DashboardRoutes from "../../components/routers/DashboardRoutes";

describe("Pruebas en <DashboardRoutes />", () => {
  const contextValue = {
    authDispatch: jest.fn(),
    authState: {
      logged: true,
      name: "Juanito",
    },
  };

  test("debe mostrarse correctamente", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("Juanito");
  });
});
