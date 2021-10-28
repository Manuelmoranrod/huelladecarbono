import React from "react";
import { shallow } from "enzyme";
import Efficient from "./Efficient";

describe("Efficient", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Efficient />);
    expect(wrapper).toMatchSnapshot();
  });
});
