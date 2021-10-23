import React from "react";
import { shallow } from "enzyme";
import Food from "./Food";

describe("Food", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Food />);
    expect(wrapper).toMatchSnapshot();
  });
});
