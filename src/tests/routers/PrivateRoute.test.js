import React from "react";
import { mount } from "enzyme";
import { PrivateRoute } from "../../routers/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en <PrivateRoute />", () => {
  const props = {
    location: {
      pathname: "/marvel",
      search: "",
    },
  };

  Storage.prototype.setItem = jest.fn();

  test("debe de mostrar el componente si está autenticado y guardar localStorage", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span id={"spanForTestingComponent"}>Listo!</span>}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find("#spanForTestingComponent").exists()).toBe(true);
    const { pathname, search } = props.location;
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lastPath",
      pathname + search
    );
  });

  test("debe de bloquear el componente si no está autenticado", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={false}
          component={() => <span id={"spanForTestingComponent"}>Listo!</span>}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find("#spanForTestingComponent").exists()).toBe(false);
    const { pathname, search } = props.location;
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lastPath",
      pathname + search
    );
  });
});
