import React from "react";
import { shallow } from "enzyme";
import Transport from "./Transport";

describe("Transport", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Transport />);
    expect(wrapper).toMatchSnapshot();
  });
});
