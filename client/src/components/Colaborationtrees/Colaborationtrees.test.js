import React from "react";
import { shallow } from "enzyme";
import Colaborationtrees from "./Colaborationtrees";

describe("Colaborationtrees", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Colaborationtrees />);
    expect(wrapper).toMatchSnapshot();
  });
});
