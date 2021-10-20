import React from "react";
import { shallow } from "enzyme";
import InitialForm from "./InitialForm";

describe("InitialForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<InitialForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
