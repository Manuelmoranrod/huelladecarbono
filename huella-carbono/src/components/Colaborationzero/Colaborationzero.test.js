import React from "react";
import { shallow } from "enzyme";
import Colaborationzero from "./Colaborationzero";

describe("Colaborationzero", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Colaborationzero />);
    expect(wrapper).toMatchSnapshot();
  });
});
