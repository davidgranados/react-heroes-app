import React from "react";
import { mount } from "enzyme";
import { AuthContext } from "../../../auth/AuthContext";
import { types } from "../../../types/types";
import LoginScreen from "../../../components/login/LoginScreen";

describe("Pruebas en <LoginScreen />", () => {
  const history = {
    replace: jest.fn(),
  };

  const contextValue = {
    authDispatch: jest.fn(),
    authState: {
      logged: false,
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <LoginScreen history={history} />
    </AuthContext.Provider>
  );

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de realizar el authDispatch y la navegación", () => {
    const submitEvent = { preventDefault() {} };
    const changeNameEvent = { target: { name: "name", value: "david" } };
    wrapper.find('[name="name"]').simulate("change", changeNameEvent);
    wrapper.find("form").simulate("submit", submitEvent);

    expect(contextValue.authDispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: "david",
      },
    });
  });
});
